import Reveal from "./Reveal";
import type { LandingCopy } from "@/content/landing";

export default function Differentiation({
  content,
  sectionId,
}: {
  content: LandingCopy["differentiation"];
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
        <p className="mx-auto mt-5 max-w-3xl text-balance text-lg text-muted">
          {content.description}
        </p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="panel-card p-7 sm:p-8">
          <div className="mb-8 font-display text-sm font-bold uppercase tracking-[0.2em] text-faint">
            {content.genericLabel}
          </div>
          <div className="space-y-3">
            {content.genericPoints.map((point, index) => (
              <div
                key={point.title}
                className="rounded-2xl border-2 border-line bg-sand/50 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-line font-display text-sm font-bold text-muted">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold leading-snug text-text">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{point.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="panel-card border-brand/35 p-7 sm:p-8">
          <div className="mb-8 font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">
            {content.dfriendLabel}
          </div>
          <div className="space-y-3">
            {content.dfriendPoints.map((point, index) => (
              <div
                key={point.title}
                className="rounded-2xl border-2 border-brand/20 bg-brand/[0.06] p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold leading-snug text-text">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{point.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
