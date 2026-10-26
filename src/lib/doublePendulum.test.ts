import { describe, expect, it } from "vitest";
import { DP_START, dpEnergy, dpPos, rk4, type DPState } from "./doublePendulum";

describe("double pendulum", () => {
  it("conserves energy within 1% over 10 s at h = 1/480", () => {
    let y: DPState = [...DP_START.a];
    const e0 = dpEnergy(y);
    let worst = 0;
    for (let i = 0; i < 4800; i++) {
      y = rk4(y, 1 / 480);
      worst = Math.max(worst, Math.abs(dpEnergy(y) - e0) / Math.abs(e0));
    }
    expect(worst).toBeLessThan(0.01);
  });

  it("starts nearly identical and then separates (chaos)", () => {
    let a: DPState = [...DP_START.a];
    let b: DPState = [...DP_START.b];
    const gap = () => {
      const p = dpPos(a), q = dpPos(b);
      return Math.hypot(p[2] - q[2], p[3] - q[3]);
    };
    expect(gap()).toBeLessThan(0.2);
    for (let i = 0; i < 480 * 20; i++) { a = rk4(a, 1 / 480); b = rk4(b, 1 / 480); }
    expect(gap()).toBeGreaterThan(20);
  });
});
