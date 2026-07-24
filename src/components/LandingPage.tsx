import type { LandingCopy, LandingLocale } from "@/content/landing";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import StudyBuddy from "@/components/StudyBuddy";
import Experience from "@/components/Experience";
import CoreEngine from "@/components/CoreEngine";
import Progress from "@/components/Progress";
import TeacherCopilot from "@/components/TeacherCopilot";
import Differentiation from "@/components/Differentiation";
import Footer from "@/components/Footer";

const APP_LOGIN = "https://app.dfriend.online/login";
const APP_REGISTER = "https://app.dfriend.online/register";

export default function LandingPage({
  copy,
  locale,
}: {
  copy: LandingCopy;
  locale: LandingLocale;
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
