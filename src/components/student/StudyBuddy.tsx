import type { StudentCopy } from "@/content/student";
import Reveal from "@/components/shared/Reveal";

export default function StudyBuddy({
  content,
  sectionId,
}: {
  content: StudentCopy["studyBuddy"];
  sectionId: string;
}) {
  return (
    <section id={sectionId} className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal>
        <h2 className="headline max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-muted">
          {content.description}
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mt-14 max-w-2xl">
        <h3 className="font-display text-xl font-semibold text-ink">{content.follow.title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{content.follow.body}</p>
      </Reveal>

      {/* The before/after contrast is the centerpiece of the section */}
      <Reveal delay={0.12} className="mt-12">
        <h3 className="font-display text-xl font-semibold text-ink">{content.doubt.title}</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <blockquote className="rounded-2xl border border-line p-6">
            <p className="text-sm font-medium text-muted">{content.doubt.beforeLabel}</p>
            <p className="mt-3 text-lg leading-relaxed text-muted">{content.doubt.before}</p>
          </blockquote>
          <blockquote className="rounded-2xl bg-brand-soft p-6">
            <p className="text-sm font-semibold text-brand-deep">{content.doubt.afterLabel}</p>
            <p className="mt-3 text-lg leading-relaxed text-ink">{content.doubt.after}</p>
          </blockquote>
        </div>
      </Reveal>

      <Reveal delay={0.16} className="mt-12 max-w-2xl">
        <h3 className="font-display text-xl font-semibold text-ink">{content.safety.title}</h3>
        <p className="mt-2 leading-relaxed text-muted">
          {content.safety.bodyPrefix}
          <strong className="font-semibold text-brand-deep">{content.safety.bodyHighlight}</strong>
          {content.safety.bodySuffix}
        </p>
      </Reveal>
    </section>
  );
}
