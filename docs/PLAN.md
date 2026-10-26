# D-Friend landing page — implementation plan

Goal: ship the student-workspace landing page exactly as designed, as a static site, and send visitors into the workspace app with the problem they typed.

## Sources of truth

| What | Where |
|---|---|
| Page design (markup, CSS, interactive logic) | `docs/design/landing.dc.html` — copied from the Design canvas https://claude.ai/artifact/AhG2f8nTr7kYotc8ao1XKr |
| Logo + favicon (concept 03 "Patch mark") | `docs/design/logo_favicon.html` (03A lockup, 03D favicon 32/16px) |
| Patch pet SVGs + motion CSS | `../documents/redesign/demo-production/assets/` |
| Demo video (VI, 1920×1080, 31 s, 8.9 MB) | `../documents/redesign/demo-production/D-Friend_demo_VI.mp4` |

The design file is the spec. Copy, class names, colors and animations come from it verbatim. Do not redesign. Where this plan and the design disagree, the design wins unless this plan says "deviation".

The `.dc.html` format, for porting: everything inside `<helmet><style>` is the page CSS; everything inside `<x-dc>` is markup; `{{name}}` holes are values from `renderVals()` in the `<script type="text/x-dc">` block at the bottom; `<sc-for list=… as=…>` is `.map()`, `<sc-if value=…>` is a conditional; `onClick="{{fn}}"` / `onInput="{{fn}}"` are React handlers. `style="a: b"` becomes a React style object.

## Fixed facts

- Workspace app: https://demo.dfriend.online (`NEXT_PUBLIC_APP_URL` default).
- Contact: hello@dfriend.online (footer "Liên hệ" → `mailto:`).

## Stack (decided)

- Next.js 16 + React 19 + TypeScript, pnpm — same versions as `../frontend/package.json`, so one mental model across repos.
- `output: "export"` (fully static; deploys anywhere, e.g. Vercel). No API routes, no server runtime.
- One global stylesheet `src/app/globals.css` = the design's `<helmet>` CSS ported as-is. No Tailwind, no CSS modules, no UI library. Inline `style` from the design stays inline.
- Fonts via `next/font/google`: Bricolage Grotesque (600/700/800), Be Vietnam Pro (400/500/600/700), JetBrains Mono (500/700), subsets `latin` + `vietnamese`. Exposed as CSS vars and wired into `.df`, `.disp`, `.mono`.
- Vitest for the physics modules only. No e2e suite (one page; check it in a browser).
- Next 16 has breaking changes vs. training data: read `node_modules/next/dist/docs/` before writing config or app-router code.

Rejected: plain HTML (three non-trivial interactive widgets + RK4 sim are easier to keep correct as typed modules with tests); Astro (a second framework next to the Next.js app for no gain).

## File layout

```
landing_page/
  docs/PLAN.md, docs/design/*
  public/
    demo.mp4            # copied from documents/redesign/demo-production
    demo-poster.jpg     # ffmpeg frame grab at ~3 s
  src/
    app/
      layout.tsx        # <html lang="vi">, fonts, metadata, body bg #15171C
      page.tsx          # composes the sections in design order
      globals.css       # ported <helmet> CSS
      icon.svg          # 32px favicon from logo_favicon.html 03D
      apple-icon.png    # 180px render of the 64px mark (03D 64px variant)
    components/
      Patch.tsx         # Patch pet SVG, prop `state`: idle|thinking|happy|doubt
      Logo.tsx          # mark + "D▱Friend" wordmark (dark/light variant)
      sections/         # one file per section, see below
    lib/
      doublePendulum.ts # pure: deriv, rk4, positions        (+ .test.ts)
      coaster.ts        # pure: track geometry, step, outcome (+ .test.ts)
      appUrl.ts         # builds the workspace URL from a problem string
```

## Sections (design order) and what each needs

| # | Section | Component | Client JS? |
|---|---|---|---|
| 1 | Nav + hero (headline, ask box w/ cycling placeholder, sample chips, workspace window, flying scraps, Patch peeking + bubble) | `Hero.tsx` + `DoublePendulum.tsx` | yes: pendulum RAF loop, ask form |
| 2 | Lime marquee band | `Band.tsx` | no (CSS) |
| 3 | "Patch không giải hộ" 3-step tabs, auto-advance 6 s, click pauses | `Steps.tsx` | yes |
| 4 | Roller-coaster playground (sliders, chips, Patch reply) | `Playground.tsx` | yes: RAF loop |
| 5 | Subjects grid | `Subjects.tsx` | no (CSS) |
| 6 | Video | `Video.tsx` | no (`<video controls preload="none" poster>`) |
| 7 | Teachers email | `Teachers.tsx` | yes (see open decision 3) |
| 8 | Final CTA + happy Patch | `FinalCta.tsx` | yes: ask form |
| 9 | Footer | `Footer.tsx` | no |

Client components are only the ones marked yes; everything else stays a server component so the page ships mostly HTML.

## Phases

### Phase 1 — Foundation (Haiku)
Scaffold, config, fonts, globals.css, assets, `Patch`, `Logo`, favicon, and a `page.tsx` that renders every section as a static stub. Done when `pnpm build` produces `out/` and `pnpm lint && pnpm typecheck` pass. Detailed task list: see "Phase 1 tasks" below.

### Phase 2 — Static sections (Sonnet) — DONE 2026-10-26 (Teachers form left for Phase 3/4)
Port sections 1 (static parts), 2, 5, 6, 8 (static parts), 9 from the design markup. Pixel-match at 1440 and 375 widths against the canvas. The hero window and Patch bubble render, with a static pendulum pose until phase 3.

### Phase 3 — Interactive pieces (Sonnet) — DONE 2026-10-26 (Teachers form moves to Phase 4)
1. `lib/doublePendulum.ts`: port `dpDeriv`/`rk4`/`dpPos` from the design. Test: total energy drifts < 1% over 10 s of simulated time at h = 1/480.
2. `DoublePendulum.tsx`: two pendulums offset 0.001 rad, 90-point trails, reset at 24 s, gap readout, comma decimals (`fmt`).
3. `Steps.tsx`: auto-advance every 6 s, click selects + pauses, `aria-pressed`, `stage-in` animation replays on change (key the stage by step).
4. `lib/coaster.ts`: port `geo`/`at`/`stepSim`/outcome logic. Tests: H = 2.5R + 1 → `pass`; H = 2.5R − 2 with R = 10 → `detach`; H below loop radius → `slide`; moon gravity gives the same outcome as earth for the same H/R.
5. `Playground.tsx`: sliders, 4 chips, Patch state + reply text exactly as the design's `renderVals`.
6. All RAF loops: pause when off-screen (IntersectionObserver) and when `document.hidden`; under `prefers-reduced-motion` render one static frame. (Deviation: the design runs both loops always; that burns battery on phones.)

Do not re-render the whole page per frame: keep sim state in refs, and `setState` only inside the widget component.

### Phase 4 — Wiring, SEO, ship (Sonnet) — DONE 2026-10-26 except deploy (needs Eric: host + domain)
- Ask boxes (hero + final) and sample chips → `appUrl(problem)` → navigate to the workspace. Empty input → focus the input, no navigation.
- Nav "Đăng nhập" → workspace root (see open decision 2).
- Metadata: title, description, `og:image` (1200×630 static image of the hero), `lang="vi"`, canonical.
- Responsive + reduced-motion pass at 375 / 768 / 1440. Lighthouse mobile: performance ≥ 90, accessibility ≥ 95.
- Deploy (Vercel static) once Eric picks the domain.

## Open decisions (Eric's)

1. **Problem handoff to the app. DONE (2026-10-26).** `../frontend/src/hooks/useWorkspace.ts` `init()` reads `?q=`, strips it from the URL, and sends it as the first typed turn (`started_via: "typed"`; a new `started_via` value would need a DB migration). If a session was restored it prefills the composer instead of sending. Tests in `frontend/tests/unit/useWorkspace.test.ts`.
2. **Nav button. DONE.** Relabelled "Vào học" (the app has no sign-in); links to `appUrl()`.
3. **Teacher email capture.** Default: submit opens `mailto:hello@dfriend.online?subject=Giáo viên muốn dùng D-Friend&body=<their email>` (zero backend). Weak spot: it depends on the visitor having a mail client. Upgrade to `/api/feedback` or a form service if sign-ups matter.
4. **Video hosting.** 8.9 MB in `public/` is fine on Vercel. Move to a CDN/YouTube only if bandwidth becomes a cost.
5. **Analytics.** None planned. If wanted, the one event that matters is "ask submitted" (landing → app), measurable app-side via the `q` param.

## Phase 1 tasks (for the foundation agent)

Work only inside `landing_page/`. Do not commit. Do not touch `../frontend` or `../backend`.

1. Scaffold Next.js 16 App Router + TypeScript + ESLint with pnpm in this directory (keep `docs/`). Pin `next`, `react`, `react-dom`, `typescript`, `eslint`, `eslint-config-next`, `@types/*` to the exact versions in `../frontend/package.json`. Add `vitest` (same version) and a `test` script. Scripts: `dev`, `build`, `lint`, `typecheck` (`tsc --noEmit`), `test`. Remove scaffold boilerplate (default page content, sample SVGs in `public/`, default CSS).
2. `next.config.ts`: `output: "export"`, `images: { unoptimized: true }`. Read the static-exports guide in `node_modules/next/dist/docs/` first and follow it.
3. `.gitignore`: node_modules, .next, out, *.tsbuildinfo, .DS_Store, .env*.
4. `src/app/layout.tsx`: `<html lang="vi">`, the three fonts via `next/font/google` as CSS variables `--font-display`, `--font-sans`, `--font-mono`, metadata `title: "D-Friend · Học bằng cách tự thử"`, `description: "Gõ bài bạn đang kẹt. Patch gợi ý từng bước và dựng mô phỏng để bạn tự thử."`.
5. `src/app/globals.css`: copy the whole `<style>` block from `docs/design/landing.dc.html` (lines 14–175) verbatim, then only change the three font-family declarations in `.df`, `.disp`, `.mono` (and the `font:` shorthands in `.btn`, `.tab .num`, `.chip`, `.ask input`) to use `var(--font-sans)`, `var(--font-display)`, `var(--font-mono)`. Nothing else changes.
6. `src/components/Patch.tsx`: one component rendering the Patch SVG from the design (the full variant at design line 410 contains every face group: v-open/v-smile, v-up/v-o/v-think, v-happy/v-grin/v-spark, v-doubt/v-flat/v-q — merge the idle face from line 299 and the 3-dot think from line 262 so all four states render correctly). Props: `state: "idle" | "thinking" | "happy" | "doubt"`, `className?`, `style?`. Root: `<div className={\`pet pet-patch s-${state}\`} aria-hidden="true">`. Convert SVG attributes to JSX (`stroke-width` → `strokeWidth`, `class` → `className`, etc.).
7. `src/components/Logo.tsx`: the nav lockup from design lines 191–194 (mark SVG + wordmark with the rotated lime hyphen). Prop `tone: "dark" | "light"` (dark = nav on #15171C, text #FFFDF7; light = footer style from line 531, text #15171C, hyphen with ink border, no mark). Renders as an `<a href="#top">`.
8. Favicon: `src/app/icon.svg` = the 32px variant from `docs/design/logo_favicon.html` (the `<svg width="32" height="32" viewBox="0 0 64 64">` under 03D) with `xmlns` added. `src/app/apple-icon.png`: 180×180 render of the 64px 03D variant on #FFFDF7 (use `sips`/`rsvg-convert`/`qlmanage` if available; if no converter exists, skip and say so).
9. Assets: `cp ../documents/redesign/demo-production/D-Friend_demo_VI.mp4 public/demo.mp4`; poster: `ffmpeg -ss 3 -i public/demo.mp4 -frames:v 1 -q:v 3 -vf scale=1280:-2 public/demo-poster.jpg`.
10. `src/lib/appUrl.ts`: `export function appUrl(problem?: string): string` — base `process.env.NEXT_PUBLIC_APP_URL ?? "https://demo.dfriend.online"`, appends `?q=` with `encodeURIComponent(problem.trim())` only when non-empty. One vitest test covering empty, whitespace, and Vietnamese text with `?`/`&`.
11. `src/components/sections/*.tsx`: create the nine files from the sections table, each exporting a component that renders its outer element with the design's `id`/class/background (e.g. `<header className="hero">`, `<section id="cach-hoc" className="wrap">`) and a heading copied from the design. No interactivity yet. `Hero` must render `<Logo tone="dark" />` in the nav and `<Patch state="thinking" />` somewhere visible; `FinalCta` renders `<Patch state="happy" />`; `Footer` renders `<Logo tone="light" />`.
12. `src/app/page.tsx`: `<div className="df" style={{ width: "100%", background: "#F3F5F7", overflow: "hidden" }}>` wrapping the nine sections in order.
13. Verify: `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build` all pass and `out/index.html` exists. Report each command's result, and anything skipped.
