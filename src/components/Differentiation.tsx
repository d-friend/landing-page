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
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{content.title}</h2>
        <p className="mx-auto mt-5 max-w-3xl text-balance text-lg text-muted">
          {content.description}
        </p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="panel-card panel-card-cyan rounded-3xl p-7 sm:p-8">
          <div className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            {content.genericLabel}
          </div>
          <div className="space-y-3">
            {content.genericPoints.map((point, index) => (
              <div
                key={point.title}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white/8 text-sm font-bold text-brand">
                    {index + 1}
                  </span>
                  <h3 className="pt-0.5 text-base font-semibold leading-snug text-text">
                    {point.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="panel-card panel-card-brand rounded-3xl border-brand/20 p-7 sm:p-8"
        >
          <div className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            {content.dfriendLabel}
          </div>
          <div className="space-y-3">
            {content.dfriendPoints.map((point, index) => (
              <div
                key={point.title}
                className="rounded-2xl border border-brand/12 bg-brand/[0.06] p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand/20 text-sm font-bold text-brand">
                    {index + 1}
                  </span>
                  <h3 className="pt-0.5 text-base font-semibold leading-snug text-text">
                    {point.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}