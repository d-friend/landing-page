import type { Metadata } from "next";
import LandingPage from "@/components/student/LandingPage";
import { studentCopy } from "@/content/student";

export const metadata: Metadata = {
  title: studentCopy.en.metadata.title,
  description: studentCopy.en.metadata.description,
};

export default function EnglishLandingPage() {
  return <LandingPage copy={studentCopy.en} locale="en" />;
}
