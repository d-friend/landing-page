import { LegalPage, legalMetadata } from "@/app/LegalPage";

export const metadata = legalMetadata("en", "terms");

export default function Page() {
  return <LegalPage lang="en" page="terms" />;
}
