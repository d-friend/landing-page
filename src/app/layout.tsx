import type { Metadata } from "next";
import { Be_Vietnam_Pro, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const sans = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

// opsz axis matches the design's Google Fonts request (opsz,wght@12..96).
const display = Bricolage_Grotesque({
  subsets: ["latin", "vietnamese"],
  weight: "variable",
  axes: ["opsz"],
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "700"],
  variable: "--font-mono",
  preload: false, // only used in small readouts; not worth competing with the hero fonts
});

const title = "D-Friend · Học bằng cách tự thử";
const description = "Gõ bài bạn đang kẹt. Patch gợi ý từng bước và dựng mô phỏng để bạn tự thử.";

export const metadata: Metadata = {
  // shortcut: placeholder domain until Eric picks one; set NEXT_PUBLIC_SITE_URL at deploy.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://dfriend.online"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "vi_VN", siteName: "D-Friend", title, description, url: "/", images: [{ url: "/og.png", width: 1200, height: 630, alt: "D-Friend: Patch và mô phỏng con lắc kép" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
