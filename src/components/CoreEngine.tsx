import Reveal from "./Reveal";
import type { LandingCopy } from "@/content/landing";

export default function CoreEngine({
  content,
  sectionId,
}: {
  content: LandingCopy["coreEngine"];
  sectionId?: string;
}) {
  return (
    <section id={sectionId} className="mx-auto max-w-6xl scroll-mt-32 px-6 py-28">
      <Reveal className="mb-16 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{content.title}</h2>
        <p className="mx-auto mt-5 max-w-3xl text-balance text-lg text-muted">
          {content.description}
        </p>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {content.steps.map((step, index) => (
          <Reveal
            key={step.letter}
            delay={index * 0.08}
            className="panel-card panel-card-emerald flex h-full flex-col rounded-3xl p-8"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/12 text-3xl font-bold text-emerald-300">
              {step.letter}
            </div>
            <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
              {step.word}
            </div>
            <p className="mt-4 leading-relaxed text-muted">{step.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}