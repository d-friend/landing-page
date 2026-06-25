import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { landingCopy } from "@/content/landing";

export const metadata: Metadata = {
  title: landingCopy.en.metadata.title,
  description: landingCopy.en.metadata.description,
};

export default function EnglishLandingPage() {
  return <LandingPage copy={landingCopy.en} />;
}
