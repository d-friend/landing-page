import { FinalAsk } from "@/components/AskBox";
import { Patch } from "@/components/Patch";
import { dict, type Lang } from "@/lib/i18n";

export function FinalCta({ lang }: { lang: Lang }) {
  const t = dict[lang].finalCta;
  return (
    <section id="bat-dau" className="wrap" style={{ paddingTop: 100, paddingBottom: 120, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 40 }}>
      <div style={{ flex: "3 1 520px", minWidth: 0, display: "flex", flexDirection: "column", gap: 28 }}>
        <h2 className="disp" style={{ margin: 0, fontSize: "clamp(50px, 7.4vw, 112px)", lineHeight: 0.98, fontWeight: 800 }}>
          <span style={{ display: "block" }}>
            {t.line1a}<span className="strike">{t.line1b}</span>
          </span>
          <span style={{ display: "block" }}>
            {t.line2a}<span className="hl2">{t.line2b}</span>
          </span>
        </h2>
        <FinalAsk lang={lang} />
      </div>
      <Patch state="happy" style={{ flex: "1 1 220px", maxWidth: 260, aspectRatio: 1, margin: "0 auto" }} />
    </section>
  );
}
