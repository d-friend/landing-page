# Scrollytelling Landing Page Design v2

**Date:** 2025-01-05
**Status:** Approved
**Version:** 2.0

---

## Overview

Transform both Student and Teacher landing pages into cinematic scrollytelling experiences. User scroll position becomes the narrative mechanic — content reveals dramatically as they journey through each story.

---

## Design Direction

| Attribute | Choice |
|-----------|--------|
| Style | Cinematic reveal — dramatic entrance animations, progressive disclosure |
| Intensity | Bold presence — larger scale animations, noticeable contrast |
| Star Moments | Philosophy + CoreEngine (student), Hero + Report (teacher) |
| Scroll Behavior | Hybrid — key moments scroll-linked, most elements one-shot reveals |
| Palette | Keep existing brand/accent colors |
| Mobile | Full experience, shortened animations |

---

## Architecture

### Three-Layer System

1. **Background Layer** — Existing atmospheric elements
2. **Sticky Anchor Layer** — For star moments
3. **Scroll-Reveal Layer** — All sections use scroll-triggered animations

### Student Page Sections (Narrative Arc)

1. Hero → Hook: "Who is D-Friend?"
2. Philosophy → Meaning: "What do D and Friend mean?"
3. StudyBuddy → Philosophy in action
4. Experience → Two-session learning arc
5. CoreEngine → P-D-E-O loop (STAR MOMENT)
6. Progress → Momentum and growth
7. TeacherCopilot → Teachers love it too
8. Differentiation → Why D-Friend vs typical AI tools
9. Footer → CTA

### Teacher Page Sections

1. Hero → Teachers deserve AI co-pilots
2. Pain → What's broken in education
3. How → How it works for teachers
4. Report → Automated insights (STAR MOMENT)
5. Trust → Social proof
6. Difference → vs. typical tools
7. School → School-wide deployment
8. Footer → CTA

---

## Cinematic Reveal System

### Animation Specifications

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Section headings | Slide up + fade (y: 40px → 0) | 600ms | cubic-bezier(0.22, 1, 0.36, 1) |
| Body text | Staggered reveals | 400ms, 80ms stagger | ease-out |
| Cards/Panels | Scale (0.95 → 1) + fade | 500ms | cubic-bezier(0.22, 1, 0.36, 1) |
| Star moments | Additional blur-to-sharp (8px → 0) | 800ms | ease-out |

### Mobile Adjustments

- Durations shortened 40%
- Stagger delays reduced 40%

---

## Components to Create/Modify

### New Components

1. **`CinematicRevealProvider`** — Context for mobile/reduced-motion detection
2. **`CinematicReveal`** — Reusable scroll-reveal with blur, scale, direction

### Student Page

3. `src/components/student/Philosophy.tsx` — Split entrance (D left, Friend right + blur)
4. `src/components/student/CoreEngine.tsx` — Cinematic staggered reveal
5. `src/components/student/Hero.tsx` — Update with CinematicReveal
6. `src/components/student/Experience.tsx` — Cinematic reveals
7. `src/components/student/StudyBuddy.tsx` — Cinematic reveals
8. `src/components/student/Progress.tsx` — Cinematic reveals
9. `src/components/student/TeacherCopilot.tsx` — Cinematic reveals
10. `src/components/student/Differentiation.tsx` — Opposite-side slide
11. `src/components/student/Footer.tsx` — Cinematic reveals

### Teacher Page

12. `src/components/teacher/Hero.tsx` — Cinematic reveals
13. `src/components/teacher/Pain.tsx` — Cinematic reveals
14. `src/components/teacher/How.tsx` — Cinematic reveals
15. `src/components/teacher/Report.tsx` — Cinematic reveals with sticky effect
16. `src/components/teacher/Trust.tsx` — Cinematic reveals
17. `src/components/teacher/Difference.tsx` — Cinematic reveals
18. `src/components/teacher/School.tsx` — Cinematic reveals
19. `src/components/teacher/Footer.tsx` — Cinematic reveals

### Shared

20. `src/components/shared/TopBar.tsx` — Keep existing
21. `src/components/shared/FooterBar.tsx` — Update if needed
22. `src/app/globals.css` — Add scrollbar-hide utility

---

## CinematicReveal Component API

```tsx
interface CinematicRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;           // Stagger delay in 80ms units
  blurIntensity?: number;    // 0 = no blur, 8 = star moment blur
  direction?: "up" | "left" | "right" | "none";
  scale?: boolean;           // Scale 0.95 → 1, default true
  threshold?: number;        // IntersectionObserver threshold, default 0.2
}
```

---

## Performance

- IntersectionObserver for scroll triggers
- GPU-accelerated only (transform, opacity)
- will-change hints on animated elements
- Respect `prefers-reduced-motion`
