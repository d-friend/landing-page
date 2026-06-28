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
      className={`fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/88 backdrop-blur-md transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="flex items-center gap-3 py-3">
          <a href="#" className="shrink-0 text-base font-semibold tracking-tight text-text">
            <span className="text-brand">D</span>-Friend
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
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-muted transition hover:bg-white/8 hover:text-text"
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            <a
              href="https://app.dfriend.online/login"
              className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-sm font-medium text-text transition hover:border-white/25 hover:bg-white/10"
            >
              {actions.login}
            </a>
            <a
              href="https://app.dfriend.online/register"
              className="rounded-full bg-brand px-3 py-1.5 text-sm font-semibold text-white shadow-sm shadow-brand/20 transition hover:bg-brand/90"
            >
              {actions.register}
            </a>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto border-t border-white/8 py-2 md:hidden">
          {content.sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              onClick={(event) => {
                event.preventDefault();
                onNavigate?.(section.href);
              }}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/4 px-3 py-2 text-sm text-muted transition hover:text-text"
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}