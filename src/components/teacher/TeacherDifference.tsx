import type { TeacherCopy } from "@/content/teacher";
import Reveal from "@/components/Reveal";

export default function TeacherDifference({
  content,
  sectionId,
}: {
  content: TeacherCopy["difference"];
  sectionId: string;
}) {
  return (
    <section id={sectionId} className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[6fr_5fr] lg:gap-14">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              {content.eyebrow}
            </p>
            <h2 className="headline mt-3 max-w-[20ch] text-3xl font-semibold text-ink md:text-4xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-muted">{content.body}</p>
            <p className="mt-4 max-w-[54ch] text-lg leading-relaxed text-muted">
              {content.mechanism}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-4">
              <div className="rounded-2xl border border-line bg-bg p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {content.tutorLabel}
                </p>
                <p className="mt-2 text-base leading-relaxed text-muted line-through decoration-line">
                  “{content.tutorLine}”
                </p>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-soft p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
                  {content.dfriendLabel}
                </p>
                <p className="mt-2 text-base leading-relaxed text-ink">“{content.dfriendLine}”</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
