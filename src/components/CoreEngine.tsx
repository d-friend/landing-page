import type { LandingCopy } from "@/content/landing";
import Reveal from "@/components/Reveal";

export default function CoreEngine({
  content,
  sectionId,
}: {
  content: LandingCopy["coreEngine"];
  sectionId: string;
}) {
  return (
    <section id={sectionId} className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <Reveal>
        <h2 className="headline max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-muted">
          {content.description}
        </p>
      </Reveal>

      <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {content.steps.map((step, index) => (
          <Reveal key={step.letter} delay={0.06 + index * 0.06}>
            <li className="border-t-2 border-brand pt-5">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-brand">{step.letter}</span>
                <span className="font-display text-lg font-semibold text-ink">{step.word}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
