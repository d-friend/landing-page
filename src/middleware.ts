import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, type Locale } from "@/content/shared";

/**
 * Sends visitors landing on "/" to a locale URL. Vietnamese is the default;
 * only a browser that actually ranks English above Vietnamese gets /en.
 */
export function middleware(request: NextRequest) {
  const locale = preferredLocale(request.headers.get("accept-language"));

  return NextResponse.redirect(new URL(locale === "en" ? "/en" : "/vi", request.url));
}

function preferredLocale(header: string | null): Locale {
  if (!header) {
    return DEFAULT_LOCALE;
  }

  // "en-GB,en;q=0.9,vi;q=0.8" -> the highest-weighted tag we recognise wins.
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      const weight = q ? Number.parseFloat(q.trim().slice(2)) : 1;

      return {
        base: tag.trim().toLowerCase().split("-")[0],
        weight: Number.isFinite(weight) ? weight : 0,
      };
    })
    .filter((entry) => entry.base === "en" || entry.base === "vi")
    .sort((a, b) => b.weight - a.weight);

  return (ranked[0]?.base as Locale) ?? DEFAULT_LOCALE;
}

export const config = {
  matcher: "/",
};
