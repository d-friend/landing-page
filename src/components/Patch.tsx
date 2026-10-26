import type { CSSProperties } from "react";

export type PatchState = "idle" | "thinking" | "happy" | "doubt";

// Merged from the design's Patch variants: every face (landing.dc.html line 410), the idle face (line 299),
// the thinking face with eye highlights and the 3-dot bubble (line 262). globals.css shows the face that matches s-<state>.
export function Patch({ state, className, style }: { state: PatchState; className?: string; style?: CSSProperties }) {
  return (
    <div className={`pet pet-patch s-${state}${className ? ` ${className}` : ""}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 100 100">
        <polygon points="22,94 78,92 84,97 18,98" fill="#15171C" opacity=".12" />
        <g className="p-body">
          <polygon points="24,25 80,28 85,87 20,85" fill="#3B4BFF" stroke="#15171C" strokeWidth="2.4" strokeLinejoin="round" />
          <g className="p-clip">
            <path d="M45 24 L42 9 C41 4 51 3 52 9 L55 26 C55.5 29 49 30 48.5 26 L47 14" fill="none" stroke="#15171C" strokeWidth="2.6" strokeLinecap="round" />
          </g>
          <polygon points="16,22 65,18 82,35 77,84 14,81" fill="#FFFDF7" stroke="#15171C" strokeWidth="2.6" strokeLinejoin="round" />
          <polygon className="p-fold" points="65,18 63,36 82,35" fill="#EAE4D3" stroke="#15171C" strokeWidth="2.4" strokeLinejoin="round" />
          <polygon className="p-tape" points="9,30 34,13 40,21 15,38" fill="#C8F904" stroke="#15171C" strokeWidth="2.2" strokeLinejoin="round" />

          <g className="v v-open">
            <g className="p-blink">
              <rect x="31" y="45" width="7.5" height="12" rx="2" fill="#15171C" />
              <rect x="55" y="44" width="8.5" height="13" rx="2" fill="#15171C" />
              <rect x="33" y="47" width="2.5" height="3.5" fill="#FFFDF7" />
              <rect x="57" y="46" width="2.5" height="3.5" fill="#FFFDF7" />
            </g>
          </g>
          <g className="v v-smile">
            <path d="M41 63 L47 67 L55 61" stroke="#15171C" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>

          <g className="v v-up">
            <rect x="35" y="41" width="7.5" height="11" rx="2" fill="#15171C" />
            <rect x="58" y="40" width="8.5" height="12" rx="2" fill="#15171C" />
            <rect x="38" y="42" width="2.5" height="3.5" fill="#FFFDF7" />
            <rect x="61" y="41" width="2.5" height="3.5" fill="#FFFDF7" />
          </g>
          <g className="v v-o">
            <polygon points="48,62 55,61 54,68 47,67" fill="#15171C" />
          </g>

          <g className="v v-happy">
            <path d="M29 47 L38 51 L29 55" stroke="#15171C" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M64 46 L55 50 L64 54" stroke="#15171C" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
          <g className="v v-grin">
            <polygon points="37,60 60,59 56,72 40,71" fill="#FF3366" stroke="#15171C" strokeWidth="2.4" strokeLinejoin="round" />
          </g>

          <g className="v v-doubt">
            <rect x="31" y="47" width="8" height="11" rx="2" fill="#15171C" />
            <line x1="53" y1="53" x2="66" y2="51" stroke="#15171C" strokeWidth="3.4" strokeLinecap="round" />
            <line x1="52" y1="43" x2="67" y2="38" stroke="#3B4BFF" strokeWidth="3" strokeLinecap="round" />
          </g>
          <g className="v v-flat">
            <path d="M40 66 L46 63 L51 67 L57 64" stroke="#15171C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        </g>

        <g className="v v-think">
          <polygon className="td td1" points="75,21 81,17 80,24" fill="#3B4BFF" stroke="#15171C" strokeWidth="1.5" />
          <rect className="td td2" x="83" y="9" width="7" height="7" fill="#C8F904" stroke="#15171C" strokeWidth="1.5" />
          <polygon className="td td3" points="91,1 99,3 95,10" fill="#FF3366" stroke="#15171C" strokeWidth="1.5" />
        </g>
        <g className="v v-spark">
          <g><polygon points="6,22 16,17 13,28" fill="#FF3366" stroke="#15171C" strokeWidth="1.5" /></g>
          <g><rect x="84" y="24" width="9" height="9" fill="#C8F904" stroke="#15171C" strokeWidth="1.5" /></g>
          <g><path d="M75 6 L79 11 L88 2" stroke="#3B4BFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /></g>
        </g>
        <g className="v v-q">
          <text x="79" y="28" fontFamily="Bricolage Grotesque, sans-serif" fontSize="28" fontWeight="800" fill="#FF3366" stroke="#15171C" strokeWidth="1">?</text>
        </g>
      </svg>
    </div>
  );
}
