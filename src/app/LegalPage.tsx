import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { dict, type Lang } from "@/lib/i18n";

type LegalKind = "privacy" | "terms";

export function legalMetadata(lang: Lang, page: LegalKind): Metadata {
  const t = dict[lang].legal[page];
  const languages = { vi: `https://www.dfriend.online/${page}`, en: `https://www.dfriend.online/en/${page}` };
  return {
    title: `${t.title} · D-Friend`,
    description: t.description,
    alternates: { canonical: languages[lang], languages },
    openGraph: { title: `${t.title} · D-Friend`, description: t.description, url: languages[lang] },
    twitter: { title: `${t.title} · D-Friend`, description: t.description },
  };
}

export function LegalPage({ lang, page }: { lang: Lang; page: LegalKind }) {
  const t = dict[lang].legal;
  const policy = t[page];
  return (
    <div className="df" id="top" style={{ minHeight: "100vh", background: "#FFFDF7" }}>
      <main className="wrap" style={{ maxWidth: 840, paddingTop: 32, paddingBottom: 64, lineHeight: 1.75, overflowWrap: "anywhere" }}>
        <nav aria-label={dict[lang].hero.navLabel} style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          <a href={lang === "vi" ? "/?l=vi" : "/en"}>{t.home}</a>
          <a href={lang === "vi" ? `/en/${page}` : `/${page}`} hrefLang={lang === "vi" ? "en" : "vi"}>{dict[lang].switchLabel}</a>
        </nav>
        <h1 className="disp" style={{ fontSize: "clamp(32px, 6vw, 52px)", lineHeight: 1.15 }}>{policy.title}</h1>
        {policy.sections.map((section) => (
          <section key={section.title} style={{ marginTop: 32 }}>
            <h2 className="disp" style={{ fontSize: 25, lineHeight: 1.3 }}>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
        <p style={{ marginTop: 32 }}>{t.contact}{" "}<a href="mailto:hello@dfriend.online">hello@dfriend.online</a></p>
        <a href={lang === "vi" ? (page === "privacy" ? "/terms" : "/privacy") : (page === "privacy" ? "/en/terms" : "/en/privacy")}>
          {page === "privacy" ? t.terms.title : t.privacy.title}
        </a>
      </main>
      <Footer lang={lang} page={page} />
    </div>
  );
}
