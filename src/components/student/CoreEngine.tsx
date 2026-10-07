"use client";

import { motion } from "framer-motion";
import CinematicReveal from "@/components/shared/CinematicReveal";
import { useCinematicContext, useIsMobile } from "@/components/shared/CinematicRevealProvider";
import type { StudentCopy } from "@/content/student";

export default function CoreEngine({
  content,
  sectionId,
}: {
  content: StudentCopy["coreEngine"];
  sectionId: string;
}) {
  const { staggerDelay, animationDuration } = useCinematicContext();
  const isMobile = useIsMobile();

  const baseTransition = {
    duration: animationDuration / 1000,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section id={sectionId} className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <CinematicReveal>
        <h2 className="headline max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-muted">
          {content.description}
        </p>
      </CinematicReveal>

      {isMobile ? (
        /* Mobile: horizontal scroll */
        <div className="mt-12 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-5 px-5">
          {content.steps.map((step, index) => (
            <motion.div
              key={step.letter}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...baseTransition, delay: index * 0.1 }}
              className="min-w-[260px] flex-shrink-0 snap-center"
            >
              <div className="border-t-2 border-brand pt-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-brand">{step.letter}</span>
                  <span className="font-display text-lg font-semibold text-ink">{step.word}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Desktop: staggered grid */
        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, index) => (
            <CinematicReveal
              key={step.letter}
              delay={index * (staggerDelay / 1000)}
            >
              <li className="border-t-2 border-brand pt-5">
                <motion.div
                  className="flex items-baseline gap-2"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="font-display text-4xl font-bold text-brand">{step.letter}</span>
                  <span className="font-display text-lg font-semibold text-ink">{step.word}</span>
                </motion.div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            </CinematicReveal>
          ))}
        </ol>
      )}

      <CinematicReveal delay={0.32}>
        <div className="mt-14 overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="px-6 py-6 sm:px-8">
            <span className="font-display text-sm font-bold tracking-wide text-brand">
              {content.gap.label}
            </span>
            <h3 className="headline mt-1 text-xl font-semibold text-ink md:text-2xl">
              {content.gap.title}
            </h3>
          </div>

          <div className="relative grid gap-px border-y border-line bg-line sm:grid-cols-2">
            <div className="bg-surface px-6 py-6 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {content.gap.plannedLabel}
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink">"{content.gap.planned}"</p>
            </div>
            <div className="bg-surface px-6 py-6 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                {content.gap.realityLabel}
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink">"{content.gap.reality}"</p>
            </div>

            {/* Sits on the hairline so the jump between the two reads as a gap. */}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-bg font-display text-base font-bold text-brand sm:flex"
            >
              →
            </span>
          </div>

          <p className="px-6 py-6 text-sm leading-relaxed text-muted sm:px-8">
            {content.gap.body}
          </p>
        </div>
      </CinematicReveal>

      <CinematicReveal delay={0.38}>
        <p className="mt-6 flex items-start gap-2 text-sm leading-relaxed text-muted">
          <span aria-hidden="true" className="text-brand">
            ↺
          </span>
          {content.loop}
        </p>
      </CinematicReveal>
    </section>
  );
}
