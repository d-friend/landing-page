import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer style={{ borderTop: "2px solid #15171C", background: "#FFFDF7" }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16, paddingTop: 26, paddingBottom: 26, fontSize: 14, color: "#4A4F5C" }}>
        <Logo tone="light" />
        <span>© 2026 D-Friend</span>
        <span style={{ display: "flex", gap: 20 }}>
          <a href="#giao-vien">Giáo viên</a>
          <a href="mailto:hello@dfriend.online">Liên hệ</a>
        </span>
      </div>
    </footer>
  );
}
