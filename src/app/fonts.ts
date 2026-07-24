import { Be_Vietnam_Pro, Geist } from "next/font/google";

/** Shared by both locale root layouts so the fonts load once. */

export const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const beVietnam = Be_Vietnam_Pro({
  variable: "--font-outfit",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
});

export const bodyClassName = `${geist.variable} ${beVietnam.variable} antialiased`;
