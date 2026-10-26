// dark = nav lockup on #15171C (mark + wordmark). light = footer wordmark on #FFFDF7 (no mark).
export function Logo({ tone }: { tone: "dark" | "light" }) {
  if (tone === "light") {
    return (
      <a
        href="#top"
        className="disp"
        style={{ display: "flex", alignItems: "center", fontSize: 20, fontWeight: 800, color: "#15171C", textDecoration: "none" }}
      >
        D
        <span style={{ display: "inline-block", width: 8, height: 4, background: "#C8F904", border: "1.5px solid #15171C", margin: "0 2px", transform: "rotate(-12deg)" }} />
        Friend
      </a>
    );
  }
  return (
    <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#FFFDF7" }}>
      <svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true">
        <polygon points="16,14 54,17 57,56 13,54" fill="#3B4BFF" />
        <polygon points="10,11 43,8 55,20 51,54 8,51" fill="#FFFDF7" stroke="#15171C" strokeWidth="2.5" strokeLinejoin="round" />
        <polygon points="43,8 41,21 55,20" fill="#EAE4D3" stroke="#15171C" strokeWidth="2.5" strokeLinejoin="round" />
        <polygon points="4,18 22,6 26,12 8,24" fill="#C8F904" stroke="#15171C" strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="22" y="27" width="5.5" height="12" rx="1.5" fill="#15171C" />
        <rect x="35" y="27" width="5.5" height="12" rx="1.5" fill="#15171C" />
      </svg>
      <span className="disp" style={{ fontSize: 26, fontWeight: 800, display: "flex", alignItems: "center" }}>
        D
        <span style={{ display: "inline-block", width: 10, height: 5, background: "#C8F904", margin: "0 3px", transform: "rotate(-12deg)" }} />
        Friend
      </span>
    </a>
  );
}
