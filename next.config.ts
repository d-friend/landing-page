import type { NextConfig } from "next";

// Fully static build (`out/`): no server runtime, so next/image needs no optimizer.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // shortcut: experimental flag; one page, so inlining the 23 KB stylesheet removes a render-blocking request. Drop it if a Next upgrade breaks it.
  experimental: { inlineCss: true },
};

export default nextConfig;
