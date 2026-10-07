"use client";

import CinematicReveal from "@/components/shared/CinematicReveal";
import { useCinematicContext } from "@/components/shared/CinematicRevealProvider";
import type { TeacherCopy } from "@/content/teacher";

export default function TeacherTrust({
  content,
  sectionId,
}: {
  content: TeacherCopy["trust"];
  sectionId: string;
}) {
  const { staggerDelay } = useCinematicContext();

  return (
    <section id={sectionId} className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <CinematicReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
          {content.eyebrow}
        </p>
        <h2 className="headline mt-3 max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
          {content.title}
        </h2>
      </CinematicReveal>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {content.blocks.map((block, index) => (
          <CinematicReveal key={block.title} delay={index * (staggerDelay / 1000)}>
            <li className="h-full rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-display text-base font-semibold text-ink">{block.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{block.body}</p>
            </li>
          </CinematicReveal>
        ))}
      </ul>
    </section>
  );
}
