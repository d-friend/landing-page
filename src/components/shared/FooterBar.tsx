import type { Locale } from "@/content/shared";
import { type Audience, audiencePath } from "@/content/audience";
import LogoMark from "@/components/shared/LogoMark";

const CONTACT_EMAIL = "hello@dfriend.online";

/**
 * Bottom bar shared by both landing pages. The language links stay on the
 * current audience's page rather than dropping the visitor back on the
 * student page.
 */
export default function FooterBar({
  brandLine,
  contactLabel,
  locale,
  audience,
}: {
  brandLine: string;
  contactLabel: string;
  locale: Locale;
  audience: Audience;
}) {
  return (
    <div className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-sm text-muted">
        <p className="flex items-center gap-2">
          <LogoMark className="h-6" />
          <span className="font-display font-semibold text-ink">D-Friend</span>
          <span>{brandLine}</span>
        </p>

        <div className="flex flex-col items-start gap-2 sm:items-end">
          <nav className="flex items-center gap-4" aria-label="Language">
            <a
              href={audiencePath[audience].en}
              className={`transition-colors hover:text-ink ${locale === "en" ? "font-semibold text-ink" : ""}`}
            >
              English
            </a>
            <a
              href={audiencePath[audience].vi}
              className={`transition-colors hover:text-ink ${locale === "vi" ? "font-semibold text-ink" : ""}`}
            >
              Tiếng Việt
            </a>
          </nav>
          <p>
            {contactLabel}{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brand-deep hover:decoration-brand"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
