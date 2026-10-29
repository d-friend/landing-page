import { LegalPage, legalMetadata } from "@/app/LegalPage";

export const metadata = legalMetadata("en", "privacy");

export default function Page() {
  return <LegalPage lang="en" page="privacy" />;
}
