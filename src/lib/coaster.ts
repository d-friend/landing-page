// Roller-coaster loop sim for the playground (viewBox 720x340, k px per metre). Ported from the design's DCLogic.
export type Cfg = { H: number; R: number; fric: boolean; moon: boolean };
export const DEFAULT_CFG: Cfg = { H: 30, R: 10, fric: false, moon: false };

type Pt = { x: number; y: number; loop: number; s: number };
export type Geo = { k: number; y0: number; x0: number; cx: number; r: number; sy: number; pts: Pt[]; len: number; d: string };
export type Outcome = "pass" | "detach" | "slide" | null;
export type Sim = {
  s: number; dir: 1 | -1; dist: number; mode: "track" | "air" | "done";
  x: number; y: number; a: number; v: number; vx: number; vy: number;
  trail: string[]; outcome: Outcome; topV: number | null; detY: number | null; boomX: number;
  wait: number; time: number; turns: number;
};

export const gravity = (c: Cfg) => (c.moon ? 1.62 : 9.8);
export const needHeight = (c: Cfg) => 2.5 * c.R;

export function makeGeo(c: Pick<Cfg, "H" | "R">): Geo {
  const k = 7, y0 = 310, x0 = 60, cx = 440;
  const r = c.R * k, sy = y0 - c.H * k;
  const p0 = [x0, sy], p1 = [x0 + 70, Math.min(sy + 70, y0 - 20)], p2 = [cx - 160, y0], p3 = [cx, y0];
  const pts: Pt[] = [];
  for (let i = 0; i <= 90; i++) {
    const t = i / 90, u = 1 - t;
    pts.push({
      x: u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
      y: u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1],
      loop: -1, s: 0,
    });
  }
  for (let i = 1; i <= 140; i++) {
    const t = (i / 140) * Math.PI * 2;
    pts.push({ x: cx + r * Math.sin(t), y: y0 - r + r * Math.cos(t), loop: t, s: 0 });
  }
  for (let i = 1; i <= 30; i++) pts.push({ x: cx + (i / 30) * 250, y: y0, loop: -1, s: 0 });
  let s = 0;
  for (let i = 1; i < pts.length; i++) {
    s += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y) / k;
    pts[i].s = s;
  }
  const d = `M ${x0} ${sy} C ${p1[0]} ${p1[1]}, ${p2[0]} ${y0}, ${cx} ${y0} A ${r} ${r} 0 0 0 ${cx} ${y0 - 2 * r} A ${r} ${r} 0 0 0 ${cx} ${y0} L ${cx + 250} ${y0}`;
  return { k, y0, x0, cx, r, sy, pts, len: s, d };
}

// Position, heading and loop angle at arc length s (metres).
export function at(g: Geo, s: number) {
  const p = g.pts;
  if (s <= 0) return { x: p[0].x, y: p[0].y, a: Math.atan2(p[1].y - p[0].y, p[1].x - p[0].x), loop: -1 };
  let lo = 0, hi = p.length - 1;
  while (hi - lo > 1) {
    const m = (lo + hi) >> 1;
    if (p[m].s < s) lo = m; else hi = m;
  }
  const A = p[lo], B = p[hi], f = (s - A.s) / (B.s - A.s || 1);
  return { x: A.x + (B.x - A.x) * f, y: A.y + (B.y - A.y) * f, a: Math.atan2(B.y - A.y, B.x - A.x), loop: B.loop };
}

export function newSim(g: Geo): Sim {
  const p = at(g, 0);
  return { s: 0, dir: 1, dist: 0, mode: "track", x: p.x, y: p.y, a: p.a, v: 0, vx: 0, vy: 0, trail: [], outcome: null, topV: null, detY: null, boomX: 0, wait: 0, time: 0, turns: 0 };
}

// Advance by dt real seconds (the sim runs 1.5x, or 3x on the Moon, so the slower gravity still feels lively).
export function step(sm: Sim, g: Geo, c: Cfg, dt: number): void {
  if (sm.mode === "done") { sm.wait += dt; return; }
  const grav = gravity(c), mu = c.fric ? 0.07 : 0, k = g.k;
  const sub = 4, h = (dt * (c.moon ? 3 : 1.5)) / sub;
  for (let i = 0; i < sub; i++) {
    sm.time += h;
    if (sm.mode === "track") {
      const p = at(g, sm.s);
      const hy = (g.y0 - p.y) / k;
      let v2 = 2.25 + 2 * grav * (c.H - hy) - 2 * mu * grav * sm.dist;
      if (v2 <= 0.0004) {
        sm.dir = sm.dir === 1 ? -1 : 1; sm.turns++;
        if (!sm.outcome) sm.outcome = "slide";
        v2 = 0.0004;
        if (sm.turns > 5) { sm.mode = "done"; break; }
      }
      const v = Math.sqrt(v2);
      sm.v = v;
      if (p.loop >= 0 && sm.dir > 0) {
        if (v * v / c.R + grav * Math.cos(p.loop) < 0) {
          sm.mode = "air"; sm.outcome = "detach"; sm.detY = hy;
          sm.vx = Math.cos(p.a) * v * k; sm.vy = Math.sin(p.a) * v * k;
          sm.x = p.x; sm.y = p.y;
          break;
        }
        if (p.loop > Math.PI && sm.topV === null) sm.topV = v;
      }
      sm.s += sm.dir * v * h;
      sm.dist += v * h;
      if (sm.s < 0) sm.s = 0;
      if (sm.s >= g.len) { sm.s = g.len; sm.mode = "done"; if (!sm.outcome) sm.outcome = "pass"; }
      const q = at(g, sm.s);
      sm.x = q.x; sm.y = q.y; sm.a = q.a;
    } else if (sm.mode === "air") {
      sm.vy += grav * k * h;
      sm.x += sm.vx * h; sm.y += sm.vy * h;
      sm.v = Math.hypot(sm.vx, sm.vy) / k;
      sm.a = Math.atan2(sm.vy, sm.vx);
      if (sm.y >= g.y0) { sm.y = g.y0; sm.mode = "done"; sm.boomX = sm.x; break; }
    }
  }
  if (sm.outcome === "slide" && sm.time > 9) sm.mode = "done";
  sm.trail.push(`${sm.x.toFixed(1)},${sm.y.toFixed(1)}`);
  if (sm.trail.length > 46) sm.trail.shift();
}

// Runs a whole attempt at once (reduced motion shows the finished run instead of animating it).
export function runToEnd(g: Geo, c: Cfg): Sim {
  const sm = newSim(g);
  for (let i = 0; i < 20000 && sm.mode !== "done"; i++) step(sm, g, c, 0.016);
  return sm;
}
