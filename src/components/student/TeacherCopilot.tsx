import type { StudentCopy } from "@/content/student";
import Reveal from "@/components/shared/Reveal";

export default function TeacherCopilot({
  content,
  sectionId,
}: {
  content: StudentCopy["teacher"];
  sectionId: string;
}) {
  return (
    <section id={sectionId} className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[6fr_5fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-deep">
              {content.eyebrow}
            </p>
            <h2 className="headline mt-3 text-3xl font-semibold text-ink md:text-4xl">
              {content.title}
            </h2>
            <p className="mt-4 max-w-[54ch] text-lg leading-relaxed text-muted">
              {content.description}
            </p>
          </Reveal>

          <ul className="mt-10 space-y-7">
            {content.points.map((point, index) => (
              <Reveal key={point.title} delay={0.08 + index * 0.06}>
                <li className="border-l-2 border-brand pl-5">
                  <h3 className="font-display text-lg font-semibold text-ink">{point.title}</h3>
                  <p className="mt-1.5 max-w-[52ch] leading-relaxed text-muted">{point.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Miniature of the real Copilot class report */}
        <Reveal delay={0.12} className="justify-self-center lg:justify-self-end">
          <div className="w-full max-w-md rounded-2xl border border-line bg-surface p-6 shadow-[0_20px_50px_-24px_rgba(120,60,30,0.25)] md:p-7">
            <p className="font-display text-lg font-semibold text-ink">{content.report.title}</p>

            <div className="mt-5 flex items-end justify-between rounded-xl bg-brand-soft px-5 py-4">
              <span className="text-sm font-medium text-muted">{content.report.averageLabel}</span>
              <span className="font-display text-4xl font-bold tabular-nums text-brand-deep">
                {content.report.averageValue}
              </span>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium text-muted">{content.report.strugglingLabel}</p>
              <p className="mt-1 font-medium text-ink">{content.report.strugglingValue}</p>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium text-muted">{content.report.attentionLabel}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {content.report.students.map((name) => (
                  <li
                    key={name}
                    className="rounded-full border border-line px-3 py-1 text-sm font-medium text-ink"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
              <p className="text-sm text-muted">{content.report.draft}</p>
              <span
                aria-hidden
                className="shrink-0 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-bg"
              >
                {content.report.publish}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
