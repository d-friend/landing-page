"use client";
import { type SVGProps, useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/hooks/useFrameLoop";

// SMIL instead of CSS `d: path()`: Safari does not animate the `d` property from CSS. `keyframes` go there and
// back (A;B;C;B;A), each leg taking `legSeconds` with the given easing.
export function MorphPath({ keyframes, legSeconds, spline, ...rest }: { keyframes: string[]; legSeconds: number; spline: string } & SVGProps<SVGPathElement>) {
  const anim = useRef<SVGAnimateElement>(null);
  // SMIL ignores CSS reduced-motion rules, so drop the animation node for visitors who asked for stillness.
  useEffect(() => { if (prefersReducedMotion()) anim.current?.remove(); }, []);
  const loop = [...keyframes, ...keyframes.slice(0, -1).reverse()];
  const legs = loop.length - 1;
  return (
    <path d={keyframes[0]} {...rest}>
      <animate
          ref={anim}
          attributeName="d"
          values={loop.join(";")}
          dur={`${legSeconds * legs}s`}
          calcMode="spline"
          keyTimes={loop.map((_, i) => (i / legs).toFixed(4)).join(";")}
          keySplines={Array(legs).fill(spline).join(";")}
          repeatCount="indefinite"
        />
    </path>
  );
}
