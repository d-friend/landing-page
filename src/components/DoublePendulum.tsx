"use client";
import { useRef, useState } from "react";
import { useFrameLoop } from "@/hooks/useFrameLoop";
import { DP_START, dpPos, rk4, type DPState } from "@/lib/doublePendulum";
import { fmt } from "@/lib/fmt";
import { dict, type Lang } from "@/lib/i18n";

const MAX_TRAIL = 90;
const RESET_AT = 24; // seconds of simulated time, then the pair is released again
type Sim = { t: number; a: DPState; b: DPState; ta: string[]; tb: string[] };
const fresh = (): Sim => ({ t: 0, a: [...DP_START.a], b: [...DP_START.b], ta: [], tb: [] });
const snapshot = (s: Sim): Sim => ({ ...s, ta: s.ta.slice(), tb: s.tb.slice() });
const rod = { stroke: "#15171C", strokeWidth: 3, strokeLinecap: "round" } as const;
const trailStyle = { fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", opacity: 0.55 } as const;

export function DoublePendulum({ lang }: { lang: Lang }) {
  const t = dict[lang].pendulum;
  const num = (x: number, digits: number) => (lang === "vi" ? x.toFixed(digits).replace(".", ",") : x.toFixed(digits));
  const root = useRef<HTMLDivElement>(null);
  const sim = useRef<Sim>(fresh()); // mutated every frame, read only inside the loop
  const [s, setView] = useState<Sim>(fresh); // what renders

  useFrameLoop(root, (dt) => {
    const s = sim.current;
    const n = 8, h = dt / n;
    for (let i = 0; i < n; i++) { s.a = rk4(s.a, h); s.b = rk4(s.b, h); }
    s.t += dt;
    const pa = dpPos(s.a), pb = dpPos(s.b);
    s.ta.push(`${pa[2].toFixed(1)},${pa[3].toFixed(1)}`);
    s.tb.push(`${pb[2].toFixed(1)},${pb[3].toFixed(1)}`);
    if (s.ta.length > MAX_TRAIL) { s.ta.shift(); s.tb.shift(); }
    if (s.t > RESET_AT) sim.current = fresh();
    setView(snapshot(sim.current));
  });

  const [a1x, a1y, a2x, a2y] = dpPos(s.a);
  const [b1x, b1y, b2x, b2y] = dpPos(s.b);
  const gap = Math.hypot(a2x - b2x, a2y - b2y) / 66;

  return (
    <div ref={root}>
      <svg viewBox="0 0 460 300" style={{ width: "100%", height: "auto", display: "block", background: "#F3F5F7", borderRadius: 12 }} role="img" aria-label={t.aria}>
        <polyline points={s.ta.join(" ")} stroke="#3B4BFF" {...trailStyle} />
        <polyline points={s.tb.join(" ")} stroke="#FF3366" {...trailStyle} />
        <line x1="200" y1="150" x2="260" y2="150" {...rod} />
        <line x1="230" y1="150" x2={a1x} y2={a1y} {...rod} />
        <line x1={a1x} y1={a1y} x2={a2x} y2={a2y} {...rod} />
        <line x1="230" y1="150" x2={b1x} y2={b1y} {...rod} opacity=".55" />
        <line x1={b1x} y1={b1y} x2={b2x} y2={b2y} {...rod} opacity=".55" />
        <circle cx="230" cy="150" r="5" fill="#15171C" />
        <circle cx={a1x} cy={a1y} r="9" fill="#FFFDF7" stroke="#15171C" strokeWidth="2.5" />
        <circle cx={b1x} cy={b1y} r="9" fill="#FFFDF7" stroke="#15171C" strokeWidth="2.5" opacity=".7" />
        <circle cx={a2x} cy={a2y} r="12" fill="#3B4BFF" stroke="#15171C" strokeWidth="2.5" />
        <circle cx={b2x} cy={b2y} r="12" fill="#FF3366" stroke="#15171C" strokeWidth="2.5" />
      </svg>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "space-between", padding: "12px 4px", fontSize: 13, color: "#4A4F5C" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#3B4BFF", border: "1.5px solid #15171C" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF3366", border: "1.5px solid #15171C" }} />
          {t.offset}<strong className="mono" style={{ color: "#15171C" }}>{num(0.001, 3)} rad</strong>{t.rod}
        </span>
        <span>
          t = <strong className="mono" style={{ color: "#15171C" }}>{fmt(s.t, lang)} s</strong>{t.apart}
          <strong className="mono" style={{ color: "#15171C" }}>{num(Math.round(gap * 100) / 100, 2)} m</strong>
        </span>
      </div>
    </div>
  );
}
