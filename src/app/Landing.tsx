import { type Lang } from "@/lib/i18n";
import { Band } from "@/components/sections/Band";
import { Footer } from "@/components/sections/Footer";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Playground } from "@/components/sections/Playground";
import { Steps } from "@/components/sections/Steps";
import { Subjects } from "@/components/sections/Subjects";
import { Teachers } from "@/components/sections/Teachers";
import { Video } from "@/components/sections/Video";

export function Landing({ lang }: { lang: Lang }) {
  return (
    <div className="df" style={{ width: "100%", background: "#F3F5F7", overflow: "hidden" }}>
      <Hero lang={lang} />
      <Band lang={lang} />
      <Steps lang={lang} />
      <Playground lang={lang} />
      <Subjects lang={lang} />
      <Video lang={lang} />
      <Teachers lang={lang} />
      <FinalCta lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
