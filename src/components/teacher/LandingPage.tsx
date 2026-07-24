import type { Locale } from "@/content/shared";
import type { TeacherCopy } from "@/content/teacher";
import { audiencePath } from "@/content/audience";
import TopBar from "@/components/shared/TopBar";
import TeacherHero from "@/components/teacher/Hero";
import TeacherPain from "@/components/teacher/Pain";
import TeacherHow from "@/components/teacher/How";
import TeacherReport from "@/components/teacher/Report";
import TeacherTrust from "@/components/teacher/Trust";
import TeacherDifference from "@/components/teacher/Difference";
import TeacherSchool from "@/components/teacher/School";
import TeacherFooter from "@/components/teacher/Footer";

export default function TeacherLandingPage({
  copy,
  locale,
}: {
  copy: TeacherCopy;
  locale: Locale;
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
