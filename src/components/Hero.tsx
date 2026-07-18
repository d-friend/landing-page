"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { LandingCopy, LandingLocale } from "@/content/landing";
import ChatPreview from "@/components/ChatPreview";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "sent" | "error";

export default function Hero({
  content,
  locale,
}: {
  content: LandingCopy["hero"];
  locale: LandingLocale;
}) {
  const reduce = useReducedMotion();
  const pilot = content.pilot;

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedEmail && !trimmedPhone) {
      setStatus("error");
      setMessage(pilot.errorMissing);
      return;
    }

    if (trimmedEmail && !EMAIL_PATTERN.test(trimmedEmail)) {
      setStatus("error");
      setMessage(pilot.errorEmail);
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
          phone: trimmedPhone,
          company,
          locale,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }

      setStatus("sent");
      setMessage(pilot.success);
      setEmail("");
      setPhone("");
    } catch {
      setStatus("error");
      setMessage(pilot.errorGeneric);
    }
  }

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pb-24 lg:pt-20">
      <div>
        <motion.h1
          {...enter(0)}
          className="headline pb-1 text-4xl font-semibold leading-[1.1] text-ink md:text-5xl lg:text-6xl"
        >
          {content.headlinePre}
          <em className="italic text-brand">{content.headlineEmphasis}</em>
          {content.headlinePost}
        </motion.h1>

        <motion.p
          {...enter(0.12)}
          className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted"
        >
          {content.subtext}
        </motion.p>

        <motion.form {...enter(0.24)} onSubmit={handleSubmit} noValidate className="relative mt-9 max-w-lg">
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex-1">
              <span className="sr-only">{pilot.emailLabel}</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={pilot.emailPlaceholder}
                className="w-full rounded-full border border-line bg-surface px-5 py-3.5 text-base text-ink transition-colors placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-soft"
              />
            </label>
            <label className="flex-1">
              <span className="sr-only">{pilot.phoneLabel}</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder={pilot.phonePlaceholder}
                className="w-full rounded-full border border-line bg-surface px-5 py-3.5 text-base text-ink transition-colors placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-soft"
              />
            </label>
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

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-3 w-full rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-brand-deep active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" ? pilot.submitting : pilot.cta}
          </button>

          <p
            role={status === "error" ? "alert" : "status"}
            aria-live="polite"
            className={`mt-3 text-sm ${
              status === "error" ? "text-red-600" : status === "sent" ? "text-brand-deep" : "text-muted"
            }`}
          >
            {message || pilot.hint}
          </p>
        </motion.form>
      </div>

      <motion.div {...enter(0.2)} className="flex justify-center lg:justify-end">
        <ChatPreview chat={content.chat} />
      </motion.div>
    </section>
  );
}
