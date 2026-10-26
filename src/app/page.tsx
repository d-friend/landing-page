import { Band } from "@/components/sections/Band";
import { Footer } from "@/components/sections/Footer";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Playground } from "@/components/sections/Playground";
import { Steps } from "@/components/sections/Steps";
import { Subjects } from "@/components/sections/Subjects";
import { Teachers } from "@/components/sections/Teachers";
import { Video } from "@/components/sections/Video";

export default function Page() {
  return (
    <div className="df" style={{ width: "100%", background: "#F3F5F7", overflow: "hidden" }}>
      <Hero />
      <Band />
      <Steps />
      <Playground />
      <Subjects />
      <Video />
      <Teachers />
      <FinalCta />
      <Footer />
    </div>
  );
}
