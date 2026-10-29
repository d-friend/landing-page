// Production serves www; the apex 308-redirects there, so canonicals must use www.
export const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dfriend.online";
