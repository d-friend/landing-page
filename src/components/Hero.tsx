"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LandingCopy } from "@/content/landing";
import ChatPreview from "@/components/ChatPreview";

const APP_LOGIN = "https://app.dfriend.online/login";
const APP_REGISTER = "https://app.dfriend.online/register";

export default function Hero({ content }: { content: LandingCopy["hero"] }) {
  const reduce = useReducedMotion();

  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pb-24 lg:pt-20">
      <div>
        <motion.h1
          {...enter(0)}
          className="headline pb-1 text-4xl font-semibold leading-[1.1] text-ink md:text-5xl lg:text-6xl"
        >
          {content.headlinePre}
          <em className="italic text-brand">{content.headlineEmphasis}</em>
          {content.headlinePost}
        </motion.h1>

        <motion.p
          {...enter(0.12)}
          className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted"
        >
          {content.subtext}
        </motion.p>

        <motion.div {...enter(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={APP_REGISTER}
            className="rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-brand-deep active:scale-[0.98]"
          >
            {content.actions.register}
          </a>
          <a
            href={APP_LOGIN}
            className="rounded-full border border-line bg-surface px-7 py-3.5 text-base font-medium text-ink transition-colors hover:border-brand hover:text-brand-deep"
          >
            {content.actions.login}
          </a>
        </motion.div>
      </div>

      <motion.div {...enter(0.2)} className="flex justify-center lg:justify-end">
        <ChatPreview chat={content.chat} />
      </motion.div>
    </section>
  );
}
