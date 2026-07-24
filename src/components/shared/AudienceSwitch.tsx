import type { Locale } from "@/content/shared";
import { type Audience, audiencePath, audienceSwitchCopy } from "@/content/audience";

/**
 * Two-tab control above the hero on both landing pages. Rendered as links, not
 * buttons, so each audience keeps its own shareable URL.
 */
export default function AudienceSwitch({
  locale,
  active,
}: {
  locale: Locale;
  active: Audience;
}) {
  const copy = audienceSwitchCopy[locale];

  const tabs: Array<{ audience: Audience; label: string }> = [
    { audience: "student", label: copy.student },
    { audience: "teacher", label: copy.teacher },
  ];

  return (
    <nav aria-label={copy.label} className="inline-flex rounded-full border border-line bg-surface p-1">
      {tabs.map((tab) => {
        const isActive = tab.audience === active;

        return (
          <a
            key={tab.audience}
            href={audiencePath[tab.audience][locale]}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-brand text-white"
                : "text-muted hover:bg-brand-soft hover:text-ink"
            }`}
          >
            {tab.label}
          </a>
        );
      })}
    </nav>
  );
}
