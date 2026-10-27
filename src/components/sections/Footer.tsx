import { Logo } from "@/components/Logo";
import { dict, type Lang } from "@/lib/i18n";

export function Footer({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <footer style={{ borderTop: "2px solid #15171C", background: "#FFFDF7" }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16, paddingTop: 26, paddingBottom: 26, fontSize: 14, color: "#4A4F5C" }}>
        <Logo tone="light" />
        <span>© 2026 D-Friend</span>
        <span style={{ display: "flex", gap: 20 }}>
          <a href="#giao-vien">{t.footer.teachers}</a>
          <a href="mailto:hello@dfriend.online">{t.footer.contact}</a>
          <a href={t.switchHref} hrefLang={lang === "vi" ? "en" : "vi"}>{t.switchLabel}</a>
        </span>
      </div>
    </footer>
  );
}
