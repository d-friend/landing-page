# Scrollytelling Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the D-Friend landing page into a cinematic scrollytelling experience with dramatic scroll-triggered animations.

**Architecture:** Three-layer system: background (gradient orbs), sticky anchor (star moments), scroll-reveal (all sections). Key animations use framer-motion's `useScroll` + `useTransform` for scroll-linked effects. Reusable `CinematicReveal` component wraps all animated elements.

**Tech Stack:** Next.js 15, React 19, Framer Motion 11, Tailwind CSS 4

**Spec:** `docs/superpowers/specs/2025-01-05-scrollytelling-landing-page-design.md`

---

## Global Constraints

- **Animation durations:** 600ms desktop, 360ms mobile (40% shorter)
- **Stagger delays:** 80ms desktop, 48ms mobile (40% shorter)
- **Easing:** cubic-bezier(0.22, 1, 0.36, 1) for most animations
- **Blur intensity for star moments:** 8px blur-to-sharp
- **Mobile breakpoint:** 640px
- **Reduced motion:** All animations disabled when `prefers-reduced-motion: reduce`

---

## Review Focus

1. **prefers-reduced-motion** — Must disable all animations entirely when user preference is set
2. **Mobile P-D-E-O loop** — Must use horizontal scroll on mobile, not sticky vertical
3. **Star moment blur effect** — Philosophy section labels need blur(8px) → blur(0) transition
4. **Progress bar scroll-linking** — Progress section bar animates based on scroll position
5. **No layout shift** — Container heights must be reserved before animations start

---

## File Structure

| File | Responsibility |
|------|----------------|
| `src/components/CinematicReveal.tsx` | NEW: Reusable scroll-reveal with blur, scale, direction, stagger |
| `src/components/CinematicRevealProvider.tsx` | NEW: Context provider for mobile/reduced-motion detection |
| `src/components/Philosophy.tsx` | MODIFY: Add cinematic split entrance (D from left, Friend from right) |
| `src/components/CoreEngine.tsx` | MODIFY: Replace with sticky + scroll-linked P-D-E-O animation |
| `src/components/Experience.tsx` | MODIFY: Add staggered reveals with CinematicReveal |
| `src/components/Differentiation.tsx` | MODIFY: Add slide-from-opposite-sides reveal |
| `src/components/Progress.tsx` | MODIFY: Add scroll-linked progress bar |
| `src/components/StudyBuddy.tsx` | MODIFY: Add cinematic reveals |
| `src/components/Footer.tsx` | MODIFY: Add reveal animations |
| `src/components/LandingPage.tsx` | MODIFY: Wrap with CinematicRevealProvider |
| `tailwind.config.ts` | MODIFY: Add custom animation utilities if needed |

---

## Tasks

### Task 1: Create CinematicRevealProvider

**Files:**
- Create: `src/components/CinematicRevealProvider.tsx`
- Test: None (context provider, manual verification)

**Interfaces:**
- Consumes: None
- Produces: `useIsMobile` hook, `useReducedMotion` hook, `animationDuration` constant

```tsx
// Provider wraps entire app
// Exports:
// - useIsMobile(): boolean - true when viewport < 640px
// - useReducedMotion(): boolean - true when prefers-reduced-motion: reduce
// - ANIMATION_DURATION: 600 (desktop) | 360 (mobile)
// - STAGGER_DELAY: 80 (desktop) | 48 (mobile)
```

- [ ] **Step 1: Create the CinematicRevealProvider component**

```tsx
"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface CinematicContextValue {
  isMobile: boolean;
  reducedMotion: boolean;
  animationDuration: number;
  staggerDelay: number;
}

const CinematicContext = createContext<CinematicContextValue>({
  isMobile: false,
  reducedMotion: false,
  animationDuration: 600,
  staggerDelay: 80,
});

export function CinematicRevealProvider({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQueryMobile = window.matchMedia("(max-width: 639px)");
    const mediaQueryMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    setIsMobile(mediaQueryMobile.matches);
    setReducedMotion(mediaQueryMotion.matches);

    const handleMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);

    mediaQueryMobile.addEventListener("change", handleMobileChange);
    mediaQueryMotion.addEventListener("change", handleMotionChange);

    return () => {
      mediaQueryMobile.removeEventListener("change", handleMobileChange);
      mediaQueryMotion.removeEventListener("change", handleMotionChange);
    };
  }, []);

  const value: CinematicContextValue = {
    isMobile,
    reducedMotion,
    animationDuration: isMobile ? 360 : 600,
    staggerDelay: isMobile ? 48 : 80,
  };

  return (
    <CinematicContext.Provider value={value}>
      {children}
    </CinematicContext.Provider>
  );
}

export function useCinematicContext() {
  return useContext(CinematicContext);
}

export function useIsMobile() {
  const { isMobile } = useCinematicContext();
  return isMobile;
}

export function useReducedMotion() {
  const { reducedMotion } = useCinematicContext();
  return reducedMotion;
}
```

- [ ] **Step 2: Wrap LandingPage with provider**

Modify `src/components/LandingPage.tsx`:

Add import at top:
```tsx
import { CinematicRevealProvider } from "@/components/CinematicRevealProvider";
```

Wrap the main content (keep TopBar outside provider):
```tsx
return (
  <CinematicRevealProvider>
    <main className="relative overflow-hidden">
      {/* ... existing background orbs and content */}
    </main>
  </CinematicRevealProvider>
);
```

- [ ] **Step 3: Commit**

```bash
git add src/components/CinematicRevealProvider.tsx src/components/LandingPage.tsx
git commit -m "feat: add CinematicRevealProvider for mobile/reduced-motion detection

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 2: Create CinematicReveal Component

**Files:**
- Create: `src/components/CinematicReveal.tsx`
- Modify: Replace usages of `Reveal.tsx` in Philosophy, CoreEngine, Experience, Differentiation, StudyBuddy, Progress, Footer
- Test: Manual verification in browser

**Interfaces:**
- Consumes: `useCinematicContext`, framer-motion
- Produces: `CinematicReveal` component with props:
  ```tsx
  interface CinematicRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    blurIntensity?: number; // 0 = no blur, 8 = star moment blur
    direction?: "up" | "left" | "right" | "none";
    scale?: boolean; // default true
    threshold?: number; // default 0.2
  }
  ```

- [ ] **Step 1: Create the CinematicReveal component**

```tsx
"use client";

import { motion } from "framer-motion";
import { useCinematicContext, useReducedMotion } from "./CinematicRevealProvider";
import type { ReactNode } from "react";

interface CinematicRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  blurIntensity?: number;
  direction?: "up" | "left" | "right" | "none";
  scale?: boolean;
  threshold?: number;
}

const DIRECTION_VARIANTS = {
  up: { y: 40, x: 0 },
  left: { y: 0, x: 40 },
  right: { y: 0, x: -40 },
  none: { y: 0, x: 0 },
};

export default function CinematicReveal({
  children,
  className,
  delay = 0,
  blurIntensity = 0,
  direction = "up",
  scale = true,
  threshold = 0.2,
}: CinematicRevealProps) {
  const { animationDuration, staggerDelay } = useCinematicContext();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const { x, y } = DIRECTION_VARIANTS[direction];
  const blurFilter = blurIntensity > 0 ? blurIntensity : 0;

  const initial = {
    opacity: 0,
    y,
    x,
    filter: blurFilter > 0 ? `blur(${blurFilter}px)` : "none",
    scale: scale ? 0.95 : 1,
  };

  const animate = {
    opacity: 1,
    y: 0,
    x: 0,
    filter: "blur(0px)",
    scale: 1,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px", amount: threshold }}
      transition={{
        duration: animationDuration / 1000,
        delay: delay * (staggerDelay / 80),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/CinematicReveal.tsx
git commit -m "feat: add CinematicReveal component with blur, scale, direction support

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 3: Update Philosophy with Cinematic Split Entrance

**Files:**
- Modify: `src/components/Philosophy.tsx`

**Interfaces:**
- Consumes: `CinematicReveal`, `LandingCopy["philosophy"]`
- Produces: Updated Philosophy component with dramatic split entrance

- [ ] **Step 1: Rewrite Philosophy component with split entrance**

```tsx
"use client";

import { motion } from "framer-motion";
import CinematicReveal from "./CinematicReveal";
import { useCinematicContext, useReducedMotion } from "./CinematicRevealProvider";
import type { LandingCopy } from "@/content/landing";

export default function Philosophy({
  content,
  sectionId,
}: {
  content: LandingCopy["philosophy"];
  sectionId?: string;
}) {
  const { animationDuration } = useCinematicContext();
  const reducedMotion = useReducedMotion();

  const baseTransition = {
    duration: animationDuration / 1000,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const dLabelVariants = {
    hidden: { opacity: 0, x: -60, scale: 0.8 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { ...baseTransition, delay: 0 }
    },
  };

  const friendLabelVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.8 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { ...baseTransition, delay: 0.15 }
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { ...baseTransition, delay: custom },
    }),
  };

  return (
    <section id={sectionId} className="mx-auto max-w-6xl scroll-mt-32 px-6 py-28">
      <CinematicReveal className="mb-16 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{content.title}</h2>
      </CinematicReveal>

      <div className="grid gap-6 md:grid-cols-2">
        {/* D Panel - slides from left */}
        <CinematicReveal 
          className="panel-card panel-card-brand rounded-3xl p-8 sm:p-10"
          blurIntensity={8}
        >
          {reducedMotion ? (
            <div className="text-5xl font-bold text-brand">{content.done.label}</div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={dLabelVariants}
              className="text-5xl font-bold text-brand"
            >
              {content.done.label}
            </motion.div>
          )}
          
          <CinematicReveal delay={0.2} blurIntensity={8}>
            <h3 className="mt-6 text-2xl font-bold">{content.done.title}</h3>
            <p className="mt-2 text-lg font-medium text-brand">{content.done.subtitle}</p>
            <p className="mt-4 leading-relaxed text-muted">
              {content.done.body.split(content.done.emphasis)[0]}
              <span className="text-text">{content.done.emphasis}</span>
              {content.done.body.split(content.done.emphasis)[1]}
            </p>
          </CinematicReveal>
        </CinematicReveal>

        {/* Friend Panel - slides from right */}
        <CinematicReveal 
          delay={0.15}
          className="panel-card panel-card-accent rounded-3xl p-8 sm:p-10"
          blurIntensity={8}
        >
          {reducedMotion ? (
            <div className="text-5xl font-bold text-accent">{content.friend.label}</div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={friendLabelVariants}
              className="text-5xl font-bold text-accent"
            >
              {content.friend.label}
            </motion.div>
          )}
          
          <CinematicReveal delay={0.35} blurIntensity={8}>
            <h3 className="mt-6 text-2xl font-bold">{content.friend.title}</h3>
            <p className="mt-2 text-lg font-medium text-accent">{content.friend.subtitle}</p>
            <p className="mt-4 leading-relaxed text-muted">{content.friend.body}</p>
          </CinematicReveal>
        </CinematicReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Philosophy.tsx
git commit -m "feat: add cinematic split entrance to Philosophy section

D label slides from left, Friend label slides from right with blur-to-sharp
effect for star moment treatment

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 4: Create Sticky CoreEngine with Scroll-Linked P-D-E-O Animation

**Files:**
- Modify: `src/components/CoreEngine.tsx`

**Interfaces:**
- Consumes: `useScroll`, `useTransform` from framer-motion, `LandingCopy["coreEngine"]`
- Produces: CoreEngine with sticky container, sequential step reveals on scroll

- [ ] **Step 1: Rewrite CoreEngine with sticky scroll-linked animation**

```tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import CinematicReveal from "./CinematicReveal";
import { useCinematicContext, useReducedMotion, useIsMobile } from "./CinematicRevealProvider";
import type { LandingCopy } from "@/content/landing";

export default function CoreEngine({
  content,
  sectionId,
}: {
  content: LandingCopy["coreEngine"];
  sectionId?: string;
}) {
  const { animationDuration } = useCinematicContext();
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // Scroll progress for sticky section
  const { scrollYProgress } = useScroll({
    target: document.getElementById(sectionId ?? "") ?? undefined,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to step index (0-3)
  const stepProgress = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  const steps = content.steps;
  const baseTransition = {
    duration: animationDuration / 1000,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  // Mobile: horizontal scroll container
  if (isMobile) {
    return (
      <section 
        id={sectionId} 
        className="mx-auto max-w-6xl scroll-mt-32 px-6 py-28"
      >
        <CinematicReveal className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {content.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{content.title}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-balance text-lg text-muted">
            {content.description}
          </p>
        </CinematicReveal>

        {/* Horizontal scroll on mobile */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {steps.map((step, index) => (
            <motion.div
              key={step.letter}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...baseTransition, delay: index * 0.1 }}
              className="panel-card panel-card-emerald flex h-full min-w-[280px] flex-shrink-0 snap-center flex-col rounded-3xl p-8"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/12 text-3xl font-bold text-emerald-300">
                {step.letter}
              </div>
              <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
                {step.word}
              </div>
              <p className="mt-4 leading-relaxed text-muted">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop: sticky scroll-linked animation
  return (
    <section 
      id={sectionId} 
      className="relative mx-auto max-w-6xl scroll-mt-32 px-6 py-28"
    >
      <CinematicReveal className="mb-16 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{content.title}</h2>
        <p className="mx-auto mt-5 max-w-3xl text-balance text-lg text-muted">
          {content.description}
        </p>
      </CinematicReveal>

      {/* Sticky container - 400vh height to allow scroll-linked animation */}
      <div className="relative h-[400vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <div className="relative w-full max-w-5xl">
            {/* Step indicators */}
            <div className="mb-12 flex justify-center gap-4">
              {steps.map((step, index) => {
                const isActive = stepProgress && 
                  (index === 0 ? true : 
                   index === 1 ? stepProgress.get() > 0.25 :
                   index === 2 ? stepProgress.get() > 0.5 :
                   stepProgress.get() > 0.75);

                return (
                  <motion.div
                    key={step.letter}
                    className={`flex h-3 w-3 items-center justify-center rounded-full transition-colors ${
                      isActive ? "bg-emerald-400" : "bg-white/20"
                    }`}
                  />
                );
              })}
            </div>

            {/* Steps grid */}
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step, index) => {
                // Calculate visibility based on scroll progress
                const visibility = useTransform(
                  scrollYProgress,
                  [
                    0.1 + index * 0.2,
                    0.2 + index * 0.2,
                    0.3 + index * 0.2,
                    0.4 + index * 0.2,
                  ],
                  [0, 1, 1, 0]
                );

                const opacity = reducedMotion ? 1 : visibility;
                const scale = reducedMotion ? 1 : useTransform(visibility, [0, 0.3, 1], [0.8, 1, 1]);
                const y = reducedMotion ? 0 : useTransform(visibility, [0, 0.3, 1], [40, 0, 0]);

                return (
                  <motion.div
                    key={step.letter}
                    style={{ opacity, scale, y }}
                    className="panel-card panel-card-emerald flex h-full flex-col rounded-3xl p-8"
                  >
                    <motion.div
                      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/12 text-3xl font-bold text-emerald-300"
                      animate={reducedMotion ? {} : {
                        scale: [1, 1.1, 1],
                        transition: { 
                          duration: 0.3, 
                          delay: index * 0.1,
                          repeat: stepProgress && stepProgress.get() > (index + 1) / 4 ? 1 : 0
                        }
                      }}
                    >
                      {step.letter}
                    </motion.div>
                    <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
                      {step.word}
                    </div>
                    <p className="mt-4 leading-relaxed text-muted">{step.body}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Connector lines (decorative) */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full">
              <motion.line
                x1="25%"
                y1="50%"
                x2="75%"
                y2="50%"
                stroke="url(#connector-gradient)"
                strokeWidth="2"
                strokeDasharray="8 8"
                style={{ 
                  pathLength: reducedMotion ? 1 : useTransform(scrollYProgress, [0.2, 0.8], [0, 1]),
                  opacity: reducedMotion ? 1 : useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0])
                }}
              />
              <defs>
                <linearGradient id="connector-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#34d399" stopOpacity="1" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/CoreEngine.tsx
git commit -m "feat: add sticky scroll-linked animation to CoreEngine P-D-E-O loop

Desktop: sticky container with 400vh height for scroll-linked step reveals
Mobile: horizontal scroll container with snap points
Each step animates based on scroll progress through the sticky zone

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 5: Update Experience Section

**Files:**
- Modify: `src/components/Experience.tsx`

- [ ] **Step 1: Update Experience with CinematicReveal**

```tsx
"use client";

import CinematicReveal from "./CinematicReveal";
import { useCinematicContext } from "./CinematicRevealProvider";
import type { LandingCopy } from "@/content/landing";

export default function Experience({
  content,
  sectionId,
}: {
  content: LandingCopy["experience"];
  sectionId?: string;
}) {
  const { staggerDelay } = useCinematicContext();

  return (
    <section
      id={sectionId}
      className="relative mx-auto max-w-6xl scroll-mt-32 px-6 py-28"
    >
      <CinematicReveal className="mb-16 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{content.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted">
          {content.description}
        </p>
      </CinematicReveal>

      <div className="mb-12 grid gap-6 md:grid-cols-2">
        <CinematicReveal className="panel-card panel-card-cyan rounded-3xl p-8">
          <div className="text-sm font-semibold uppercase tracking-widest text-muted">
            {content.sessionOne.label}
          </div>
          <h3 className="mt-2 text-2xl font-bold">{content.sessionOne.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{content.sessionOne.body}</p>
        </CinematicReveal>
        <CinematicReveal 
          delay={0.1}
          className="panel-card panel-card-brand rounded-3xl border-brand/25 p-8"
        >
          <div className="text-sm font-semibold uppercase tracking-widest text-brand">
            {content.sessionTwo.label}
          </div>
          <h3 className="mt-2 text-2xl font-bold">{content.sessionTwo.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{content.sessionTwo.body}</p>
        </CinematicReveal>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.problems.map((p, i) => (
          <CinematicReveal
            key={p.tag}
            delay={i * (staggerDelay / 1000)}
            className="panel-card panel-card-accent panel-card-soft flex h-full flex-col rounded-2xl p-6"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-accent/20 px-2.5 py-1 text-sm font-bold text-accent">
                {p.tag}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                {p.role}
              </span>
            </div>
            <h4 className="mt-4 text-lg font-bold">{p.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
          </CinematicReveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Experience.tsx
git commit -m "feat: update Experience section with CinematicReveal

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 6: Update Differentiation Section

**Files:**
- Modify: `src/components/Differentiation.tsx`

- [ ] **Step 1: Update Differentiation with slide-from-opposite-sides**

```tsx
"use client";

import CinematicReveal from "./CinematicReveal";
import { useCinematicContext } from "./CinematicRevealProvider";
import type { LandingCopy } from "@/content/landing";

export default function Differentiation({
  content,
  sectionId,
}: {
  content: LandingCopy["differentiation"];
  sectionId?: string;
}) {
  const { staggerDelay } = useCinematicContext();

  return (
    <section
      id={sectionId}
      className="relative mx-auto max-w-6xl scroll-mt-32 px-6 py-28"
    >
      <CinematicReveal className="mb-16 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{content.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted">
          {content.description}
        </p>
      </CinematicReveal>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Generic column - slides from left */}
        <CinematicReveal 
          direction="left"
          className="panel-card panel-card-soft rounded-3xl p-8"
        >
          <div className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted">
            {content.genericLabel}
          </div>
          <div className="space-y-6">
            {content.genericPoints.map((point, i) => (
              <div key={i}>
                <h4 className="font-semibold text-text">{point.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">{point.body}</p>
              </div>
            ))}
          </div>
        </CinematicReveal>

        {/* D-Friend column - slides from right */}
        <CinematicReveal 
          direction="right"
          className="panel-card panel-card-brand rounded-3xl p-8"
        >
          <div className="mb-6 text-sm font-semibold uppercase tracking-wider text-brand">
            {content.dfriendLabel}
          </div>
          <div className="space-y-6">
            {content.dfriendPoints.map((point, i) => (
              <CinematicReveal 
                key={i}
                delay={i * (staggerDelay / 1000)}
              >
                <h4 className="font-semibold text-text">{point.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">{point.body}</p>
              </CinematicReveal>
            ))}
          </div>
        </CinematicReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Differentiation.tsx
git commit -m "feat: update Differentiation section with opposite-side slide animation

Generic column slides from left, D-Friend column slides from right

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 7: Update Progress Section with Scroll-Linked Bar

**Files:**
- Modify: `src/components/Progress.tsx`

- [ ] **Step 1: Update Progress with scroll-linked progress bar**

```tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import CinematicReveal from "./CinematicReveal";
import { useCinematicContext, useReducedMotion } from "./CinematicRevealProvider";
import type { LandingCopy } from "@/content/landing";

export default function Progress({
  content,
  sectionId,
}: {
  content: LandingCopy["progress"];
  sectionId?: string;
}) {
  const { animationDuration } = useCinematicContext();
  const reducedMotion = useReducedMotion();

  // Scroll-linked progress bar
  const { scrollYProgress } = useScroll({
    target: document.getElementById(sectionId ?? "") ?? undefined,
    offset: ["start end", "center center"],
  });

  const progressWidth = reducedMotion 
    ? "72%" 
    : useTransform(scrollYProgress, [0, 1], ["0%", "72%"]);

  return (
    <section id={sectionId} className="mx-auto max-w-5xl scroll-mt-32 px-6 py-28">
      <CinematicReveal className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{content.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted">
          {content.description}
        </p>
      </CinematicReveal>

      <CinematicReveal className="panel-card panel-card-brand rounded-3xl p-8 sm:p-12">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-text">{content.progressLabel}</span>
          <span className="rounded-md bg-brand/20 px-2 py-0.5 text-xs font-semibold text-brand">
            {content.badge}
          </span>
        </div>
        <div className="mt-4 h-4 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            style={{ width: progressWidth }}
            transition={{ duration: animationDuration / 1000, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-accent to-brand"
          />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <CinematicReveal className="panel-card panel-card-soft rounded-2xl bg-white/[0.02] p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-bold text-text">{content.rightCard.title}</div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-300">
                {content.rightCard.gain}
              </span>
            </div>
            <p className="mt-1 text-muted">{content.rightCard.body}</p>
          </CinematicReveal>
          <CinematicReveal delay={0.1} className="panel-card panel-card-soft rounded-2xl bg-white/[0.02] p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-bold text-text">{content.wrongCard.title}</div>
              <span className="rounded-full bg-amber-500/15 px-3 py-1 text-sm font-semibold text-amber-300">
                {content.wrongCard.gain}
              </span>
            </div>
            <p className="mt-1 text-muted">{content.wrongCard.body}</p>
          </CinematicReveal>
        </div>

        <CinematicReveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-muted">{content.footnote}</p>
        </CinematicReveal>
      </CinematicReveal>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Progress.tsx
git commit -m "feat: update Progress section with scroll-linked progress bar

Progress bar width animates from 0% to 72% based on scroll position

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 8: Update StudyBuddy and Footer

**Files:**
- Modify: `src/components/StudyBuddy.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Update StudyBuddy with CinematicReveal**

Read the current StudyBuddy component first, then update:

```tsx
"use client";

import { motion } from "framer-motion";
import CinematicReveal from "./CinematicReveal";
import { useCinematicContext, useReducedMotion } from "./CinematicRevealProvider";
import type { LandingCopy } from "@/content/landing";

export default function StudyBuddy({
  content,
  sectionId,
}: {
  content: LandingCopy["studyBuddy"];
  sectionId?: string;
}) {
  const { staggerDelay, animationDuration } = useCinematicContext();
  const reducedMotion = useReducedMotion();

  return (
    <section id={sectionId} className="mx-auto max-w-6xl scroll-mt-32 px-6 py-28">
      <CinematicReveal className="mb-16 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{content.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted">
          {content.description}
        </p>
      </CinematicReveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {content.cards.map((card, index) => (
          <CinematicReveal
            key={index}
            delay={index * (staggerDelay / 1000)}
            className="panel-card panel-card-accent panel-card-soft flex h-full flex-col rounded-3xl p-8"
          >
            <h3 className="text-xl font-bold">{card.title}</h3>
            
            {"body" in card && (
              <p className="mt-4 leading-relaxed text-muted">{card.body}</p>
            )}
            
            {"before" in card && "after" in card && (
              <div className="mt-4 space-y-4">
                <div className="rounded-xl bg-white/5 p-4 text-sm text-muted line-through">
                  {card.before}
                </div>
                <div className="rounded-xl bg-emerald-500/10 p-4 text-sm text-emerald-300">
                  {card.after}
                </div>
              </div>
            )}
            
            {"bodyPrefix" in card && (
              <p className="mt-4 leading-relaxed text-muted">
                {card.bodyPrefix}
                <span className="font-semibold text-accent">{card.bodyHighlight}</span>
                {card.bodySuffix}
              </p>
            )}
          </CinematicReveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update Footer with CinematicReveal**

```tsx
"use client";

import CinematicReveal from "./CinematicReveal";
import type { LandingCopy } from "@/content/landing";

export default function Footer({
  content,
  sectionId,
}: {
  content: LandingCopy["footer"];
  sectionId?: string;
}) {
  return (
    <footer id={sectionId} className="mx-auto max-w-4xl scroll-mt-32 px-6 py-28 text-center">
      <CinematicReveal>
        <h2 className="text-3xl font-bold sm:text-5xl">{content.title}</h2>
      </CinematicReveal>
      
      <CinematicReveal delay={0.15}>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">{content.body}</p>
      </CinematicReveal>
      
      <CinematicReveal delay={0.3}>
        <button
          type="button"
          className="mt-10 rounded-full bg-brand px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-brand/25 transition hover:scale-[1.03] hover:bg-brand/90"
        >
          {content.cta}
        </button>
      </CinematicReveal>
      
      <CinematicReveal delay={0.45}>
        <p className="mt-16 text-sm text-muted">{content.brandLine}</p>
      </CinematicReveal>
    </footer>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/StudyBuddy.tsx src/components/Footer.tsx
git commit -m "feat: update StudyBuddy and Footer with CinematicReveal

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 9: Update Tailwind Config (if needed) and Final Testing

**Files:**
- Check: `tailwind.config.ts`
- Verify: All sections work correctly

- [ ] **Step 1: Check if scrollbar-hide utility exists**

Check if `tailwind.config.ts` or global CSS has scrollbar-hide utility. If not, add to global CSS:

```css
@layer utilities {
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

- [ ] **Step 2: Run dev server and test**

```bash
npm run dev
```

- [ ] **Step 3: Commit final changes**

```bash
git add . && git commit -m "feat: add scrollbar-hide utility for mobile P-D-E-O horizontal scroll

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

## Summary

| Task | Component | Key Changes |
|------|-----------|-------------|
| 1 | CinematicRevealProvider | Context for mobile/reduced-motion |
| 2 | CinematicReveal | Reusable scroll-reveal component |
| 3 | Philosophy | Split entrance (D left, Friend right) with blur |
| 4 | CoreEngine | Sticky P-D-E-O with scroll-linked animation |
| 5 | Experience | Staggered reveals |
| 6 | Differentiation | Opposite-side slide |
| 7 | Progress | Scroll-linked progress bar |
| 8 | StudyBuddy + Footer | Cinematic reveals |
| 9 | Config + Testing | Tailwind utilities, verify |
