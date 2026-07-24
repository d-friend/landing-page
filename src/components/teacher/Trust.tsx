import type { TeacherCopy } from "@/content/teacher";
import Reveal from "@/components/shared/Reveal";

export default function TeacherTrust({
  content,
  sectionId,
}: {
  content: TeacherCopy["trust"];
  sectionId: string;
}) {
  return (
    <section id={sectionId} className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
          {content.eyebrow}
        </p>
        <h2 className="headline mt-3 max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
          {content.title}
        </h2>
      </Reveal>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {content.blocks.map((block, index) => (
          <Reveal key={block.title} delay={0.06 + index * 0.06}>
            <li className="h-full rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-display text-base font-semibold text-ink">{block.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{block.body}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
