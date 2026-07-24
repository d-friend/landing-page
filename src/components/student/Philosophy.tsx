import type { StudentCopy } from "@/content/student";
import Reveal from "@/components/shared/Reveal";

export default function Philosophy({
  content,
  sectionId,
}: {
  content: StudentCopy["philosophy"];
  sectionId: string;
}) {
  return (
    <section id={sectionId} className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <h2 className="headline max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
            {content.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-[5fr_7fr]">
          <Reveal delay={0.08}>
            <article className="flex h-full flex-col rounded-2xl bg-brand-soft p-8 md:p-10">
              <p aria-hidden className="font-display text-7xl font-bold leading-none text-brand md:text-8xl">
                {content.done.label}
              </p>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                {content.done.title}
              </h3>
              <p className="mt-1 text-base font-semibold text-brand-deep">
                {content.done.subtitle}
              </p>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">
                {content.done.body}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.16}>
            <article className="flex h-full flex-col rounded-2xl border border-line p-8 md:p-10">
              <p aria-hidden className="font-display text-7xl font-bold leading-none text-ink md:text-8xl">
                {content.friend.label}
              </p>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                {content.friend.title}
              </h3>
              <p className="mt-1 text-base font-semibold text-brand-deep">
                {content.friend.subtitle}
              </p>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">
                {content.friend.body}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
