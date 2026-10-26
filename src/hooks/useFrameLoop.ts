"use client";
import { type RefObject, useEffect, useRef } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Calls tick(dt seconds) every frame, but only while `ref` is on screen, the tab is visible and the visitor
// has not asked for reduced motion. Clamps dt so a returning tab does not jump the simulation.
export function useFrameLoop(ref: RefObject<Element | null>, tick: (dt: number) => void) {
  const latest = useRef(tick);
  useEffect(() => {
    latest.current = tick;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    let onScreen = false, raf = 0, last = 0;
    const loop = (ts: number) => {
      latest.current(last ? Math.min((ts - last) / 1000, 0.034) : 0.016);
      last = ts;
      raf = requestAnimationFrame(loop);
    };
    const sync = () => {
      const run = onScreen && !document.hidden;
      if (run && !raf) { last = 0; raf = requestAnimationFrame(loop); }
      else if (!run && raf) { cancelAnimationFrame(raf); raf = 0; }
    };
    const io = new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; sync(); });
    io.observe(el);
    document.addEventListener("visibilitychange", sync);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      cancelAnimationFrame(raf);
    };
  }, [ref]);
}
