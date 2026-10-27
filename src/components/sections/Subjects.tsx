import type { CSSProperties, ReactNode } from "react";
import { MorphPath } from "@/components/MorphPath";
import { dict, type Lang } from "@/lib/i18n";

const tag = (color?: string): CSSProperties => ({ fontSize: 14, fontWeight: 600, ...(color ? { color } : {}) });
const h3: CSSProperties = { margin: "6px 0 0", fontSize: 26, fontWeight: 800 };
const tryIt: CSSProperties = { margin: 0, fontSize: 15 };

function Tile({ big, bg, color, children }: { big?: boolean; bg: string; color?: string; children: ReactNode }) {
  return (
    <div className={big ? "tile big" : "tile"} style={{ background: bg, ...(color ? { color } : {}) }}>
      {children}
    </div>
  );
}

export function Subjects({ lang }: { lang: Lang }) {
  const t = dict[lang].subjects;
  return (
    <section id="mon" className="wrap" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <h2 className="disp" style={{ margin: "0 0 14px", fontSize: "clamp(36px, 4.6vw, 60px)", lineHeight: 1.04, fontWeight: 800 }}>
        {t.heading}
      </h2>
      <p style={{ margin: "0 0 44px", fontSize: 18, lineHeight: 1.6, color: "#4A4F5C", maxWidth: 600 }}>
        {t.sub}
      </p>
      <div className="subj">
        <Tile big bg="#15171C" color="#FFFDF7">
          <div>
            <div style={tag("#C8F904")}>{t.solar.tag}</div>
            <h3 className="disp" style={{ ...h3, fontSize: 30 }}>{t.solar.name}</h3>
          </div>
          <svg viewBox="0 0 300 300" style={{ width: "100%", maxWidth: 340, height: "auto", alignSelf: "center" }} aria-hidden="true">
            <circle cx="150" cy="150" r="56" fill="none" stroke="#4A4F5C" strokeWidth="1.5" />
            <circle cx="150" cy="150" r="96" fill="none" stroke="#4A4F5C" strokeWidth="1.5" />
            <circle cx="150" cy="150" r="136" fill="none" stroke="#4A4F5C" strokeWidth="1.5" />
            <circle cx="150" cy="150" r="20" fill="#C8F904" stroke="#FFFDF7" strokeWidth="2" />
            <g className="spin1"><circle cx="206" cy="150" r="7" fill="#FF3366" /></g>
            <g className="spin2"><circle cx="54" cy="150" r="11" fill="#3B4BFF" stroke="#FFFDF7" strokeWidth="1.5" /></g>
            <g className="spin3"><circle cx="150" cy="14" r="8" fill="#FFFDF7" /></g>
          </svg>
          <p style={{ ...tryIt, lineHeight: 1.5, color: "#C9CDD6" }}>{t.tryAsk}“{t.solar.q}”</p>
        </Tile>

        <Tile bg="#FFFDF7">
          <div>
            <div style={tag("#3B4BFF")}>{t.pendulum.tag}</div>
            <h3 className="disp" style={h3}>{t.pendulum.name}</h3>
          </div>
          <svg viewBox="0 0 200 150" style={{ width: "62%", height: "auto", alignSelf: "center" }} aria-hidden="true">
            <line x1="40" y1="14" x2="160" y2="14" stroke="#15171C" strokeWidth="3" />
            <g className="swing">
              <line x1="100" y1="14" x2="100" y2="118" stroke="#15171C" strokeWidth="2" />
              <circle cx="100" cy="124" r="13" fill="#FF3366" stroke="#15171C" strokeWidth="2.5" />
            </g>
          </svg>
          <p style={{ ...tryIt, color: "#4A4F5C" }}>{t.tryAsk}“{t.pendulum.q}”</p>
        </Tile>

        <Tile bg="#C8F904">
          <div>
            <div style={tag()}>{t.graph.tag}</div>
            <h3 className="disp" style={h3}>{t.graph.name}</h3>
          </div>
          <svg viewBox="0 0 220 170" style={{ width: "70%", height: "auto", alignSelf: "center" }} aria-hidden="true">
            <line x1="0" y1="110" x2="220" y2="110" stroke="#15171C" strokeWidth="1.5" />
            <line x1="110" y1="0" x2="110" y2="170" stroke="#15171C" strokeWidth="1.5" />
            <MorphPath keyframes={["M 20 150 Q 110 -100 200 150", "M 20 40 Q 110 230 200 40", "M 20 130 Q 110 30 200 130"]} legSeconds={3.2} spline=".42 0 .58 1" fill="none" stroke="#3B4BFF" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <p style={tryIt}>{t.tryAsk}“{t.graph.q}”</p>
        </Tile>

        <Tile bg="#3B4BFF" color="#FFFDF7">
          <div>
            <div style={tag()}>{t.water.tag}</div>
            <h3 className="disp" style={h3}>{t.water.name}</h3>
          </div>
          <svg viewBox="0 0 200 170" style={{ width: "52%", height: "auto", alignSelf: "center" }} aria-hidden="true">
            <g className="mol">
              <line x1="100" y1="80" x2="52" y2="118" stroke="#FFFDF7" strokeWidth="4" />
              <line x1="100" y1="80" x2="148" y2="118" stroke="#FFFDF7" strokeWidth="4" />
              <circle className="atom" cx="100" cy="80" r="26" fill="#FF3366" stroke="#15171C" strokeWidth="2.5" />
              <circle className="atom" cx="52" cy="118" r="15" fill="#FFFDF7" stroke="#15171C" strokeWidth="2.5" />
              <circle className="atom" cx="148" cy="118" r="15" fill="#FFFDF7" stroke="#15171C" strokeWidth="2.5" />
            </g>
          </svg>
          <p style={tryIt}>{t.tryAsk}“{t.water.q}”</p>
        </Tile>

        <Tile bg="#FFFDF7">
          <div>
            <div style={tag("#3B4BFF")}>{t.geometry.tag}</div>
            <h3 className="disp" style={h3}>{t.geometry.name}</h3>
          </div>
          <svg viewBox="0 0 200 160" style={{ width: "62%", height: "auto", alignSelf: "center" }} aria-hidden="true">
            <MorphPath keyframes={["M 20 140 L 180 140 L 60 20 Z", "M 20 140 L 180 140 L 100 30 Z", "M 20 140 L 180 140 L 170 30 Z"]} legSeconds={4} spline=".6 0 .3 1" fill="#EAE4D3" stroke="#15171C" strokeWidth="3" strokeLinejoin="round" />
          </svg>
          <p style={{ ...tryIt, color: "#4A4F5C" }}>{t.tryAsk}“{t.geometry.q}”</p>
        </Tile>
      </div>
    </section>
  );
}
