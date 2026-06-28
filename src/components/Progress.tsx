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
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {content.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{content.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted">
          {content.description}
        </p>
      </Reveal>

      <Reveal className="panel-card panel-card-brand rounded-3xl p-8 sm:p-12">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-text">{content.progressLabel}</span>
          <span className="rounded-md bg-brand/20 px-2 py-0.5 text-xs font-semibold text-brand">
            {content.badge}
          </span>
        </div>
        <div className="mt-4 h-4 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "72%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-accent to-brand"
          />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="panel-card panel-card-soft rounded-2xl bg-white/[0.02] p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-bold text-text">{content.rightCard.title}</div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-300">
                {content.rightCard.gain}
              </span>
            </div>
            <p className="mt-1 text-muted">{content.rightCard.body}</p>
          </div>
          <div className="panel-card panel-card-soft rounded-2xl bg-white/[0.02] p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-bold text-text">{content.wrongCard.title}</div>
              <span className="rounded-full bg-amber-500/15 px-3 py-1 text-sm font-semibold text-amber-300">
                {content.wrongCard.gain}
              </span>
            </div>
            <p className="mt-1 text-muted">{content.wrongCard.body}</p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted">{content.footnote}</p>
      </Reveal>
    </section>
  );
}
