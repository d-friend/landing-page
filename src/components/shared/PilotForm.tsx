"use client";

import { useState } from "react";
import type { Locale, PilotFormCopy } from "@/content/shared";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "sent" | "error";

/** Tells the team which page a signup came from. */
export type PilotAudience = "student" | "teacher";

export default function PilotForm({
  copy,
  locale,
  audience,
  className,
}: {
  copy: PilotFormCopy;
  locale: Locale;
  audience: PilotAudience;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setStatus("error");
      setMessage(copy.errorMissing);
      return;
    }

    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setStatus("error");
      setMessage(copy.errorEmail);
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/pilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmedEmail,
          company,
          locale,
          audience,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }

      setStatus("sent");
      setMessage(copy.success);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage(copy.errorGeneric);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`relative ${className ?? ""}`}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">{copy.emailLabel}</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={copy.emailPlaceholder}
            className="w-full rounded-full border border-line bg-surface px-5 py-3.5 text-base text-ink transition-colors placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-soft"
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-brand-deep active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? copy.submitting : copy.cta}
        </button>
      </div>

      {/* Honeypot: hidden from humans, irresistible to bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
        className="absolute left-[-9999px] h-px w-px opacity-0"
      />

      <p
        role={status === "error" ? "alert" : "status"}
        aria-live="polite"
        className={`mt-3 text-sm ${
          status === "error" ? "text-red-600" : status === "sent" ? "text-brand-deep" : "text-muted"
        }`}
      >
        {message || copy.hint}
      </p>
    </form>
  );
}
