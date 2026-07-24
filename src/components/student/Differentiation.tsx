import type { StudentCopy } from "@/content/student";
import Reveal from "@/components/shared/Reveal";

export default function Differentiation({
  content,
  sectionId,
}: {
  content: StudentCopy["differentiation"];
  sectionId: string;
}) {
  return (
    <section id={sectionId} className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <h2 className="headline max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-muted">
            {content.description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-line">
          <Reveal delay={0.08} className="md:pr-10">
            <h3 className="font-display text-lg font-semibold text-muted">
              {content.genericLabel}
            </h3>
            <ul className="mt-6 space-y-6">
              {content.genericPoints.map((point) => (
                <li key={point.title}>
                  <p className="font-medium text-ink/80">{point.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{point.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.14} className="md:pl-10">
            <h3 className="font-display text-lg font-semibold text-brand-deep">
              {content.dfriendLabel}
            </h3>
            <ul className="mt-6 space-y-6">
              {content.dfriendPoints.map((point) => (
                <li key={point.title} className="border-l-2 border-brand pl-4">
                  <p className="font-semibold text-ink">{point.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{point.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
