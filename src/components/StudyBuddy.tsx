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
    <section id={sectionId} className="mx-auto max-w-6xl scroll-mt-32 px-6 py-28">
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

      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="panel-card p-8">
          <h3 className="font-display text-xl font-bold">{content.cards[0].title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{content.cards[0].body}</p>
        </Reveal>

        <Reveal delay={0.1} className="panel-card p-8">
          <h3 className="font-display text-xl font-bold">{content.cards[1].title}</h3>
          {/* Deck-style bubble pair: teacher-bot (struck through) vs D-Friend */}
          <div className="mt-5 space-y-3">
            <div className="mr-6 rounded-2xl rounded-bl-md bg-sand p-4 text-sm leading-relaxed text-faint line-through decoration-faint/70">
              {content.cards[1].before}
            </div>
            <div className="ml-6 rounded-2xl rounded-br-md bg-brand p-4 text-sm leading-relaxed text-white shadow-lg shadow-brand/25">
              {content.cards[1].after}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="panel-card p-8">
          <h3 className="font-display text-xl font-bold">{content.cards[2].title}</h3>
          <p className="mt-3 leading-relaxed text-muted">
            {content.cards[2].bodyPrefix}
            <span className="font-semibold text-brand">{content.cards[2].bodyHighlight}</span>
            {content.cards[2].bodySuffix}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
