"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { StudentCopy } from "@/content/student";
import Reveal from "@/components/shared/Reveal";

const CORRECT_GAIN = 20;
const WRONG_GAIN = 12;

/**
 * Interactive miniature of the real progress mechanic: correct submissions
 * jump further, wrong-but-genuine ones still move forward.
 */
export default function Progress({
  content,
  sectionId,
}: {
  content: StudentCopy["progress"];
  sectionId: string;
}) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(24);
  const isDone = value >= 100;

  const submit = (gain: number) => setValue((v) => Math.min(100, v + gain));

  return (
    <section id={sectionId} className="border-t border-line bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-deep">
            {content.eyebrow}
          </p>
          <h2 className="headline mt-3 text-3xl font-semibold text-ink md:text-4xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-lg leading-relaxed text-muted">
            {content.description}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl border border-line bg-bg p-7 text-left md:p-9">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-muted">{content.progressLabel}</span>
              <span className="font-display text-2xl font-bold tabular-nums text-ink">
                {value}%
              </span>
            </div>
            <div
              role="progressbar"
              aria-valuenow={value}
              aria-valuemin={0}
              aria-valuemax={100}
              className="mt-3 h-3 overflow-hidden rounded-full bg-line"
            >
              <motion.div
                className="h-full rounded-full bg-brand"
                animate={{ width: `${value}%` }}
                transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 20 }}
              />
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-brand-soft p-5">
                <div className="flex items-baseline justify-between">
                  <p className="font-display font-semibold text-ink">{content.rightCard.title}</p>
                  <p className="font-display text-xl font-bold text-ok">{content.rightCard.gain}</p>
                </div>
                <p className="mt-1 text-sm text-muted">{content.rightCard.body}</p>
                <button
                  type="button"
                  disabled={isDone}
                  onClick={() => submit(CORRECT_GAIN)}
                  className="mt-4 w-full rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-deep active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {content.demo.correct}
                </button>
              </div>

              <div className="rounded-xl border border-line p-5">
                <div className="flex items-baseline justify-between">
                  <p className="font-display font-semibold text-ink">{content.wrongCard.title}</p>
                  <p className="font-display text-xl font-bold text-brand-deep">
                    {content.wrongCard.gain}
                  </p>
                </div>
                <p className="mt-1 text-sm text-muted">{content.wrongCard.body}</p>
                <button
                  type="button"
                  disabled={isDone}
                  onClick={() => submit(WRONG_GAIN)}
                  className="mt-4 w-full rounded-full border border-ink px-4 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-ink hover:text-bg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {content.demo.wrong}
                </button>
              </div>
            </div>

            <div className="mt-5 flex min-h-6 items-center justify-between gap-3">
              {isDone ? (
                <p className="text-sm font-semibold text-ok">{content.demo.done}</p>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={() => setValue(24)}
                className="text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                {content.demo.reset}
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-[58ch] text-sm leading-relaxed text-muted">
            {content.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
