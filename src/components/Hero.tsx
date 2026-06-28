"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { LandingCopy } from "@/content/landing";

// Added an intermediate "zoom" phase for the smooth layout extraction
type Phase = "typing" | "zoom" | "morph" | "logo";

export default function Hero({
  content,
  onDemoClick,
  onIntroComplete,
}: {
  content: LandingCopy["hero"];
  onDemoClick?: () => void;
  onIntroComplete?: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("typing");
  const [lineIdx, setLineIdx] = useState(0);
  const [typed, setTyped] = useState("");

  // 1. Type out the rotating lines
  useEffect(() => {
    if (phase !== "typing") return;
    const full = content.lines[lineIdx];
    
    if (typed.length < full.length) {
      const t = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 45);
      return () => clearTimeout(t);
    }
    
    const hold = setTimeout(() => {
      if (lineIdx < content.lines.length - 1) {
        setTyped("");
        setLineIdx((i) => i + 1);
      } else {
        // All lines typed, trigger the zoom!
        setPhase("zoom");
      }
    }, 1100);
    
    return () => clearTimeout(hold);
  }, [typed, lineIdx, phase, content.lines]);

  // 2. Sequence: zoom -> morph -> logo 
  useEffect(() => {
    if (phase === "zoom") {
      // Allow time for the words to detach and fly to the center
      const t = setTimeout(() => setPhase("morph"), 1300);
      return () => clearTimeout(t);
    }
    if (phase === "morph") {
      // Allow time for "the" to pop and morph into "D"
      const t = setTimeout(() => setPhase("logo"), 1200);
      return () => clearTimeout(t);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "logo") {
      onIntroComplete?.();
    }
  }, [onIntroComplete, phase]);

  const showD = phase === "morph" || phase === "logo";
  const showContent = phase === "logo";
  const showLargeWord = phase === "zoom" || phase === "morph" || phase === "logo";
  const isTyping = phase === "typing";
  const isIntroRunning = phase !== "logo";

  const handleSkipIntro = () => {
    setLineIdx(content.lines.length - 1);
    setTyped(content.lines[content.lines.length - 1] ?? "");
    setPhase("logo");
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <AnimatePresence>
        {isIntroRunning && (
          <motion.button
            key="hero-skip"
            type="button"
            onClick={handleSkipIntro}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute bottom-10 right-6 z-20 text-sm text-muted/85 transition hover:text-text sm:bottom-12 sm:right-8"
          >
            {content.skipLabel}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Fixed height container ensures surrounding elements don't jump during morphs */}
      <div className="relative z-10 flex min-h-[16rem] w-full max-w-4xl flex-col items-center justify-center pt-28 sm:pt-32">
        
        <motion.div
          animate={{
            opacity: isTyping ? 1 : 0,
            filter: isTyping ? "blur(0px)" : "blur(8px)",
            scale: isTyping ? 1 : 0.95,
          }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={`absolute inset-0 flex flex-col items-center justify-center ${
            isTyping ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-hidden={!isTyping}
        >
          <p className="flex flex-wrap items-center justify-center text-lg text-muted sm:text-xl">
            <span>{content.intro.prefix.trim()}</span>
            <span>&nbsp;</span>
            <span className="inline-block text-muted">{content.intro.primary.trim()}</span>
            <span>&nbsp;</span>
            <span className="inline-block text-muted">{content.intro.secondary.trim()}</span>
            <span>&nbsp;</span>
            <span>{content.intro.suffix.trim()}</span>
          </p>
          <p className="mt-3 flex h-10 items-center text-2xl font-medium text-text sm:text-4xl">
            <span>{typed}</span>
            <span className="caret">&nbsp;</span>
          </p>
        </motion.div>

        {showLargeWord && (
          <motion.div
            initial={{ opacity: 0, scale: 0.72, y: -36 }}
            animate={{
              opacity: 1,
              scale: phase === "zoom" ? 1 : 1,
              y: 0,
            }}
            transition={{
              duration: phase === "zoom" ? 1.4 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center"
          >
            <div className="flex items-baseline justify-center text-6xl font-bold tracking-tight sm:text-8xl">
              <motion.span
                transition={{ duration: 0.55, ease: "easeInOut" }}
                animate={
                  showD
                    ? { color: "#ff735c", scale: [1, 1.18, 1] }
                    : { color: "#94a3b8", scale: 1 }
                }
                className="inline-block origin-right text-muted"
              >
                {showD ? content.morph.logoPrimary : content.morph.basePrimary}
              </motion.span>
              <motion.span
                transition={{ duration: 0.55, ease: "easeInOut" }}
                animate={{
                  opacity: showD ? 1 : 0.9,
                  x: showD ? 0 : 4,
                  color: showD ? "#f8fafc" : "#94a3b8",
                }}
                className="inline-block origin-left text-muted"
              >
                {showD ? content.morph.logoSecondary : content.morph.baseSecondary}
              </motion.span>
            </div>
          </motion.div>
        )}

        {/* Sub-headline + CTA reveal after logo locks */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              key="sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-10 flex flex-col items-center"
            >
              <p className="max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
                {content.summary.prefix}
                <span className="text-text">{content.summary.highlight}</span>
                {content.summary.suffix}
              </p>
              <button
                type="button"
                onClick={onDemoClick}
                className="mt-8 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25 transition hover:scale-[1.03] hover:bg-brand/90"
              >
                {content.cta}
              </button>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 text-sm text-muted"
              >
                <span className="inline-block animate-bounce">↓</span> {content.scrollHint}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}