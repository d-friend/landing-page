"use client";
import { useEffect, useState } from "react";
import { Patch } from "@/components/Patch";
import { prefersReducedMotion } from "@/hooks/useFrameLoop";

const STEPS = [
  { title: "Giải bài", desc: "Bạn tự làm từng bước. Sai ở đâu, Patch gợi ý đúng chỗ đó." },
  { title: "Hiểu cách làm", desc: "Mỗi công thức đi kèm hình chuyển động, để thấy vì sao nó đúng." },
  { title: "Khám phá", desc: "Hỏi “nếu… thì sao?”, mô phỏng đổi theo ngay." },
];
const ADVANCE_MS = 6000; // matches the .bar fill animation in globals.css
const THROW = "M 30 220 Q 210 -10 390 220";
const EARTH = "M 30 220 Q 61.5 188.6 93 220";
const MOON = "M 30 220 Q 215 29.4 400 220";
const row = { border: "2px solid #15171C", borderRadius: 14, padding: "14px 18px" } as const;

function Solve() {
  return (
    <div className="stage-in" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, height: "100%", background: "#FFFDF7" }}>
      <div className="stg" style={{ ...row, background: "#F3F5F7" }}>
        <div style={{ fontSize: 13, color: "#4A4F5C" }}>Đề bài</div>
        <div style={{ fontSize: 18, fontWeight: 600, marginTop: 4 }}>Ném quả bóng với vận tốc 20 m/s, nghiêng 45° so với mặt đất. Bóng bay xa bao nhiêu mét?</div>
      </div>
      <div className="stg" style={{ ...row, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
        <span className="disp" style={{ fontWeight: 800, color: "#5A6070" }}>Bước 1</span>
        <span className="mono" style={{ fontSize: 17, flex: 1 }}>vx = v·cos45°, vy = v·sin45°</span>
        <span className="check" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#C8F904", border: "2px solid #15171C", borderRadius: 999, padding: "4px 12px", fontWeight: 700, fontSize: 14 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5 L5.5 11 L12 3.5" fill="none" stroke="#15171C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Đúng
        </span>
      </div>
      <div className="stg" style={{ ...row, borderColor: "#3B4BFF", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
        <span className="disp" style={{ fontWeight: 800, color: "#3B4BFF" }}>Bước 2</span>
        <span className="mono" style={{ fontSize: 17 }}>Thời gian bay t =</span>
        <span style={{ flex: 1, minWidth: 70, borderBottom: "2px dashed #5A6070", height: 24 }} />
      </div>
      <div className="stg" style={{ display: "flex", alignItems: "flex-end", gap: 12, marginTop: "auto" }}>
        <Patch state="idle" style={{ width: 64, height: 64, flex: "none" }} />
        <div style={{ background: "#F3F5F7", border: "2px solid #15171C", borderRadius: "14px 14px 14px 4px", padding: "10px 14px", fontSize: 15 }}>Gợi ý: lúc bóng chạm đất, độ cao của nó bằng bao nhiêu?</div>
      </div>
    </div>
  );
}

function Understand() {
  const items = [
    { mark: { width: 14, height: 4, background: "#3B4BFF" }, text: "Phương ngang: bay đều, không đổi tốc độ" },
    { mark: { width: 4, height: 14, background: "#15171C" }, text: "Phương đứng: lên chậm dần, rơi nhanh dần" },
    { mark: { width: 12, height: 12, borderRadius: "50%", background: "#FF3366", border: "2px solid #15171C" }, text: "Ghép hai chuyển động lại thành parabol" },
  ];
  return (
    <div className="stage-in" style={{ padding: 28, display: "flex", flexWrap: "wrap", gap: 24, height: "100%", background: "#FFFDF7", alignItems: "center" }}>
      <div style={{ flex: "2 1 320px", minWidth: 0 }}>
        <svg viewBox="0 0 420 240" style={{ width: "100%", height: "auto" }} role="img" aria-label="Quả bóng bay theo đường parabol, vận tốc tách thành hai thành phần">
          <line x1="0" y1="220" x2="420" y2="220" stroke="#DDE1E8" strokeWidth="2" />
          <path d={THROW} fill="none" stroke="#15171C" strokeWidth="2.5" strokeDasharray="6 6" />
          <g className="ball2" style={{ offsetPath: `path('${THROW}')` }}>
            <line x1="0" y1="0" x2="42" y2="0" stroke="#3B4BFF" strokeWidth="3" />
            <circle cx="0" cy="0" r="11" fill="#FF3366" stroke="#15171C" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
      <ul style={{ flex: "1 1 200px", margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
        {items.map((i) => (
          <li key={i.text} className="stg" style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 16 }}>
            <span style={{ ...i.mark, flex: "none" }} />
            {i.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Explore() {
  return (
    <div className="stage-in" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, height: "100%", background: "#15171C", color: "#FFFDF7" }}>
      <div className="stg" style={{ alignSelf: "flex-end", background: "#FFFDF7", color: "#15171C", borderRadius: "14px 14px 4px 14px", padding: "10px 16px", fontWeight: 600 }}>Nếu ném trên Mặt Trăng thì sao?</div>
      <div className="stg" style={{ position: "relative", flex: 1, minHeight: 0 }}>
        <svg viewBox="0 0 430 240" style={{ width: "100%", height: "100%" }} role="img" aria-label="Cùng một cú ném: trên Trái Đất bóng bay 41 m, trên Mặt Trăng bay 247 m">
          <line x1="0" y1="220" x2="430" y2="220" stroke="#4A4F5C" strokeWidth="2" />
          <path d={EARTH} fill="none" stroke="#FFFDF7" strokeWidth="2" strokeDasharray="5 5" />
          <path className="moonpath" d={MOON} fill="none" stroke="#C8F904" strokeWidth="2.5" strokeDasharray="6 5" />
          <g className="ballE" style={{ offsetPath: `path('${EARTH}')` }}><circle cx="0" cy="0" r="8" fill="#FFFDF7" stroke="#15171C" strokeWidth="2" /></g>
          <g className="ballM" style={{ offsetPath: `path('${MOON}')` }}><circle cx="0" cy="0" r="9" fill="#C8F904" stroke="#15171C" strokeWidth="2" /></g>
        </svg>
        <div style={{ position: "absolute", left: "4%", bottom: 34, fontSize: 13, color: "#C9CDD6" }}>Trái Đất<br /><strong className="mono" style={{ color: "#FFFDF7" }}>41 m</strong></div>
        <div className="falltag" style={{ position: "absolute", right: "2%", top: 0, background: "#C8F904", color: "#15171C", border: "2px solid #FFFDF7", borderRadius: 999, padding: "6px 14px", fontWeight: 700 }}>Mặt Trăng: 247 m, xa gấp 6!</div>
      </div>
      <div className="stg" style={{ fontSize: 15, color: "#C9CDD6" }}>Cùng một cú ném. Trọng lực yếu hơn 6 lần nên bóng bay xa hơn 6 lần. Patch dựng lại đúng cảnh bạn hỏi.</div>
    </div>
  );
}

const STAGES = [Solve, Understand, Explore];

export function Steps() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance until the visitor picks a step (or asks for reduced motion). The change is the content of the tab, so
  // clicking is the pause control (WCAG 2.2.2).
  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const id = setInterval(() => setStep((s) => (s + 1) % STEPS.length), ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const Stage = STAGES[step];
  return (
    <section id="cach-hoc" className="wrap" style={{ paddingTop: 130, paddingBottom: 120 }}>
      <h2 className="disp" style={{ margin: "0 0 14px", fontSize: "clamp(36px, 4.6vw, 60px)", lineHeight: 1.04, fontWeight: 800, maxWidth: 820 }}>
        Patch không giải hộ. Patch học cùng bạn.
      </h2>
      <p style={{ margin: "0 0 48px", fontSize: 18, lineHeight: 1.6, color: "#4A4F5C", maxWidth: 600 }}>
        Ví dụ với một bài ném xiên. Bạn luôn là người làm, Patch chỉ gợi ý đúng chỗ bạn kẹt.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "stretch" }}>
        <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: 10 }} role="group" aria-label="Ba bước học">
          {STEPS.map((s, i) => (
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
          <Stage key={step} />
        </div>
      </div>
    </section>
  );
}
