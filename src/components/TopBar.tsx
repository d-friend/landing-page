"use client";

import { useState } from "react";
import LogoMark from "@/components/LogoMark";

type NavLink = { label: string; href: string };

export default function TopBar({
  sections,
  primary,
  secondary,
  homeHref = "#",
}: {
  sections: NavLink[];
  primary: NavLink;
  secondary?: NavLink;
  homeHref?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a
          href={homeHref}
          className="flex shrink-0 items-center gap-2 whitespace-nowrap font-display text-lg font-semibold tracking-tight text-ink"
        >
          <LogoMark className="h-9" />
          D-Friend
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
          {sections.map((section) => (
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
          {secondary && (
            <a
              href={secondary.href}
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-brand-soft sm:block"
            >
              {secondary.label}
            </a>
          )}
          <a
            href={primary.href}
            className="whitespace-nowrap rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-transform hover:bg-brand-deep active:scale-[0.98]"
          >
            {primary.label}
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
          {sections.map((section) => (
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
