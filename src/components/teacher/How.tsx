"use client";

import CinematicReveal from "@/components/shared/CinematicReveal";
import { useCinematicContext } from "@/components/shared/CinematicRevealProvider";
import type { TeacherCopy } from "@/content/teacher";

export default function TeacherHow({
  content,
  sectionId,
}: {
  content: TeacherCopy["how"];
  sectionId: string;
}) {
  const { staggerDelay } = useCinematicContext();

  return (
    <section id={sectionId} className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <CinematicReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
          {content.eyebrow}
        </p>
        <h2 className="headline mt-3 max-w-3xl text-3xl font-semibold text-ink md:text-4xl">
          {content.title}
        </h2>
      </CinematicReveal>

      <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
        {content.steps.map((step, index) => (
          <CinematicReveal key={step.label} delay={index * (staggerDelay / 1000)}>
            <li className="border-t-2 border-brand pt-5">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                {step.label}
              </span>
              <h3 className="font-display mt-2 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{step.body}</p>
            </li>
          </CinematicReveal>
        ))}
      </ol>
    </section>
  );
}
