import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { studentCopy } from "@/content/student";
import { bodyClassName } from "@/app/fonts";
import "../globals.css";

/**
 * Root layout for the Vietnamese routes. Split from the English one so each
 * locale serves the correct <html lang> without giving up static rendering.
 */
export const metadata: Metadata = {
  title: studentCopy.vi.metadata.title,
  description: studentCopy.vi.metadata.description,
};

export default function VietnameseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={bodyClassName}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
