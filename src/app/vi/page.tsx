import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingCopy } from "@/content/landing";

export const metadata: Metadata = {
  title: landingCopy.vi.metadata.title,
  description: landingCopy.vi.metadata.description,
};

export default function VietnameseLandingPage() {
  return <LandingPage copy={landingCopy.vi} />;
}
