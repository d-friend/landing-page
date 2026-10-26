"use client";
import { type FormEvent, useRef } from "react";
import { appUrl } from "@/lib/appUrl";

// Sends the visitor to the workspace with the problem they typed. Empty input just focuses the field.
function useAsk() {
  const input = useRef<HTMLInputElement>(null);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = input.current?.value.trim();
    if (!text) return input.current?.focus();
    window.location.assign(appUrl(text));
  };
  return { input, onSubmit };
}

const PLACEHOLDERS = [
  "Vì sao con lắc kép chuyển động lung tung vậy?",
  "Ném bóng 20 m/s, góc 45° thì bay xa bao nhiêu?",
  "Vẽ đồ thị y = x² − 4x + 3 giúp mình",
];

export function HeroAsk() {
  const { input, onSubmit } = useAsk();
  return (
    <form className="ask" onSubmit={onSubmit}>
      <label htmlFor="hero-ask" className="sr">Đề bài bạn đang kẹt</label>
      <div style={{ position: "relative", flex: 1, minWidth: 0, display: "flex" }}>
        <input ref={input} id="hero-ask" type="text" autoComplete="off" placeholder=" " />
        <div className="ph" aria-hidden="true">
          {PLACEHOLDERS.map((p) => <span key={p}>{p}</span>)}
        </div>
      </div>
      <button type="submit" className="btn" style={{ flex: "none", boxShadow: "0 3px 0 #15171C" }}>Giải bài này</button>
    </form>
  );
}

export function FinalAsk() {
  const { input, onSubmit } = useAsk();
  return (
    <form onSubmit={onSubmit} style={{ display: "flex", gap: 10, flexWrap: "wrap", maxWidth: 620 }}>
      <label htmlFor="end-ask" className="sr">Đề bài bạn đang làm</label>
      <input
        ref={input}
        id="end-ask"
        type="text"
        autoComplete="off"
        placeholder="Dán đề bài bạn đang làm…"
        style={{ flex: "1 1 260px", minHeight: 52, border: "2px solid #15171C", borderRadius: 14, padding: "0 18px", font: "500 17px var(--font-sans), sans-serif", background: "#FFFDF7" }}
      />
      <button type="submit" className="btn" style={{ minHeight: 52 }}>Giải bài này</button>
    </form>
  );
}
