import type { Metadata } from "next";
import LandingPage from "@/components/student/LandingPage";
import { studentCopy } from "@/content/student";

export const metadata: Metadata = {
  title: studentCopy.vi.metadata.title,
  description: studentCopy.vi.metadata.description,
};

export default function VietnameseLandingPage() {
  return <LandingPage copy={studentCopy.vi} locale="vi" />;
}
