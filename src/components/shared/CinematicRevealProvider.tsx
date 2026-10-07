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
