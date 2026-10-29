import { LegalPage, legalMetadata } from "@/app/LegalPage";

export const metadata = legalMetadata("vi", "terms");

export default function Page() {
  return <LegalPage lang="vi" page="terms" />;
}
