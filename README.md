# D-Friend landing page

Static Next.js 16 site (`output: "export"`) for the student workspace. Plan, design source and status: `docs/PLAN.md`.

```
pnpm install
pnpm dev        # http://localhost:3000
pnpm test       # physics libs (double pendulum, coaster) + appUrl
pnpm lint && pnpm typecheck
pnpm build      # static site in out/
```

Env (see `.env.example`): `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_SITE_URL`. Both are read at build time.

Handoff to the app: the ask boxes and sample chips go to `${APP_URL}/?q=<problem>`; the workspace (`../frontend`) sends it as the first message.
