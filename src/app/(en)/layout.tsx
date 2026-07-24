import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { studentCopy } from "@/content/student";
import { bodyClassName } from "@/app/fonts";
import "../globals.css";

/**
 * Root layout for the English routes. Split from the Vietnamese one so each
 * locale serves the correct <html lang> without giving up static rendering.
 */
export const metadata: Metadata = {
  title: studentCopy.en.metadata.title,
  description: studentCopy.en.metadata.description,
};

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={bodyClassName}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
