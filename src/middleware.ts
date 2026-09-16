import { NextResponse, type NextRequest } from "next/server";

/**
 * Sends visitors landing on "/" to the Vietnamese student landing page.
 * Locale-specific pages remain available through their explicit URLs.
 */
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/vi", request.url));
}

export const config = {
  matcher: "/",
};
