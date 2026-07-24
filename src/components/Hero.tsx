"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LandingCopy, LandingLocale } from "@/content/landing";
import ChatPreview from "@/components/ChatPreview";
import AudienceSwitch from "@/components/AudienceSwitch";
import PilotForm from "@/components/PilotForm";

export default function Hero({
  content,
  locale,
}: {
  content: LandingCopy["hero"];
  locale: LandingLocale;
}) {
  const reduce = useReducedMotion();

  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pb-24 lg:pt-20">
      <div>
        <motion.div {...enter(0)} className="mb-7">
          <AudienceSwitch locale={locale} active="student" />
        </motion.div>

        <motion.h1
          {...enter(0.06)}
          className="headline pb-1 text-4xl font-semibold leading-[1.1] text-ink md:text-5xl lg:text-6xl"
        >
          {content.headlinePre}
          <em className="italic text-brand">{content.headlineEmphasis}</em>
          {content.headlinePost}
        </motion.h1>

        <motion.p
          {...enter(0.18)}
          className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted"
        >
          {content.subtext}
        </motion.p>

        <motion.div {...enter(0.3)}>
          <PilotForm
            copy={content.pilot}
            locale={locale}
            audience="student"
            className="mt-9 max-w-lg"
          />
        </motion.div>
      </div>

      <motion.div {...enter(0.26)} className="flex justify-center lg:justify-end">
        <ChatPreview chat={content.chat} />
      </motion.div>
    </section>
  );
}
