import Reveal from "./Reveal";
import type { LandingCopy } from "@/content/landing";

export default function StudyBuddy({
  content,
  sectionId,
}: {
  content: LandingCopy["studyBuddy"];
  sectionId?: string;
}) {
  return (
    <section id={sectionId} className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mb-16 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{content.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted">
          {content.description}
        </p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="panel-card panel-card-cyan rounded-3xl p-8">
          <h3 className="text-xl font-bold">{content.cards[0].title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{content.cards[0].body}</p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="panel-card panel-card-accent rounded-3xl p-8"
        >
          <h3 className="text-xl font-bold">{content.cards[1].title}</h3>
          <div className="mt-5 space-y-3">
            <div className="rounded-2xl rounded-bl-sm bg-white/[0.04] p-3 text-sm text-muted line-through decoration-brand/60">
              {content.cards[1].before}
            </div>
            <div className="rounded-2xl rounded-br-sm bg-accent/15 p-3 text-sm text-text">
              {content.cards[1].after}
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.2}
          className="panel-card panel-card-brand rounded-3xl p-8"
        >
          <h3 className="text-xl font-bold">{content.cards[2].title}</h3>
          <p className="mt-3 leading-relaxed text-muted">
            {content.cards[2].bodyPrefix}
            <span className="text-text">{content.cards[2].bodyHighlight}</span>
            {content.cards[2].bodySuffix}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
