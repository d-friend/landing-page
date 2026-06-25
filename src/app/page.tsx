import LandingPage from "@/components/LandingPage";
import { landingCopy } from "@/content/landing";

export default function Home() {
  return <LandingPage copy={landingCopy.en} />;
}
