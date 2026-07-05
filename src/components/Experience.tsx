import Reveal from "./Reveal";
import type { LandingCopy } from "@/content/landing";

export default function Experience({
  content,
  sectionId,
}: {
  content: LandingCopy["experience"];
  sectionId?: string;
}) {
  return (
    <section
      id={sectionId}
      className="relative mx-auto max-w-6xl scroll-mt-32 px-6 py-28"
    >
      <Reveal className="mb-16 text-center">
        <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          {content.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted">
          {content.description}
        </p>
      </Reveal>

      <div className="mb-12 grid gap-6 md:grid-cols-2">
        <Reveal className="panel-card p-8">
          <div className="font-display text-sm font-bold uppercase tracking-widest text-faint">
            {content.sessionOne.label}
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold">{content.sessionOne.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{content.sessionOne.body}</p>
        </Reveal>
        <Reveal delay={0.1} className="panel-card border-brand/35 p-8">
          <div className="font-display text-sm font-bold uppercase tracking-widest text-brand">
            {content.sessionTwo.label}
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold">{content.sessionTwo.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{content.sessionTwo.body}</p>
        </Reveal>
      </div>

      {/* P1 → P4 arc; P3 is the deliberate pattern-break, so it goes dark */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.problems.map((p, i) => {
          const isBreak = p.tag === "P3";
          return (
            <Reveal
              key={p.tag}
              delay={i * 0.08}
              className={`panel-card panel-card-soft flex h-full flex-col p-6 ${
                isBreak ? "panel-card-dark" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-lg px-2.5 py-1 font-display text-sm font-extrabold ${
                    isBreak ? "bg-brand-light/20 text-brand-light" : "bg-brand/12 text-brand"
                  }`}
                >
                  {p.tag}
                </span>
                <span
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    isBreak ? "text-cream-on-dark" : "text-faint"
                  }`}
                >
                  {p.role}
                </span>
              </div>
              <h4 className="mt-4 font-display text-lg font-bold">{p.name}</h4>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  isBreak ? "text-cream-on-dark" : "text-muted"
                }`}
              >
                {p.desc}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
