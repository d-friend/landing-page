"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import type { LandingCopy } from "@/content/landing";

export default function Progress({
  content,
  sectionId,
}: {
  content: LandingCopy["progress"];
  sectionId?: string;
}) {
  return (
    <section id={sectionId} className="mx-auto max-w-5xl scroll-mt-32 px-6 py-28">
      <Reveal className="mb-12 text-center">
        <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-green">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          {content.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted">
          {content.description}
        </p>
      </Reveal>

      <Reveal className="panel-card p-8 sm:p-12">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="font-semibold text-text">{content.progressLabel}</span>
          <span className="rounded-full bg-green/12 px-3 py-1 text-xs font-semibold text-green">
            {content.badge}
          </span>
        </div>
        <div className="mt-4 h-5 w-full overflow-hidden rounded-full bg-sand">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "72%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="h-full rounded-full bg-green"
          />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-line bg-sand/50 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="font-display text-lg font-bold text-text">
                {content.rightCard.title}
              </div>
              <span className="rounded-full bg-green/12 px-3 py-1 font-display text-sm font-bold text-green">
                {content.rightCard.gain}
              </span>
            </div>
            <p className="mt-1 text-muted">{content.rightCard.body}</p>
          </div>
          <div className="rounded-2xl border-2 border-line bg-sand/50 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="font-display text-lg font-bold text-text">
                {content.wrongCard.title}
              </div>
              <span className="rounded-full bg-brand/12 px-3 py-1 font-display text-sm font-bold text-brand">
                {content.wrongCard.gain}
              </span>
            </div>
            <p className="mt-1 text-muted">{content.wrongCard.body}</p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-faint">{content.footnote}</p>
      </Reveal>
    </section>
  );
}
