import type { TeacherCopy } from "@/content/teacher";
import Reveal from "@/components/shared/Reveal";

export default function TeacherReport({
  content,
  sectionId,
}: {
  content: TeacherCopy["report"];
  sectionId: string;
}) {
  const mock = content.mock;

  return (
    <section id={sectionId} className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            {content.eyebrow}
          </p>
          <h2 className="headline mt-3 max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
            {content.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[6fr_5fr] lg:gap-14">
          {/* The report mock-up, standing in for the real post-session view. */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line bg-bg">
              <div className="flex items-baseline justify-between gap-3 border-b border-line px-6 py-5">
                <span className="font-display text-base font-semibold text-ink">{mock.title}</span>
                <span className="text-xs text-muted">{mock.classLabel}</span>
              </div>

              <dl className="grid grid-cols-3 gap-px border-b border-line bg-line">
                {mock.stats.map((stat) => (
                  <div key={stat.label} className="bg-bg px-4 py-4 text-center">
                    <dt className="text-xs leading-snug text-muted">{stat.label}</dt>
                    <dd className="font-display mt-1 text-2xl font-bold text-ink">{stat.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="border-b border-line px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {mock.groupsLabel}
                </p>
                <div className="mt-4 space-y-3.5">
                  {mock.groups.map((group, index) => (
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
              </div>

              <div className="border-b border-line px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {mock.blockersLabel}
                </p>
                <ol className="mt-3 space-y-2.5">
                  {mock.blockers.map((blocker, index) => (
                    <li key={blocker.name} className="flex items-baseline justify-between gap-4 text-sm">
                      <span className="text-ink">
                        <span className="font-display mr-2 font-bold text-brand">{index + 1}</span>
                        {blocker.name}
                      </span>
                      <span className="shrink-0 font-medium text-muted">{blocker.share}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-b border-line px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {mock.attentionLabel}
                </p>
                <ul className="mt-3 space-y-3">
                  {mock.attention.map((student) => (
                    <li key={student.name} className="border-l-2 border-brand pl-3">
                      <p className="text-sm font-semibold text-ink">{student.name}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">{student.reason}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {mock.nextLabel}
                </p>
                <p className="mt-1.5 text-sm font-medium leading-relaxed text-ink">
                  {mock.nextValue}
                </p>
                <span className="mt-4 inline-block rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white">
                  {mock.cta}
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <ul className="space-y-7">
              {content.points.map((point, index) => (
                <Reveal key={point.title} delay={0.06 + index * 0.05}>
                  <li>
                    <h3 className="font-display text-base font-semibold text-ink">{point.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted">{point.body}</p>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.34}>
              <p className="mt-9 border-t border-line pt-6 text-base leading-relaxed text-ink">
                {content.closing}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
