/**
 * Receives "Join our pilot" signups from the hero form and emails them to the
 * team via Resend's HTTP API (no SDK, so no extra dependency).
 *
 * Required environment:
 *   RESEND_API_KEY   Resend API key. Without it every signup returns 500 and is
 *                    only written to the server log, so set it before launch.
 * Optional:
 *   PILOT_FROM_EMAIL Sender address. Defaults to Resend's shared onboarding
 *                    sender; switch to an address on a verified dfriend.online
 *                    domain once DNS is set up.
 */
import { NextResponse } from "next/server";

const CONTACT_EMAIL = "hello@dfriend.online";

// Resend requires a verified sender domain. Until dfriend.online is verified,
// their shared onboarding sender works for delivery to CONTACT_EMAIL.
const FROM_EMAIL = process.env.PILOT_FROM_EMAIL ?? "D-Friend pilot <onboarding@resend.dev>";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort throttle. Serverless instances don't share this map, so it thins
// out casual abuse rather than acting as a real rate limiter.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const hits = (recentSubmissions.get(key) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );

  if (hits.length >= RATE_LIMIT_MAX) {
    recentSubmissions.set(key, hits);
    return true;
  }

  hits.push(now);
  recentSubmissions.set(key, hits);
  return false;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const body = (payload ?? {}) as Record<string, unknown>;

  // Bots fill every field they see; humans never see this one.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const locale = body.locale === "vi" ? "vi" : "en";

  if (!email && !phone) {
    return NextResponse.json({ error: "missing_contact" }, { status: 400 });
  }

  if (email && !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  if (email.length > 254 || phone.length > 40) {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const clientKey =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(clientKey)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[pilot] RESEND_API_KEY is not set; cannot deliver signup", {
      email,
      phone,
      locale,
    });
    return NextResponse.json({ error: "email_not_configured" }, { status: 500 });
  }

  // Keep newlines out of the subject so nothing can smuggle in extra headers.
  const subjectHint = (email || phone).replace(/[\r\n]+/g, " ").slice(0, 80);
  const submittedAt = new Date().toISOString();
  const rows = [
    ["Email", email || "—"],
    ["Phone", phone || "—"],
    ["Language", locale],
    ["Submitted", submittedAt],
  ];

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [CONTACT_EMAIL],
        reply_to: email || undefined,
        subject: `New pilot signup — ${subjectHint}`,
        text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
        html: `<h2>New pilot signup</h2><ul>${rows
          .map(([label, value]) => `<li><strong>${label}:</strong> ${escapeHtml(value)}</li>`)
          .join("")}</ul>`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("[pilot] Resend rejected the request", response.status, detail);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("[pilot] Failed to reach Resend", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
