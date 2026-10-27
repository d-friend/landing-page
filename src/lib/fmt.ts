import type { Lang } from "@/lib/i18n";

// One decimal; comma as the decimal separator in Vietnamese: 9.8 -> "9,8", "9.8" in English.
export const fmt = (x: number, lang: Lang) => {
  const s = (Math.round(x * 10) / 10).toString();
  return lang === "vi" ? s.replace(".", ",") : s;
};
