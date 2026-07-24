import type { TeacherCopy } from "@/content/teacher";
import Reveal from "@/components/shared/Reveal";

export default function TeacherPain({
  content,
  sectionId,
}: {
  content: TeacherCopy["pain"];
  sectionId: string;
}) {
  return (
    <section id={sectionId} className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            {content.eyebrow}
          </p>
          <h2 className="headline mt-3 max-w-3xl text-3xl font-semibold text-ink md:text-4xl">
            {content.title}
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {content.points.map((point, index) => (
            <Reveal key={point.title} delay={0.06 + index * 0.06}>
              <li>
                <h3 className="font-display text-lg font-semibold text-ink">{point.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{point.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
