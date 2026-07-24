import type { Metadata } from "next";
import TeacherLandingPage from "@/components/teacher/TeacherLandingPage";
import { teacherCopy } from "@/content/teacher";

export const metadata: Metadata = {
  title: teacherCopy.en.metadata.title,
  description: teacherCopy.en.metadata.description,
};

export default function EnglishTeacherPage() {
  return <TeacherLandingPage copy={teacherCopy.en} locale="en" />;
}
