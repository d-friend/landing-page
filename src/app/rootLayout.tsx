import type { Metadata } from "next";
import { Be_Vietnam_Pro, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { dict, type Lang } from "@/lib/i18n";
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

const PATH: Record<Lang, string> = { vi: "/", en: "/en" };

// Non-Vietnamese browsers land on the English page. Runs before first paint; ?l=vi is the opt-out the English page links to.
const REDIRECT = 'try{var l=(navigator.languages&&navigator.languages[0])||navigator.language||"";if(location.pathname==="/"&&!/^vi/i.test(l)&&!/[?&]l=vi/.test(location.search))location.replace("/en")}catch(e){}';

export function metadataFor(lang: Lang): Metadata {
  const { title, description, ogLocale, ogAlt } = dict[lang];
  return {
    // shortcut: placeholder domain until Eric picks one; set NEXT_PUBLIC_SITE_URL at deploy.
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://dfriend.online"),
    title,
    description,
    alternates: { canonical: PATH[lang], languages: PATH },
    openGraph: { type: "website", locale: ogLocale, siteName: "D-Friend", title, description, url: PATH[lang], images: [{ url: "/og.png", width: 1200, height: 630, alt: ogAlt }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

export function RootShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      {lang === "vi" && (
        <head>
          <script dangerouslySetInnerHTML={{ __html: REDIRECT }} />
        </head>
      )}
      <body>{children}</body>
    </html>
  );
}
