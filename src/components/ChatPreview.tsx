"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LandingCopy } from "@/content/landing";

/**
 * A miniature of the real Session 2 chat: the student proposes, the buddy
 * voices doubt, the student self-corrects. This is the product's core
 * interaction rendered as an actual component, not a screenshot.
 */
export default function ChatPreview({ chat }: { chat: LandingCopy["hero"]["chat"] }) {
  const reduce = useReducedMotion();

  return (
    <figure className="w-full max-w-md">
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_20px_50px_-24px_rgba(120,60,30,0.25)]">
        <div className="border-b border-line px-5 py-3.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-deep">
            {chat.problemLabel}
          </p>
          <p className="mt-1 text-sm font-medium text-ink">{chat.problemText}</p>
        </div>

        <ul className="flex flex-col gap-3 px-4 py-5">
          {chat.messages.map((message, index) => {
            const isBuddy = message.from === "buddy";
            return (
              <motion.li
                key={index}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  delay: reduce ? 0 : 0.5 + index * 0.55,
                }}
                className={`flex items-end gap-2 ${isBuddy ? "" : "flex-row-reverse"}`}
              >
                {isBuddy ? (
                  <span
                    aria-hidden
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand font-display text-xs font-bold text-white"
                  >
                    D
                  </span>
                ) : null}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    isBuddy
                      ? "rounded-bl-md bg-brand-soft text-ink"
                      : "rounded-br-md bg-ink text-bg"
                  }`}
                >
                  <span className="sr-only">
                    {isBuddy ? chat.buddyName : chat.studentName}:{" "}
                  </span>
                  {message.text}
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
      <figcaption className="mt-3 text-center text-sm text-muted">{chat.note}</figcaption>
    </figure>
  );
}
