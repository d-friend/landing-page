import type { Metadata } from "next";
import TeacherLandingPage from "@/components/teacher/TeacherLandingPage";
import { teacherCopy } from "@/content/teacher";

export const metadata: Metadata = {
  title: teacherCopy.vi.metadata.title,
  description: teacherCopy.vi.metadata.description,
};

export default function VietnameseTeacherPage() {
  return <TeacherLandingPage copy={teacherCopy.vi} locale="vi" />;
}
