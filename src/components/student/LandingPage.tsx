import type { Locale } from "@/content/shared";
import type { StudentCopy } from "@/content/student";
import TopBar from "@/components/shared/TopBar";
import Hero from "@/components/student/Hero";
import Philosophy from "@/components/student/Philosophy";
import StudyBuddy from "@/components/student/StudyBuddy";
import Experience from "@/components/student/Experience";
import CoreEngine from "@/components/student/CoreEngine";
import Progress from "@/components/student/Progress";
import TeacherCopilot from "@/components/student/TeacherCopilot";
import Differentiation from "@/components/student/Differentiation";
import Footer from "@/components/student/Footer";

const APP_LOGIN = "https://app.dfriend.online/login";
const APP_REGISTER = "https://app.dfriend.online/register";

export default function LandingPage({
  copy,
  locale,
}: {
  copy: StudentCopy;
  locale: Locale;
}) {
  return (
    <>
      <TopBar
        sections={copy.navigation.sections}
        primary={{ label: copy.hero.actions.register, href: APP_REGISTER }}
        secondary={{ label: copy.hero.actions.login, href: APP_LOGIN }}
      />
      <main>
        <Hero content={copy.hero} locale={locale} />
        <Philosophy content={copy.philosophy} sectionId="landing-philosophy" />
        <StudyBuddy content={copy.studyBuddy} sectionId="landing-study-buddy" />
        <Experience content={copy.experience} sectionId="landing-experience" />
        <CoreEngine content={copy.coreEngine} sectionId="landing-core-engine" />
        <Progress content={copy.progress} sectionId="landing-progress" />
        <TeacherCopilot content={copy.teacher} sectionId="landing-teacher" />
        <Differentiation content={copy.differentiation} sectionId="landing-differentiation" />
      </main>
      <Footer
        content={copy.footer}
        registerLabel={copy.hero.actions.register}
        locale={locale}
        sectionId="landing-footer"
      />
    </>
  );
}
