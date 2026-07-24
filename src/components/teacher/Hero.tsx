"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Locale } from "@/content/shared";
import type { TeacherCopy } from "@/content/teacher";
import AudienceSwitch from "@/components/shared/AudienceSwitch";
import PilotForm from "@/components/shared/PilotForm";

export default function TeacherHero({
  content,
  locale,
}: {
  content: TeacherCopy["hero"];
  locale: Locale;
}) {
  const reduce = useReducedMotion();
  const snapshot = content.snapshot;

  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[6fr_5fr] lg:gap-16 lg:pb-24 lg:pt-20">
      <div>
        <motion.div {...enter(0)} className="mb-7">
          <AudienceSwitch locale={locale} active="teacher" />
        </motion.div>

        <motion.h1
          {...enter(0.06)}
          className="headline max-w-[18ch] pb-1 text-4xl font-semibold leading-[1.1] text-ink md:text-5xl"
        >
          {content.headline}
        </motion.h1>

        <motion.p
          {...enter(0.18)}
          className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted"
        >
          {content.subheadline}
        </motion.p>

        <motion.div {...enter(0.3)} id="teacher-signup">
          <PilotForm
            copy={content.pilot}
            locale={locale}
            audience="teacher"
            className="mt-9 max-w-lg scroll-mt-24"
          />
        </motion.div>
      </div>

      <motion.div {...enter(0.26)} className="flex justify-center lg:justify-end">
        <div className="w-full max-w-md rounded-2xl border border-line bg-surface p-6 shadow-[0_18px_40px_-28px_rgba(41,37,36,0.45)]">
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-display text-base font-semibold text-ink">{snapshot.title}</span>
            <span className="text-xs text-muted">{snapshot.classLabel}</span>
          </div>

          <div className="mt-6 space-y-4">
            {snapshot.groups.map((group, index) => (
              <div key={group.label}>
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-ink">{group.label}</span>
                  <span className="text-muted">{group.count}</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-brand-soft">
                  <div
                    className={`h-full rounded-full ${index === 0 ? "bg-brand" : index === 1 ? "bg-brand-deep" : "bg-muted"}`}
                    style={{ width: `${group.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-bg p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {snapshot.stickingLabel}
            </p>
            <p className="mt-1.5 text-sm font-medium leading-relaxed text-ink">
              {snapshot.stickingValue}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
