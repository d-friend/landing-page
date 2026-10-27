"use client";
import { useEffect, useRef, useState } from "react";
import { Patch } from "@/components/Patch";
import { prefersReducedMotion, useFrameLoop } from "@/hooks/useFrameLoop";
import { dict, type Lang } from "@/lib/i18n";

type StageProps = { lang: Lang };
const ADVANCE_MS = 6000; // matches the .bar fill animation in globals.css
const THROW = "M 30 220 Q 210 -10 390 220";
const EARTH = "M 30 220 Q 61.5 188.6 93 220";
const MOON = "M 30 220 Q 215 29.4 400 220";
const row = { border: "2px solid #15171C", borderRadius: 14, padding: "14px 18px" } as const;

function Solve({ lang }: StageProps) {
  const t = dict[lang].steps.solve;
  return (
    <div className="stage-in" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, height: "100%", background: "#FFFDF7" }}>
      <div className="stg" style={{ ...row, background: "#F3F5F7" }}>
        <div style={{ fontSize: 13, color: "#4A4F5C" }}>{t.problemLabel}</div>
        <div style={{ fontSize: 18, fontWeight: 600, marginTop: 4 }}>{t.problem}</div>
      </div>
      <div className="stg" style={{ ...row, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
        <span className="disp" style={{ fontWeight: 800, color: "#5A6070" }}>{t.step1}</span>
        <span className="mono" style={{ fontSize: 17, flex: 1 }}>vx = v·cos45°, vy = v·sin45°</span>
        <span className="check" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#C8F904", border: "2px solid #15171C", borderRadius: 999, padding: "4px 12px", fontWeight: 700, fontSize: 14 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5 L5.5 11 L12 3.5" fill="none" stroke="#15171C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          {t.correct}
        </span>
      </div>
      <div className="stg" style={{ ...row, borderColor: "#3B4BFF", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
        <span className="disp" style={{ fontWeight: 800, color: "#3B4BFF" }}>{t.step2}</span>
        <span className="mono" style={{ fontSize: 17 }}>{t.flightTime}</span>
        <span style={{ flex: 1, minWidth: 70, borderBottom: "2px dashed #5A6070", height: 24 }} />
      </div>
      <div className="stg" style={{ display: "flex", alignItems: "flex-end", gap: 12, marginTop: "auto" }}>
        <Patch state="idle" style={{ width: 64, height: 64, flex: "none" }} />
        <div style={{ background: "#F3F5F7", border: "2px solid #15171C", borderRadius: "14px 14px 14px 4px", padding: "10px 14px", fontSize: 15 }}>{t.hint}</div>
      </div>
    </div>
  );
}

// Velocity arrow with a head, drawn in screen space from (x, y) by (dx, dy).
function Arrow({ x, y, dx, dy, color, label }: { x: number; y: number; dx: number; dy: number; color: string; label: string }) {
  const len = Math.hypot(dx, dy);
  if (len < 5) return null;
  const ux = dx / len, uy = dy / len, hx = x + dx, hy = y + dy;
  const head = `${hx},${hy} ${hx - ux * 10 - uy * 5},${hy - uy * 10 + ux * 5} ${hx - ux * 10 + uy * 5},${hy - uy * 10 - ux * 5}`;
  return (
    <g>
      <line x1={x} y1={y} x2={hx - ux * 6} y2={hy - uy * 6} stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <polygon points={head} fill={color} />
      <text x={hx + (dx >= 0 ? 6 : -6)} y={hy + (dy >= 0 ? 14 : -6)} textAnchor={dx >= 0 ? "start" : "end"} style={{ font: "700 13px var(--font-mono), monospace", fill: color }}>{label}</text>
    </g>
  );
}

const MarkArrow = ({ dx, dy, color }: { dx: number; dy: number; color: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" style={{ flex: "none" }}>
    <Arrow x={14 - dx / 2} y={14 - dy / 2} dx={dx} dy={dy} color={color} label="" />
  </svg>
);

const PERIOD = 3.2; // seconds per throw
const K = 0.13; // screen px per unit of velocity

function Understand({ lang }: StageProps) {
  const copy = dict[lang].steps.understand;
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0.3); // 0.3 = a still frame for reduced motion
  useFrameLoop(ref, (dt) => setT((v) => 0.04 + ((v - 0.04 + dt / PERIOD * 0.92) % 0.92)));
  // Same quadratic as THROW: x moves at a constant rate, y accelerates, so vy = -460(1-2t) shrinks to 0 at the top.
  const x = 30 + 360 * t, y = 220 - 460 * t * (1 - t);
  const vx = 360 * K, vy = -460 * (1 - 2 * t) * K;
  const marks = [
    <MarkArrow key="x" dx={22} dy={0} color="#3B4BFF" />,
    <MarkArrow key="y" dx={0} dy={-22} color="#15171C" />,
    <MarkArrow key="v" dx={16} dy={-16} color="#FF3366" />,
  ];
  return (
    <div ref={ref} className="stage-in" style={{ padding: 28, display: "flex", flexWrap: "wrap", gap: 24, height: "100%", background: "#FFFDF7", alignItems: "center" }}>
      <div style={{ flex: "2 1 320px", minWidth: 0 }}>
        <svg viewBox="0 0 420 265" style={{ width: "100%", height: "auto" }} role="img" aria-label={copy.aria}>
          <line x1="0" y1="220" x2="420" y2="220" stroke="#DDE1E8" strokeWidth="2" />
          <path d={THROW} fill="none" stroke="#15171C" strokeWidth="2.5" strokeDasharray="6 6" opacity=".35" />
          <line x1={x + vx} y1={y} x2={x + vx} y2={y + vy} stroke="#5A6070" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1={x} y1={y + vy} x2={x + vx} y2={y + vy} stroke="#5A6070" strokeWidth="1.5" strokeDasharray="3 3" />
          <Arrow x={x} y={y} dx={vx} dy={0} color="#3B4BFF" label="vx" />
          <Arrow x={x} y={y} dx={0} dy={vy} color="#15171C" label="vy" />
          <Arrow x={x} y={y} dx={vx} dy={vy} color="#FF3366" label="v" />
          <circle cx={x} cy={y} r="9" fill="#FF3366" stroke="#15171C" strokeWidth="2.5" />
        </svg>
      </div>
      <ul style={{ flex: "1 1 200px", margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
        {copy.items.map((text, i) => (
          <li key={text} className="stg" style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 16 }}>
            {marks[i]}
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Explore({ lang }: StageProps) {
  const t = dict[lang].steps.explore;
  return (
    <div className="stage-in" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, height: "100%", background: "#15171C", color: "#FFFDF7" }}>
      <div className="stg" style={{ alignSelf: "flex-end", background: "#FFFDF7", color: "#15171C", borderRadius: "14px 14px 4px 14px", padding: "10px 16px", fontWeight: 600 }}>{t.ask}</div>
      <div className="stg" style={{ position: "relative", flex: 1, minHeight: 0 }}>
        <svg viewBox="0 0 430 240" style={{ width: "100%", height: "100%" }} role="img" aria-label={t.aria}>
          <line x1="0" y1="220" x2="430" y2="220" stroke="#4A4F5C" strokeWidth="2" />
          <path d={EARTH} fill="none" stroke="#FFFDF7" strokeWidth="2" strokeDasharray="5 5" />
          <path className="moonpath" d={MOON} fill="none" stroke="#C8F904" strokeWidth="2.5" strokeDasharray="6 5" />
          <g className="ballE" style={{ offsetPath: `path('${EARTH}')` }}><circle cx="0" cy="0" r="8" fill="#FFFDF7" stroke="#15171C" strokeWidth="2" /></g>
          <g className="ballM" style={{ offsetPath: `path('${MOON}')` }}><circle cx="0" cy="0" r="9" fill="#C8F904" stroke="#15171C" strokeWidth="2" /></g>
        </svg>
        <div style={{ position: "absolute", left: "4%", bottom: 34, fontSize: 13, color: "#C9CDD6" }}>{t.earth}<br /><strong className="mono" style={{ color: "#FFFDF7" }}>41 m</strong></div>
        <div className="falltag" style={{ position: "absolute", right: "2%", top: 0, background: "#C8F904", color: "#15171C", border: "2px solid #FFFDF7", borderRadius: 999, padding: "6px 14px", fontWeight: 700 }}>{t.moonTag}</div>
      </div>
      <div className="stg" style={{ fontSize: 15, color: "#C9CDD6" }}>{t.caption}</div>
    </div>
  );
}

const STAGES = [Solve, Understand, Explore];

export function Steps({ lang }: { lang: Lang }) {
  const t = dict[lang].steps;
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance until the visitor picks a step (or asks for reduced motion). The change is the content of the tab, so
  // clicking is the pause control (WCAG 2.2.2).
  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const id = setInterval(() => setStep((s) => (s + 1) % STAGES.length), ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const Stage = STAGES[step];
  return (
    <section id="cach-hoc" className="wrap" style={{ paddingTop: 130, paddingBottom: 120 }}>
      <h2 className="disp" style={{ margin: "0 0 14px", fontSize: "clamp(36px, 4.6vw, 60px)", lineHeight: 1.04, fontWeight: 800, maxWidth: 820 }}>
        {t.heading}
      </h2>
      <p style={{ margin: "0 0 48px", fontSize: 18, lineHeight: 1.6, color: "#4A4F5C", maxWidth: 600 }}>
        {t.sub}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "stretch" }}>
        <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: 10 }} role="group" aria-label={t.groupLabel}>
          {t.list.map((s, i) => (
            <button
              key={s.title}
              type="button"
              className={i === step ? (paused ? "tab tab-on tab-paused" : "tab tab-on") : "tab"}
              aria-pressed={i === step}
              onClick={() => { setStep(i); setPaused(true); }}
            >
              <span className="num">{i + 1}</span>
              <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span className="disp" style={{ fontSize: 24, fontWeight: 800 }}>{s.title}</span>
                <span style={{ fontSize: 15, lineHeight: 1.5, color: "#4A4F5C" }}>{s.desc}</span>
              </span>
              <span className="bar" aria-hidden="true" />
            </button>
          ))}
        </div>
        <div className="card stage-card" style={{ flex: "999 1 560px", minWidth: 0, position: "relative", overflow: "hidden", padding: 0 }}>
          <Stage key={step} lang={lang} />
        </div>
      </div>
    </section>
  );
}
