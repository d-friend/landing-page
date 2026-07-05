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
    <section id={sectionId} className="mx-auto max-w-6xl scroll-mt-32 px-6 py-28">
      <Reveal className="mb-16 text-center">
        <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          {content.title}
        </h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="panel-card p-8 sm:p-10">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand font-display text-4xl font-black text-white">
            {content.done.label}
          </span>
          <h3 className="mt-6 font-display text-2xl font-bold">{content.done.title}</h3>
          <p className="mt-2 font-display text-lg font-bold text-brand">
            {content.done.subtitle}
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            {content.done.body.split(content.done.emphasis)[0]}
            <span className="font-semibold text-text">{content.done.emphasis}</span>
            {content.done.body.split(content.done.emphasis)[1]}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="panel-card p-8 sm:p-10">
          <span className="inline-flex h-16 items-center justify-center rounded-2xl bg-sand px-5 font-display text-3xl font-black text-text">
            {content.friend.label}
          </span>
          <h3 className="mt-6 font-display text-2xl font-bold">{content.friend.title}</h3>
          <p className="mt-2 font-display text-lg font-bold text-green">
            {content.friend.subtitle}
          </p>
          <p className="mt-4 leading-relaxed text-muted">{content.friend.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
