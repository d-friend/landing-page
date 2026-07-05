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
      <Reveal className="mb-12 text-center">
        <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-green">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          {content.title}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-balance text-lg text-muted">
          {content.description}
        </p>
      </Reveal>

      {/* Deck-style pill flow: Problem → Done → Execute → Optimize */}
      <Reveal className="mb-14 flex flex-wrap items-center justify-center gap-3">
        {content.steps.map((step, index) => (
          <span key={step.letter} className="flex items-center gap-3">
            <span
              className={`rounded-full px-6 py-2.5 font-display text-lg font-bold ${
                step.letter === "D"
                  ? "bg-brand text-white shadow-md shadow-brand/25"
                  : "border-2 border-line bg-card text-text"
              }`}
            >
              {step.word}
            </span>
            {index < content.steps.length - 1 && (
              <span className="text-xl text-faint">→</span>
            )}
          </span>
        ))}
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {content.steps.map((step, index) => (
          <Reveal
            key={step.letter}
            delay={index * 0.08}
            className="panel-card flex h-full flex-col p-8"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green/12 font-display text-3xl font-extrabold text-green">
              {step.letter}
            </div>
            <div className="mt-6 font-display text-sm font-bold uppercase tracking-[0.2em] text-green">
              {step.word}
            </div>
            <p className="mt-4 leading-relaxed text-muted">{step.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
