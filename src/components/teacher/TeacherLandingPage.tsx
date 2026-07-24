import type { LandingLocale } from "@/content/landing";
import type { TeacherCopy } from "@/content/teacher";
import { audiencePath } from "@/content/audience";
import TopBar from "@/components/TopBar";
import TeacherHero from "@/components/teacher/TeacherHero";
import TeacherPain from "@/components/teacher/TeacherPain";
import TeacherHow from "@/components/teacher/TeacherHow";
import TeacherReport from "@/components/teacher/TeacherReport";
import TeacherTrust from "@/components/teacher/TeacherTrust";
import TeacherDifference from "@/components/teacher/TeacherDifference";
import TeacherSchool from "@/components/teacher/TeacherSchool";
import TeacherFooter from "@/components/teacher/TeacherFooter";

export default function TeacherLandingPage({
  copy,
  locale,
}: {
  copy: TeacherCopy;
  locale: LandingLocale;
}) {
  return (
    <>
      <TopBar
        sections={copy.navigation.sections}
        primary={{ label: copy.navigation.cta, href: "#teacher-signup" }}
        homeHref={audiencePath.teacher[locale]}
      />
      <main>
        <TeacherHero content={copy.hero} locale={locale} />
        <TeacherPain content={copy.pain} sectionId="teacher-pain" />
        <TeacherHow content={copy.how} sectionId="teacher-how" />
        <TeacherReport content={copy.report} sectionId="teacher-report" />
        <TeacherTrust content={copy.trust} sectionId="teacher-trust" />
        <TeacherDifference content={copy.difference} sectionId="teacher-difference" />
        <TeacherSchool content={copy.school} sectionId="teacher-school" />
      </main>
      <TeacherFooter
        content={copy.finalCta}
        footer={copy.footer}
        locale={locale}
        sectionId="teacher-footer"
      />
    </>
  );
}
