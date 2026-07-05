import Reveal from "./Reveal";
import type { LandingCopy } from "@/content/landing";

export default function ForParents({
  content,
  sectionId,
}: {
  content: LandingCopy["parents"];
  sectionId?: string;
}) {
  return (
    <section id={sectionId} className="mx-auto max-w-6xl scroll-mt-32 px-6 py-28">
      <Reveal className="mb-16 text-center">
        <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-green">
          {content.eyebrow}
        </span>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          {content.title}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-balance text-lg text-muted">
          {content.description}
        </p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {content.cards.map((card, index) => (
          <Reveal
            key={card.title}
            delay={index * 0.08}
            className="panel-card flex h-full flex-col p-8"
          >
            <span className="font-display text-sm font-extrabold uppercase tracking-[0.08em] text-green">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold">{card.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{card.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10 rounded-3xl border-2 border-green/25 bg-green/[0.07] p-8 sm:flex sm:items-baseline sm:gap-6 sm:p-10">
        <h3 className="shrink-0 font-display text-lg font-extrabold text-green">
          {content.note.title}
        </h3>
        <p className="mt-3 leading-relaxed text-muted sm:mt-0">{content.note.body}</p>
      </Reveal>
    </section>
  );
}
