import Reveal from "./Reveal";
import type { LandingCopy } from "@/content/landing";

export default function Philosophy({
  content,
  sectionId,
}: {
  content: LandingCopy["philosophy"];
  sectionId?: string;
}) {
  return (
    <section id={sectionId} className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mb-16 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{content.title}</h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="panel-card panel-card-brand rounded-3xl p-8 sm:p-10">
          <div className="text-5xl font-bold text-brand">{content.done.label}</div>
          <h3 className="mt-6 text-2xl font-bold">{content.done.title}</h3>
          <p className="mt-2 text-lg font-medium text-brand">{content.done.subtitle}</p>
          <p className="mt-4 leading-relaxed text-muted">
            {content.done.body.split(content.done.emphasis)[0]}
            <span className="text-text">{content.done.emphasis}</span>
            {content.done.body.split(content.done.emphasis)[1]}
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="panel-card panel-card-accent rounded-3xl p-8 sm:p-10"
        >
          <div className="text-5xl font-bold text-accent">{content.friend.label}</div>
          <h3 className="mt-6 text-2xl font-bold">{content.friend.title}</h3>
          <p className="mt-2 text-lg font-medium text-accent">{content.friend.subtitle}</p>
          <p className="mt-4 leading-relaxed text-muted">{content.friend.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
