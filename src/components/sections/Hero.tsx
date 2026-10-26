import type { CSSProperties } from "react";
import { HeroAsk } from "@/components/AskBox";
import { Logo } from "@/components/Logo";
import { Patch } from "@/components/Patch";
import { DoublePendulum } from "@/components/DoublePendulum";
import { appUrl } from "@/lib/appUrl";

const navLink: CSSProperties = { color: "#C9CDD6", textDecoration: "none", fontWeight: 500 };
const words = ["Chán", "cách", "học", "thông", "thường?"];
const scraps: { pos: CSSProperties; fly: CSSProperties; cls: string; style: CSSProperties; body: React.ReactNode }[] = [
  {
    pos: { right: "4%", top: 104 },
    fly: { ["--tx" as string]: "-220px", ["--ty" as string]: "260px" },
    cls: "scrap mono",
    style: { ["--r" as string]: "8deg", fontSize: 13 },
    body: "F = ma = ?? (trang 47)",
  },
  {
    pos: { left: "3%", bottom: 96 },
    fly: { ["--tx" as string]: "820px", ["--ty" as string]: "-300px", animationDelay: "1.6s" },
    cls: "scrap scrap-lime disp",
    style: { ["--r" as string]: "6deg", fontSize: 20 },
    body: "học thuộc!!!",
  },
  {
    pos: { left: "44%", bottom: 104 },
    fly: { ["--tx" as string]: "260px", ["--ty" as string]: "-290px", animationDelay: "2.4s" },
    cls: "scrap mono",
    style: { ["--r" as string]: "-8deg" },
    body: "v = √(gR) ?",
  },
  {
    pos: { right: "6%", bottom: 92 },
    fly: { ["--tx" as string]: "-180px", ["--ty" as string]: "-290px", animationDelay: "3.2s" },
    cls: "scrap",
    style: { ["--r" as string]: "5deg", fontSize: 13, color: "#4A4F5C" },
    body: (
      <>
        Kiểm tra 15 phút{" "}
        <span style={{ display: "inline-block", marginLeft: 6, width: 22, height: 22, border: "2px solid #FF3366", borderRadius: "50%", color: "#FF3366", textAlign: "center", lineHeight: "18px", fontWeight: 700 }}>
          4
        </span>
      </>
    ),
  },
];
const samples = [
  { label: "Con lắc kép", problem: "Vì sao con lắc kép chuyển động lung tung vậy? Thả hai con lắc lệch nhau 0,001 rad thì chuyển động khác nhau thế nào?" },
  { label: "Ném xiên", problem: "Ném quả bóng với vận tốc 20 m/s, nghiêng 45° so với mặt đất. Bóng bay xa bao nhiêu mét?" },
  { label: "Tàu lượn qua vòng", problem: "Tàu lượn thả từ độ cao 30 m, qua vòng xoắn bán kính 10 m. Tàu có qua được vòng không?" },
];

export function Hero() {
  return (
    <header className="hero">
      <div className="glow" aria-hidden="true" />
      {scraps.map((s, i) => (
        <div key={i} className="scrap-fly" style={{ ...s.pos, ...s.fly }} aria-hidden="true">
          <div className={s.cls} style={s.style}>
            {s.body}
          </div>
        </div>
      ))}

      <nav className="wrap" aria-label="Chính" style={{ position: "relative", zIndex: 4, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, paddingTop: 22, paddingBottom: 22, flexWrap: "wrap" }}>
        <Logo tone="dark" />
        <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
          <a href="#cach-hoc" className="hide-sm" style={navLink}>Cách học</a>
          <a href="#thu" className="hide-sm" style={navLink}>Chơi thử</a>
          <a href="#mon" className="hide-sm" style={navLink}>Môn học</a>
          <a href="#giao-vien" className="hide-sm" style={navLink}>Giáo viên</a>
          <a href={appUrl()} className="btn" style={{ minHeight: 44 }}>Vào học</a>
        </div>
      </nav>

      <div className="wrap" id="top" style={{ position: "relative", zIndex: 2, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 48, paddingTop: 48, paddingBottom: 170 }}>
        <div style={{ flex: "1 1 600px", minWidth: 0, display: "flex", flexDirection: "column", gap: 26 }}>
          <h1 className="disp" style={{ margin: 0, fontSize: "clamp(42px, 5.2vw, 76px)", lineHeight: 1.02, fontWeight: 800 }}>
            <span style={{ display: "block", color: "#8E95A5" }}>
              {words.map((w, i) => (
                <span key={w}>
                  <span className="w" style={{ animationDelay: `${0.15 + i * 0.1}s` }}>{w}</span>{" "}
                </span>
              ))}
            </span>
            <span style={{ display: "block" }}>
              <span className="hl">Thử cách này đi.</span>
            </span>
          </h1>
          <p style={{ margin: 0, maxWidth: 520, fontSize: 19, lineHeight: 1.6, color: "#C9CDD6" }}>
            Gõ bài bạn đang kẹt. <strong style={{ color: "#FFFDF7", fontWeight: 600 }}>Patch</strong> gợi ý từng bước và dựng mô phỏng để bạn tự thử.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 620 }}>
            <HeroAsk />
            <p style={{ margin: 0, fontSize: 14, color: "#8E95A5" }}>Miễn phí. Bài đầu tiên không cần đăng nhập.</p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
            <span style={{ fontSize: 14, color: "#8E95A5", marginRight: 4 }}>Hoặc thử bài mẫu:</span>
            {samples.map((s) => (
              <a key={s.label} href={appUrl(s.problem)} className="qchip">{s.label}</a>
            ))}
          </div>
        </div>

        <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative", paddingTop: 40 }}>
          <div className="card win" style={{ padding: 0, overflow: "hidden", color: "#15171C" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "2px solid #15171C", background: "#F3F5F7" }}>
              <span />
              <span style={{ fontSize: 13, fontWeight: 600, padding: "4px 10px", borderRadius: 8, border: "1.5px solid #15171C", background: "#FFFDF7" }}>Vật lý · Con lắc kép</span>
            </div>
            <div style={{ padding: "14px 14px 4px" }}>
              <DoublePendulum />
            </div>
          </div>
          <Patch state="thinking" style={{ position: "absolute", left: -26, top: -26, width: 96, height: 96, zIndex: 3 }} />
          <div className="bubble-pop" style={{ position: "absolute", left: 82, top: -8, zIndex: 3, background: "#C8F904", color: "#15171C", border: "2px solid #15171C", borderRadius: "14px 14px 14px 4px", padding: "9px 14px", fontSize: 14, fontWeight: 600 }}>
            Thả gần như y hệt, sao lại tách nhau?
          </div>
        </div>
      </div>
    </header>
  );
}
