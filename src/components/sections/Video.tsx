"use client";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/hooks/useFrameLoop";
import { dict, type Lang } from "@/lib/i18n";

export function Video({ lang }: { lang: Lang }) {
  const t = dict[lang].video;
  const ref = useRef<HTMLVideoElement>(null);

  // Plays while at least half visible, pauses when scrolled away. Browsers only allow autoplay when muted; the controls unmute.
  useEffect(() => {
    const v = ref.current;
    if (!v || prefersReducedMotion()) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {}); // blocked autoplay just leaves the poster and controls
      else v.pause();
    }, { threshold: 0.5 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section style={{ background: "#15171C", color: "#FFFDF7", padding: "110px 0" }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center" }}>
        <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: 18 }}>
          <h2 className="disp" style={{ margin: 0, fontSize: "clamp(34px, 4.2vw, 54px)", lineHeight: 1.04, fontWeight: 800 }}>
            {t.heading}
          </h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#C9CDD6", maxWidth: 420 }}>
            {t.sub}
          </p>
        </div>
        <div style={{ flex: "2 1 520px", minWidth: 0 }}>
          <video
            ref={ref}
            muted
            src={t.src}
            poster={t.poster}
            controls
            preload="none"
            playsInline
            style={{ display: "block", width: "100%", aspectRatio: "16 / 9", border: "2px solid #FFFDF7", borderRadius: 20, boxShadow: "0 8px 0 #3B4BFF", background: "#000" }}
          />
        </div>
      </div>
    </section>
  );
}
