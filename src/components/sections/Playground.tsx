"use client";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import { Patch, type PatchState } from "@/components/Patch";
import { prefersReducedMotion, useFrameLoop } from "@/hooks/useFrameLoop";
import { type Cfg, DEFAULT_CFG, gravity, makeGeo, needHeight, newSim, runToEnd, type Sim, step } from "@/lib/coaster";
import { fmt } from "@/lib/fmt";
import { dict, type Lang } from "@/lib/i18n";

const RESTART_AFTER_S = 2.4; // a finished run holds this long, then the cart is released again
const GRID_M = [0, 10, 20, 30, 40];
const STATUS_CLS = { running: "st st-run", pass: "st st-pass", detach: "st st-detach", slide: "st st-slide" } as const;

function start(c: Cfg): Sim {
  const g = makeGeo(c);
  return prefersReducedMotion() ? runToEnd(g, c) : newSim(g);
}
const snapshot = (s: Sim): Sim => ({ ...s, trail: s.trail.slice() });

export function Playground({ lang }: { lang: Lang }) {
  const t = dict[lang].play;
  const f = (x: number) => fmt(x, lang);
  const root = useRef<HTMLDivElement>(null);
  const [cfg, setCfg] = useState<Cfg>(DEFAULT_CFG);
  const [ask, setAsk] = useState(t.initialAsk);
  const sim = useRef<Sim>(newSim(makeGeo(DEFAULT_CFG)));
  const [view, setView] = useState<Sim>(() => newSim(makeGeo(DEFAULT_CFG)));
  const g = makeGeo(cfg); // cheap: ~260 points

  // One handler for every control: new settings, new run, and the question Patch is answering.
  const change = (patch: Partial<Cfg>, question: string) => {
    const next = { ...cfg, ...patch };
    setCfg(next);
    setAsk(question);
    sim.current = start(next);
    setView(snapshot(sim.current));
  };
  const replay = () => {
    sim.current = start(cfg);
    setView(snapshot(sim.current));
  };

  // Reduced motion never runs the loop, so show a finished run. Not in the initial state: that would not match the server HTML.
  useEffect(() => {
    if (!prefersReducedMotion()) return;
    sim.current = start(DEFAULT_CFG);
    setView(snapshot(sim.current));
  }, []);

  useFrameLoop(root, (dt) => {
    const s = sim.current;
    if (s.mode === "done" && s.wait > RESTART_AFTER_S) sim.current = newSim(g);
    else step(s, g, cfg, dt);
    setView(snapshot(sim.current));
  });

  const need = needHeight(cfg);
  const hNow = Math.max(0, (g.y0 - view.y) / g.k);
  const done = view.mode === "done";

  let key: keyof typeof STATUS_CLS = "running";
  let patch: PatchState = "thinking";
  let reply: string = t.thinking;
  if (view.outcome === "detach") {
    key = "detach"; patch = "doubt";
    reply = t.detach(f(view.detY ?? 0), f(need));
  } else if (view.outcome === "slide") {
    key = "slide"; patch = "doubt";
    reply = t.slide;
  } else if (view.outcome === "pass" || view.topV !== null) {
    key = "pass"; patch = "happy";
    reply = t.pass(f(view.topV ?? 0));
  }
  const status = { text: t.status[key], cls: STATUS_CLS[key] };
  if (view.outcome || view.topV !== null) {
    if (cfg.moon) reply += t.moonNote;
    if (cfg.fric && view.outcome && view.outcome !== "pass") reply += t.fricNote;
  }

  const chips: { label: string; on: boolean; patch: Partial<Cfg>; question: string }[] = [
    { label: t.chips.bigger, on: false, patch: { R: Math.min(cfg.R + 2, 15) }, question: t.chips.biggerQ },
    { label: t.chips.fric, on: cfg.fric, patch: { fric: !cfg.fric }, question: cfg.fric ? t.chips.fricOff : t.chips.fricOn },
    { label: t.chips.moon, on: cfg.moon, patch: { moon: !cfg.moon }, question: cfg.moon ? t.chips.moonOff : t.chips.moonOn },
    { label: t.chips.reset, on: false, patch: DEFAULT_CFG, question: t.chips.resetQ },
  ];
  const flag = `${g.x0},${g.sy - 26} ${g.x0 + 18},${g.sy - 20} ${g.x0},${g.sy - 14}`;
  const mono: CSSProperties = { fontSize: 11, fontFamily: "var(--font-mono), monospace", fill: "#5A6070" };

  return (
    <section id="thu" style={{ background: "#FFFDF7", borderTop: "2px solid #15171C", borderBottom: "2px solid #15171C", padding: "110px 0" }}>
      <div className="wrap" ref={root}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 40 }}>
          <h2 className="disp" style={{ margin: 0, fontSize: "clamp(36px, 4.8vw, 64px)", lineHeight: 1.02, fontWeight: 800, maxWidth: 700 }}>
            {t.heading}
          </h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: "#4A4F5C", maxWidth: 440 }}>
            {t.sub}
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "stretch" }}>
          <div className="card" style={{ flex: "999 1 600px", minWidth: 0, padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: 18, flexWrap: "wrap", fontSize: 15 }}>
                <span>{t.speed} <strong className="mono">{f(view.v)} m/s</strong></span>
                <span>{t.height} <strong className="mono">{f(hNow)} m</strong></span>
                <span style={{ color: "#4A4F5C" }}>g = <span className="mono">{cfg.moon ? t.moonG : f(gravity(cfg))}</span> m/s²</span>
              </div>
              <span style={{ fontSize: 14, color: "#4A4F5C" }}>{t.need} <strong className="mono" style={{ color: "#3B4BFF" }}>{f(need)} m</strong></span>
              <span className={status.cls} aria-live="polite">{status.text}</span>
            </div>
            <svg viewBox="0 0 720 340" style={{ width: "100%", height: "auto", display: "block", background: "#F3F5F7", borderRadius: 14 }} role="img" aria-label={t.aria(cfg.H, cfg.R, status.text)}>
              {GRID_M.map((m) => {
                const y = g.y0 - m * g.k;
                return (
                  <g key={m}>
                    <line x1="44" y1={y} x2="712" y2={y} stroke="#DDE1E8" strokeWidth="1" />
                    <text x="8" y={y + 4} style={mono}>{m} m</text>
                  </g>
                );
              })}
              <path className="sim-track" d={g.d} style={{ d: `path('${g.d}')` } as CSSProperties} fill="none" stroke="#15171C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              <polygon points={flag} fill="#C8F904" stroke="#15171C" strokeWidth="1.5" />
              <line x1={g.x0} y1={g.sy} x2={g.x0} y2={g.sy - 26} stroke="#15171C" strokeWidth="2" />
              <polyline points={view.trail.join(" ")} fill="none" stroke="#FF3366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity=".45" />
              {done && view.outcome === "detach" && (
                <g transform={`translate(${view.boomX.toFixed(1)} ${g.y0 - 6})`}>
                  <polygon className="boom" points="0,-20 6,-7 20,-9 10,2 15,16 0,8 -15,16 -10,2 -20,-9 -6,-7" fill="#C8F904" stroke="#15171C" strokeWidth="2" />
                </g>
              )}
              <g transform={`translate(${view.x.toFixed(1)} ${view.y.toFixed(1)}) rotate(${((view.a * 180) / Math.PI).toFixed(1)})`}>
                <rect x="-14" y="-15" width="28" height="13" rx="4" fill="#FF3366" stroke="#15171C" strokeWidth="2.5" />
                <circle cx="-7" cy="-2" r="3" fill="#15171C" />
                <circle cx="7" cy="-2" r="3" fill="#15171C" />
              </g>
            </svg>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 22, alignItems: "flex-end" }}>
              <div style={{ flex: "1 1 200px" }}>
                <label htmlFor="sim-h" style={{ display: "flex", justifyContent: "space-between", fontSize: 15, fontWeight: 600 }}><span>{t.dropHeight}</span><span className="mono">{cfg.H} m</span></label>
                <input id="sim-h" className="range" type="range" min="8" max="40" step="1" value={cfg.H} onChange={(e) => change({ H: Number(e.target.value) }, t.dropQ(e.target.value))} />
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <label htmlFor="sim-r" style={{ display: "flex", justifyContent: "space-between", fontSize: 15, fontWeight: 600 }}><span>{t.loopRadius}</span><span className="mono">{cfg.R} m</span></label>
                <input id="sim-r" className="range" type="range" min="4" max="15" step="1" value={cfg.R} onChange={(e) => change({ R: Number(e.target.value) }, t.radiusQ(e.target.value))} />
              </div>
              <button type="button" className="btn btn-ghost" style={{ minHeight: 44 }} onClick={replay}>{t.replay}</button>
            </div>
          </div>

          <div className="card" style={{ flex: "1 1 320px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16, padding: 22, background: "#F3F5F7" }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{t.askPatch}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
              {chips.map((c) => (
                <button key={c.label} type="button" className={c.on ? "chip chip-on" : "chip"} aria-pressed={c.on} onClick={() => change(c.patch, c.question)}>{c.label}</button>
              ))}
            </div>
            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ alignSelf: "flex-end", maxWidth: "90%", background: "#15171C", color: "#FFFDF7", borderRadius: "16px 16px 4px 16px", padding: "10px 14px", fontSize: 15, fontWeight: 500 }}>{ask}</div>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
                <Patch state={patch} style={{ width: 60, height: 60, flex: "none" }} />
                <div style={{ flex: 1, background: "#FFFDF7", border: "2px solid #15171C", borderRadius: "16px 16px 16px 4px", padding: "10px 14px", fontSize: 15, lineHeight: 1.55, minHeight: 70 }}>{reply}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
