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

export default function LandingPage({
  copy,
  locale,
}: {
  copy: LandingCopy;
  locale: LandingLocale;
}) {
  return (
    <>
      <TopBar content={copy.navigation} actions={copy.hero.actions} />
      <main>
        <Hero content={copy.hero} />
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
