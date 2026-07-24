import { redirect } from "next/navigation";

/**
 * Middleware normally redirects "/" by Accept-Language before this renders.
 * This is the fallback for when it doesn't, so "/" never serves a copy of the
 * landing page competing with the locale URLs.
 */
export default function RootPage() {
  redirect("/vi");
}
