import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// [vi path, en path]; x-default points at the Vietnamese page.
const PAGES = [["", "/en"], ["/privacy", "/en/privacy"], ["/terms", "/en/terms"]];

export const dynamic = "force-static"; // output: export needs static metadata routes

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap(([vi, en]) => {
    const languages = { vi: `${SITE}${vi || "/"}`, en: `${SITE}${en}`, "x-default": `${SITE}${vi || "/"}` };
    return [languages.vi, languages.en].map((url) => ({ url, alternates: { languages } }));
  });
}
