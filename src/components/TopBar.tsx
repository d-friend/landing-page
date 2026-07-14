"use client";

import { useState } from "react";
import type { LandingCopy } from "@/content/landing";

const APP_LOGIN = "https://app.dfriend.online/login";
const APP_REGISTER = "https://app.dfriend.online/register";

export default function TopBar({
  content,
  actions,
}: {
  content: LandingCopy["navigation"];
  actions: LandingCopy["hero"]["actions"];
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-ink">
          <span className="text-brand">D</span>-Friend
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
          {content.sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-brand-soft hover:text-ink"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={APP_LOGIN}
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-brand-soft sm:block"
          >
            {actions.login}
          </a>
          <a
            href={APP_REGISTER}
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-transform hover:bg-brand-deep active:scale-[0.98]"
          >
            {actions.register}
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-line md:hidden"
          >
            <span className={`h-px w-4 bg-ink transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-ink transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-bg px-5 py-3 md:hidden" aria-label="Sections">
          {content.sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-brand-soft"
            >
              {section.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
