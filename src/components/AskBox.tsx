"use client";
import { type FormEvent, useRef } from "react";
import { appUrl } from "@/lib/appUrl";
import { dict, type Lang } from "@/lib/i18n";

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

export function HeroAsk({ lang }: { lang: Lang }) {
  const { input, onSubmit } = useAsk();
  const t = dict[lang].ask;
  return (
    <form className="ask" onSubmit={onSubmit}>
      <label htmlFor="hero-ask" className="sr">{t.heroLabel}</label>
      <div style={{ position: "relative", flex: 1, minWidth: 0, display: "flex" }}>
        <input ref={input} id="hero-ask" type="text" autoComplete="off" placeholder=" " />
        <div className="ph" aria-hidden="true">
          {t.placeholders.map((p) => <span key={p}>{p}</span>)}
        </div>
      </div>
      <button type="submit" className="btn" style={{ flex: "none", boxShadow: "0 3px 0 #15171C" }}>{t.submit}</button>
    </form>
  );
}

export function FinalAsk({ lang }: { lang: Lang }) {
  const { input, onSubmit } = useAsk();
  const t = dict[lang].ask;
  return (
    <form onSubmit={onSubmit} style={{ display: "flex", gap: 10, flexWrap: "wrap", maxWidth: 620 }}>
      <label htmlFor="end-ask" className="sr">{t.endLabel}</label>
      <input
        ref={input}
        id="end-ask"
        type="text"
        autoComplete="off"
        placeholder={t.endPlaceholder}
        style={{ flex: "1 1 260px", minHeight: 52, border: "2px solid #15171C", borderRadius: 14, padding: "0 18px", font: "500 17px var(--font-sans), sans-serif", background: "#FFFDF7" }}
      />
      <button type="submit" className="btn" style={{ minHeight: 52 }}>{t.submit}</button>
    </form>
  );
}
