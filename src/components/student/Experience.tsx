import type { StudentCopy } from "@/content/student";
import Reveal from "@/components/shared/Reveal";

export default function Experience({
  content,
  sectionId,
}: {
  content: StudentCopy["experience"];
  sectionId: string;
}) {
  return (
    <section id={sectionId} className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-deep">
            {content.eyebrow}
          </p>
          <h2 className="headline mt-3 max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-muted">
            {content.description}
          </p>
        </Reveal>

        {/* Two-session arc */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.08}>
            <article className="h-full rounded-2xl border border-line p-7">
              <p className="text-sm font-semibold text-brand-deep">{content.sessionOne.label}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                {content.sessionOne.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{content.sessionOne.body}</p>
            </article>
          </Reveal>
          <Reveal delay={0.14}>
            <article className="h-full rounded-2xl border border-brand/40 bg-brand-soft/60 p-7">
              <p className="text-sm font-semibold text-brand-deep">{content.sessionTwo.label}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                {content.sessionTwo.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{content.sessionTwo.body}</p>
            </article>
          </Reveal>
        </div>

        {/* The fixed P1 to P4 arc. P3 is the deliberate pattern-breaker, so it carries the accent. */}
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.problems.map((problem, index) => {
            const isBreaker = problem.tag === "P3";
            return (
              <Reveal key={problem.tag} delay={0.08 + index * 0.06} className="h-full">
                <li
                  className={`flex h-full flex-col rounded-2xl p-6 ${
                    isBreaker ? "bg-ink text-bg" : "border border-line bg-bg"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <span
                      className={`font-display text-3xl font-bold ${
                        isBreaker ? "text-brand" : "text-ink"
                      }`}
                    >
                      {problem.tag}
                    </span>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wide ${
                        isBreaker ? "text-bg/70" : "text-muted"
                      }`}
                    >
                      {problem.role}
                    </span>
                  </div>
                  <h3
                    className={`mt-4 font-display text-lg font-semibold ${
                      isBreaker ? "text-bg" : "text-ink"
                    }`}
                  >
                    {problem.name}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      isBreaker ? "text-bg/75" : "text-muted"
                    }`}
                  >
                    {problem.desc}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
