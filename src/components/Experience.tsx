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
    <section id={sectionId} className="relative mx-auto max-w-6xl px-6 py-28 opacity-100">
      <Reveal className="mb-16 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{content.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted">
          {content.description}
        </p>
      </Reveal>

      <div className="mb-12 grid gap-6 md:grid-cols-2">
        <Reveal className="panel-card panel-card-cyan rounded-3xl p-8">
          <div className="text-sm font-semibold uppercase tracking-widest text-muted">
            {content.sessionOne.label}
          </div>
          <h3 className="mt-2 text-2xl font-bold">{content.sessionOne.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{content.sessionOne.body}</p>
        </Reveal>
        <Reveal
          delay={0.1}
          className="panel-card panel-card-brand rounded-3xl border-brand/25 p-8"
        >
          <div className="text-sm font-semibold uppercase tracking-widest text-brand">
            {content.sessionTwo.label}
          </div>
          <h3 className="mt-2 text-2xl font-bold">{content.sessionTwo.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{content.sessionTwo.body}</p>
        </Reveal>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.problems.map((p, i) => (
          <Reveal
            key={p.tag}
            delay={i * 0.08}
            className="panel-card panel-card-accent panel-card-soft flex h-full flex-col rounded-2xl p-6"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-accent/20 px-2.5 py-1 text-sm font-bold text-accent">
                {p.tag}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                {p.role}
              </span>
            </div>
            <h4 className="mt-4 text-lg font-bold">{p.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
