"use client";

import { motion } from "framer-motion";
import CinematicReveal from "@/components/shared/CinematicReveal";
import { useCinematicContext, useReducedMotion } from "@/components/shared/CinematicRevealProvider";
import type { StudentCopy } from "@/content/student";

export default function Philosophy({
  content,
  sectionId,
}: {
  content: StudentCopy["philosophy"];
  sectionId: string;
}) {
  const { animationDuration } = useCinematicContext();
  const reducedMotion = useReducedMotion();

  const baseTransition = {
    duration: animationDuration / 1000,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const dLabelVariants = {
    hidden: { opacity: 0, x: -60, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { ...baseTransition, delay: 0 },
    },
  };

  const friendLabelVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { ...baseTransition, delay: 0.15 },
    },
  };

  return (
    <section id={sectionId} className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <CinematicReveal>
          <h2 className="headline max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
            {content.title}
          </h2>
        </CinematicReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-[5fr_7fr]">
          {/* D Panel - slides from left with blur */}
          <CinematicReveal direction="left" blurIntensity={8}>
            <article className="flex h-full flex-col rounded-2xl bg-brand-soft p-8 md:p-10">
              {reducedMotion ? (
                <p aria-hidden className="font-display text-7xl font-bold leading-none text-brand md:text-8xl">
                  {content.done.label}
                </p>
              ) : (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={dLabelVariants}
                >
                  <p aria-hidden className="font-display text-7xl font-bold leading-none text-brand md:text-8xl">
                    {content.done.label}
                  </p>
                </motion.div>
              )}
              <CinematicReveal delay={0.2} blurIntensity={8}>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                  {content.done.title}
                </h3>
                <p className="mt-1 text-base font-semibold text-brand-deep">
                  {content.done.subtitle}
                </p>
                <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">
                  {content.done.body}
                </p>
              </CinematicReveal>
            </article>
          </CinematicReveal>

          {/* Friend Panel - slides from right */}
          <CinematicReveal direction="right" blurIntensity={8}>
            <article className="flex h-full flex-col rounded-2xl border border-line p-8 md:p-10">
              {reducedMotion ? (
                <p aria-hidden className="font-display text-7xl font-bold leading-none text-ink md:text-8xl">
                  {content.friend.label}
                </p>
              ) : (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={friendLabelVariants}
                >
                  <p aria-hidden className="font-display text-7xl font-bold leading-none text-ink md:text-8xl">
                    {content.friend.label}
                  </p>
                </motion.div>
              )}
              <CinematicReveal delay={0.35} blurIntensity={8}>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                  {content.friend.title}
                </h3>
                <p className="mt-1 text-base font-semibold text-brand-deep">
                  {content.friend.subtitle}
                </p>
                <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">
                  {content.friend.body}
                </p>
              </CinematicReveal>
            </article>
          </CinematicReveal>
        </div>
      </div>
    </section>
  );
}
