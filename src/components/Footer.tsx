import Reveal from "./Reveal";
import type { LandingCopy } from "@/content/landing";

export default function Footer({
  content,
  sectionId,
}: {
  content: LandingCopy["footer"];
  sectionId?: string;
}) {
  return (
    <section
      id={sectionId}
      className="relative scroll-mt-32 bg-espresso px-6 py-36 text-center sm:py-44"
    >
      <Reveal className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-10 flex items-center justify-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand font-display text-xl font-black text-white">
            D
          </span>
          <span className="font-display text-xl font-bold text-bg">D-Friend</span>
        </div>
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-bg sm:text-6xl">
          {content.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-cream-on-dark">
          {content.body}
        </p>
        <a
          href="https://app.dfriend.online/login"
          className="mt-10 inline-block rounded-full bg-brand px-10 py-5 font-display text-lg font-bold text-white shadow-lg shadow-brand/30 transition hover:scale-[1.03] hover:bg-brand-deep"
        >
          {content.cta}
        </a>
      </Reveal>

      <div className="relative z-10 mt-24 text-sm text-faint">
        <span className="font-display font-bold text-cream-on-dark">D-Friend</span> —{" "}
        {content.brandLine}
      </div>
    </section>
  );
}
