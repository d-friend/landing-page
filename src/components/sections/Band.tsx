import { dict, type Lang } from "@/lib/i18n";

function Tape() {
  return (
    <svg width="16" height="16" viewBox="0 0 10 10" aria-hidden="true">
      <rect x="1" y="3" width="8" height="4" fill="#15171C" transform="rotate(-20 5 5)" />
    </svg>
  );
}

// The second copy repeats the first so the -50% translate loops seamlessly; screen readers get the first only.
function Run({ lang, hidden }: { lang: Lang; hidden?: boolean }) {
  return (
    <span style={{ display: "flex", gap: 36, alignItems: "center", whiteSpace: "nowrap", paddingRight: 36 }} aria-hidden={hidden || undefined}>
      {dict[lang].band.questions.map((q) => (
        <span key={q} style={{ display: "contents" }}>
          {q}
          <Tape />
        </span>
      ))}
    </span>
  );
}

export function Band({ lang }: { lang: Lang }) {
  return (
    <div className="band" aria-label={dict[lang].band.label}>
      <div className="marq disp" style={{ fontSize: 30, fontWeight: 800, padding: "18px 0" }}>
        <Run lang={lang} />
        <Run lang={lang} hidden />
      </div>
    </div>
  );
}
