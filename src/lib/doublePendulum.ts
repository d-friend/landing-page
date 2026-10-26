// Double pendulum (m1 = m2 = 1, l1 = l2 = 1, g = 9.8), state y = [theta1, theta2, omega1, omega2].
// Geometry is for the hero window: viewBox 460x300, pivot at 230,150, rod length 66 px.
export const DP = { L: 66, ox: 230, oy: 150 } as const;
const G = 9.8;

export type DPState = [number, number, number, number];

// Both pendulums start at 2.5 rad on the lower rod; the upper rods differ by 0.001 rad.
export const DP_START: { a: DPState; b: DPState } = { a: [2.1, 2.5, 0, 0], b: [2.101, 2.5, 0, 0] };

export function dpDeriv(y: readonly number[]): DPState {
  const [t1, t2, w1, w2] = y;
  const d = t1 - t2;
  const den = 3 - Math.cos(2 * d);
  const a1 = (-3 * G * Math.sin(t1) - G * Math.sin(t1 - 2 * t2) - 2 * Math.sin(d) * (w2 * w2 + w1 * w1 * Math.cos(d))) / den;
  const a2 = (2 * Math.sin(d) * (2 * w1 * w1 + 2 * G * Math.cos(t1) + w2 * w2 * Math.cos(d))) / den;
  return [w1, w2, a1, a2];
}

export function rk4(y: DPState, h: number): DPState {
  const add = (b: DPState, k: DPState, f: number) => b.map((v, i) => v + f * k[i]) as DPState;
  const k1 = dpDeriv(y);
  const k2 = dpDeriv(add(y, k1, h / 2));
  const k3 = dpDeriv(add(y, k2, h / 2));
  const k4 = dpDeriv(add(y, k3, h));
  return y.map((v, i) => v + (h / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i])) as DPState;
}

// Total energy per unit mass (zero at the pivot height), for the drift test.
export function dpEnergy(y: readonly number[]): number {
  const [t1, t2, w1, w2] = y;
  const kinetic = w1 * w1 + 0.5 * w2 * w2 + w1 * w2 * Math.cos(t1 - t2);
  const potential = -G * (2 * Math.cos(t1) + Math.cos(t2));
  return kinetic + potential;
}

// Returns [x1, y1, x2, y2].
export function dpPos(y: readonly number[]): [number, number, number, number] {
  const x1 = DP.ox + DP.L * Math.sin(y[0]);
  const y1 = DP.oy + DP.L * Math.cos(y[0]);
  return [x1, y1, x1 + DP.L * Math.sin(y[1]), y1 + DP.L * Math.cos(y[1])];
}
