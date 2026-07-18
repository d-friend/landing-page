import type { LandingCopy, LandingLocale } from "@/content/landing";
import Reveal from "@/components/Reveal";
import LogoMark from "@/components/LogoMark";

const APP_REGISTER = "https://app.dfriend.online/register";
const CONTACT_EMAIL = "hello@dfriend.online";

export default function Footer({
  content,
  registerLabel,
  locale,
  sectionId,
}: {
  content: LandingCopy["footer"];
  registerLabel: string;
  locale: LandingLocale;
  sectionId: string;
}) {
  return (
    <footer id={sectionId} className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
        <Reveal>
          <h2 className="headline mx-auto max-w-xl text-3xl font-semibold text-ink md:text-5xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-lg leading-relaxed text-muted">
            {content.body}
          </p>
          <a
            href={APP_REGISTER}
            className="mt-9 inline-block rounded-full bg-brand px-9 py-4 text-base font-semibold text-white transition-all hover:bg-brand-deep active:scale-[0.98]"
          >
            {registerLabel}
          </a>
          <p className="mt-8 text-base text-muted">
            {content.contactLabel}{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brand-deep hover:decoration-brand"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </Reveal>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-sm text-muted">
          <p className="flex items-center gap-2">
            <LogoMark className="h-6" />
            <span className="font-display font-semibold text-ink">D-Friend</span>
            <span>{content.brandLine}</span>
          </p>
          <nav className="flex items-center gap-4" aria-label="Language">
            <a
              href="/en"
              className={`transition-colors hover:text-ink ${locale === "en" ? "font-semibold text-ink" : ""}`}
            >
              English
            </a>
            <a
              href="/vi"
              className={`transition-colors hover:text-ink ${locale === "vi" ? "font-semibold text-ink" : ""}`}
            >
              Tiếng Việt
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
