import { LegalPage, legalMetadata } from "@/app/LegalPage";

export const metadata = legalMetadata("vi", "privacy");

export default function Page() {
  return <LegalPage lang="vi" page="privacy" />;
}
