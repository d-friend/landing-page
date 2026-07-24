import type { LandingLocale } from "@/content/landing";

export type Audience = "student" | "teacher";

/**
 * Every link between the student and teacher pages resolves here, so the
 * localised slugs live in exactly one place.
 */
export const audiencePath: Record<Audience, Record<LandingLocale, string>> = {
  student: { en: "/en", vi: "/vi" },
  teacher: { en: "/en/teachers", vi: "/vi/giao-vien" },
};

export const audienceSwitchCopy: Record<
  LandingLocale,
  { label: string; student: string; teacher: string }
> = {
  en: {
    label: "I am a",
    student: "Student or parent",
    teacher: "Teacher",
  },
  vi: {
    label: "Tôi là",
    student: "Học sinh / phụ huynh",
    teacher: "Giáo viên",
  },
};
