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
