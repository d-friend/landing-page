"use client";
import { type FormEvent, useState } from "react";
import { dict, type Lang } from "@/lib/i18n";

const TO = "hello@dfriend.online";

// No backend yet: submitting opens the visitor's mail app with a ready message to us.
// shortcut: depends on a mail client being set up; move to /api/feedback or a form service if sign-ups matter.
export function TeacherForm({ lang }: { lang: Lang }) {
  const t = dict[lang].teachers;
  const [sent, setSent] = useState<string | null>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    if (!email) return;
    const subject = encodeURIComponent(t.mailSubject);
    const body = encodeURIComponent(t.mailBody(email));
    window.location.href = `mailto:${TO}?subject=${subject}&body=${body}`;
    setSent(email);
  };
  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 8, flex: "1 1 360px" }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <label htmlFor="t-mail" className="sr">{t.emailLabel}</label>
        <input
          id="t-mail"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t.emailPlaceholder}
          style={{ flex: "1 1 200px", minHeight: 48, border: "2px solid #15171C", borderRadius: 14, padding: "0 16px", font: "500 16px var(--font-sans), sans-serif", background: "#F3F5F7" }}
        />
        <button type="submit" className="btn btn-ghost">{t.submit}</button>
      </div>
      <p aria-live="polite" style={{ margin: 0, fontSize: 14, color: "#4A4F5C", minHeight: 20 }}>
        {sent && <>{t.sentBefore}<a href={`mailto:${TO}`}>{TO}</a>{t.sentAfter}</>}
      </p>
    </form>
  );
}
