"use client";

import type { LandingCopy } from "@/content/landing";

export default function TopBar({
  content,
  actions,
  onNavigate,
  visible = true,
}: {
  content: LandingCopy["navigation"];
  actions: LandingCopy["hero"]["actions"];
  onNavigate?: (href: string) => void;
  visible?: boolean;
}) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="flex items-center gap-3 py-3">
          <a
            href="#"
            className="flex shrink-0 items-center gap-2 font-display text-base font-bold tracking-tight text-text"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand font-display text-sm font-black text-white">
              D
            </span>
            {content.brand}
          </a>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1.5 overflow-x-auto px-1 md:flex">
            {content.sections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate?.(section.href);
                }}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-sand hover:text-text"
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            <a
              href="https://app.dfriend.online/login"
              className="rounded-full border-2 border-line bg-card px-3 py-1.5 text-sm font-semibold text-text transition hover:border-brand/40"
            >
              {actions.login}
            </a>
            <a
              href="https://app.dfriend.online/register"
              className="rounded-full bg-brand px-3 py-1.5 text-sm font-semibold text-white shadow-sm shadow-brand/25 transition hover:bg-brand-deep"
            >
              {actions.register}
            </a>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto border-t border-line py-2 md:hidden">
          {content.sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              onClick={(event) => {
                event.preventDefault();
                onNavigate?.(section.href);
              }}
              className="whitespace-nowrap rounded-full border-2 border-line bg-card px-3 py-1.5 text-sm font-medium text-muted transition hover:text-text"
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
