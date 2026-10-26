import { describe, expect, it } from "vitest";
import { DEFAULT_CFG, makeGeo, runToEnd, type Cfg } from "./coaster";

const run = (c: Partial<Cfg>) => {
  const cfg = { ...DEFAULT_CFG, ...c };
  return runToEnd(makeGeo(cfg), cfg);
};

describe("coaster outcomes", () => {
  it("passes just above the 2.5R line and reports the speed at the top", () => {
    const sm = run({ H: 26, R: 10 });
    expect(sm.outcome).toBe("pass");
    expect(sm.topV).toBeGreaterThan(9.9); // at least sqrt(gR)
  });
  it("keeps its speed at the finish (leftover substeps after 'done' must not run the airborne branch)", () => {
    // Which substep ends the run depends on H, so sweep a few.
    for (const H of [26, 27, 28, 30, 31, 33, 35]) expect(run({ H, R: 10 }).v, `H=${H}`).toBeGreaterThan(15);
  });
  it("detaches just below the 2.5R line", () => {
    const sm = run({ H: 23, R: 10 });
    expect(sm.outcome).toBe("detach");
    expect(sm.detY).toBeGreaterThan(10);
  });
  it("slides back when released below the loop's quarter height", () => {
    expect(run({ H: 6, R: 10 }).outcome).toBe("slide");
  });
  it("gives the same outcome on the Moon as on Earth", () => {
    for (const H of [23, 26]) expect(run({ H, R: 10, moon: true }).outcome).toBe(run({ H, R: 10 }).outcome);
  });
  it("friction raises the height needed", () => {
    expect(run({ H: 26, R: 10, fric: true }).outcome).not.toBe("pass");
  });
});
