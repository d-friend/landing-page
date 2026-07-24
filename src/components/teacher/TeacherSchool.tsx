import type { TeacherCopy } from "@/content/teacher";
import Reveal from "@/components/Reveal";

const CONTACT_EMAIL = "hello@dfriend.online";

export default function TeacherSchool({
  content,
  sectionId,
}: {
  content: TeacherCopy["school"];
  sectionId: string;
}) {
  return (
    <section id={sectionId} className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <Reveal>
        <div className="rounded-2xl border border-line bg-surface px-6 py-8 md:px-10 md:py-10">
          <div className="grid items-center gap-6 md:grid-cols-[3fr_2fr] md:gap-10">
            <div>
              <h2 className="headline text-xl font-semibold text-ink md:text-2xl">
                {content.title}
              </h2>
              <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-muted">
                {content.body}
              </p>
            </div>
            <div className="md:justify-self-end">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block rounded-full border border-line bg-bg px-6 py-3 text-base font-medium text-ink transition-colors hover:border-brand hover:text-brand-deep"
              >
                {content.cta}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
