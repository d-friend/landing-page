import { TeacherForm } from "@/components/TeacherForm";
import { dict, type Lang } from "@/lib/i18n";

export function Teachers({ lang }: { lang: Lang }) {
  const t = dict[lang].teachers;
  return (
    <section id="giao-vien" className="wrap" style={{ paddingTop: 90, paddingBottom: 20 }}>
      <div className="card" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "28px 32px" }}>
        <div style={{ flex: "1 1 380px" }}>
          <h2 className="disp" style={{ margin: "0 0 6px", fontSize: 30, fontWeight: 800 }}>{t.heading}</h2>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#4A4F5C" }}>
            {t.sub}
          </p>
        </div>
        <TeacherForm lang={lang} />
      </div>
    </section>
  );
}
