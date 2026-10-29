import { Logo } from "@/components/Logo";
import { dict, type Lang } from "@/lib/i18n";

export function Footer({ lang, page }: { lang: Lang; page?: "privacy" | "terms" }) {
  const t = dict[lang];
  return (
    <footer style={{ borderTop: "2px solid #15171C", background: "#FFFDF7" }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16, paddingTop: 26, paddingBottom: 26, fontSize: 14, color: "#4A4F5C" }}>
        <Logo tone="light" />
        <span>© 2026 D-Friend</span>
        <span style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          <a href={page ? `${lang === "vi" ? "/?l=vi" : "/en"}#giao-vien` : "#giao-vien"}>{t.footer.teachers}</a>
          <a href="mailto:hello@dfriend.online">{t.footer.contact}</a>
          <a href={lang === "vi" ? "/terms" : "/en/terms"}>{t.footer.terms}</a>
          <a href={lang === "vi" ? "/privacy" : "/en/privacy"}>{t.footer.privacy}</a>
          <a href={page ? (lang === "vi" ? `/en/${page}` : `/${page}`) : t.switchHref} hrefLang={lang === "vi" ? "en" : "vi"}>{t.switchLabel}</a>
        </span>
      </div>
    </footer>
  );
}
