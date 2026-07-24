import type { LandingLocale } from "@/content/landing";
import type { TeacherCopy } from "@/content/teacher";
import Reveal from "@/components/Reveal";
import PilotForm from "@/components/PilotForm";
import FooterBar from "@/components/FooterBar";

export default function TeacherFooter({
  content,
  footer,
  locale,
  sectionId,
}: {
  content: TeacherCopy["finalCta"];
  footer: TeacherCopy["footer"];
  locale: LandingLocale;
  sectionId: string;
}) {
  return (
    <footer id={sectionId} className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
        <Reveal>
          <h2 className="headline mx-auto max-w-2xl text-3xl font-semibold text-ink md:text-5xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-lg leading-relaxed text-muted">
            {content.body}
          </p>
          <PilotForm
            copy={content.pilot}
            locale={locale}
            audience="teacher"
            className="mx-auto mt-9 max-w-lg text-left"
          />
        </Reveal>
      </div>

      <FooterBar
        brandLine={footer.brandLine}
        contactLabel={footer.contactLabel}
        locale={locale}
        audience="teacher"
      />
    </footer>
  );
}
