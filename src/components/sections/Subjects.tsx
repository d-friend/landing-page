import type { CSSProperties, ReactNode } from "react";

const tag = (color?: string): CSSProperties => ({ fontSize: 14, fontWeight: 600, ...(color ? { color } : {}) });
const h3: CSSProperties = { margin: "6px 0 0", fontSize: 26, fontWeight: 800 };
const tryIt: CSSProperties = { margin: 0, fontSize: 15 };

function Tile({ big, bg, color, children }: { big?: boolean; bg: string; color?: string; children: ReactNode }) {
  return (
    <div className={big ? "tile big" : "tile"} style={{ background: bg, ...(color ? { color } : {}) }}>
      {children}
    </div>
  );
}

export function Subjects() {
  return (
    <section id="mon" className="wrap" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <h2 className="disp" style={{ margin: "0 0 14px", fontSize: "clamp(36px, 4.6vw, 60px)", lineHeight: 1.04, fontWeight: 800 }}>
        Không chỉ có Vật lý.
      </h2>
      <p style={{ margin: "0 0 44px", fontSize: 18, lineHeight: 1.6, color: "#4A4F5C", maxWidth: 600 }}>
        Có sẵn mô phỏng cho Toán, Lý, Hóa và Thiên văn. Bài nào chưa có, Patch dựng mới cho bạn.
      </p>
      <div className="subj">
        <Tile big bg="#15171C" color="#FFFDF7">
          <div>
            <div style={tag("#C8F904")}>Thiên văn</div>
            <h3 className="disp" style={{ ...h3, fontSize: 30 }}>Hệ Mặt Trời</h3>
          </div>
          <svg viewBox="0 0 300 300" style={{ width: "100%", maxWidth: 340, height: "auto", alignSelf: "center" }} aria-hidden="true">
            <circle cx="150" cy="150" r="56" fill="none" stroke="#4A4F5C" strokeWidth="1.5" />
            <circle cx="150" cy="150" r="96" fill="none" stroke="#4A4F5C" strokeWidth="1.5" />
            <circle cx="150" cy="150" r="136" fill="none" stroke="#4A4F5C" strokeWidth="1.5" />
            <circle cx="150" cy="150" r="20" fill="#C8F904" stroke="#FFFDF7" strokeWidth="2" />
            <g className="spin1"><circle cx="206" cy="150" r="7" fill="#FF3366" /></g>
            <g className="spin2"><circle cx="54" cy="150" r="11" fill="#3B4BFF" stroke="#FFFDF7" strokeWidth="1.5" /></g>
            <g className="spin3"><circle cx="150" cy="14" r="8" fill="#FFFDF7" /></g>
          </svg>
          <p style={{ ...tryIt, lineHeight: 1.5, color: "#C9CDD6" }}>Thử hỏi: “Trái Đất xa Mặt Trời gấp đôi thì một năm dài bao lâu?”</p>
        </Tile>

        <Tile bg="#FFFDF7">
          <div>
            <div style={tag("#3B4BFF")}>Vật lý</div>
            <h3 className="disp" style={h3}>Con lắc đơn</h3>
          </div>
          <svg viewBox="0 0 200 150" style={{ width: "62%", height: "auto", alignSelf: "center" }} aria-hidden="true">
            <line x1="40" y1="14" x2="160" y2="14" stroke="#15171C" strokeWidth="3" />
            <g className="swing">
              <line x1="100" y1="14" x2="100" y2="118" stroke="#15171C" strokeWidth="2" />
              <circle cx="100" cy="124" r="13" fill="#FF3366" stroke="#15171C" strokeWidth="2.5" />
            </g>
          </svg>
          <p style={{ ...tryIt, color: "#4A4F5C" }}>Thử hỏi: “Dây dài gấp đôi thì dao động chậm đi bao nhiêu?”</p>
        </Tile>

        <Tile bg="#C8F904">
          <div>
            <div style={tag()}>Toán</div>
            <h3 className="disp" style={h3}>Đồ thị hàm số</h3>
          </div>
          <svg viewBox="0 0 220 170" style={{ width: "70%", height: "auto", alignSelf: "center" }} aria-hidden="true">
            <line x1="0" y1="110" x2="220" y2="110" stroke="#15171C" strokeWidth="1.5" />
            <line x1="110" y1="0" x2="110" y2="170" stroke="#15171C" strokeWidth="1.5" />
            <path className="wave" d="M 20 150 Q 110 -100 200 150" fill="none" stroke="#3B4BFF" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <p style={tryIt}>Thử hỏi: “Đổi dấu a thì parabol quay về phía nào?”</p>
        </Tile>

        <Tile bg="#3B4BFF" color="#FFFDF7">
          <div>
            <div style={tag()}>Hóa học</div>
            <h3 className="disp" style={h3}>Phân tử nước</h3>
          </div>
          <svg viewBox="0 0 200 170" style={{ width: "52%", height: "auto", alignSelf: "center" }} aria-hidden="true">
            <g className="mol">
              <line x1="100" y1="80" x2="52" y2="118" stroke="#FFFDF7" strokeWidth="4" />
              <line x1="100" y1="80" x2="148" y2="118" stroke="#FFFDF7" strokeWidth="4" />
              <circle className="atom" cx="100" cy="80" r="26" fill="#FF3366" stroke="#15171C" strokeWidth="2.5" />
              <circle className="atom" cx="52" cy="118" r="15" fill="#FFFDF7" stroke="#15171C" strokeWidth="2.5" />
              <circle className="atom" cx="148" cy="118" r="15" fill="#FFFDF7" stroke="#15171C" strokeWidth="2.5" />
            </g>
          </svg>
          <p style={tryIt}>Thử hỏi: “Sao phân tử nước lại cong chứ không thẳng?”</p>
        </Tile>

        <Tile bg="#FFFDF7">
          <div>
            <div style={tag("#3B4BFF")}>Toán</div>
            <h3 className="disp" style={h3}>Hình học</h3>
          </div>
          <svg viewBox="0 0 200 160" style={{ width: "62%", height: "auto", alignSelf: "center" }} aria-hidden="true">
            <path className="tri" d="M 20 140 L 180 140 L 60 20 Z" fill="#EAE4D3" stroke="#15171C" strokeWidth="3" strokeLinejoin="round" />
          </svg>
          <p style={{ ...tryIt, color: "#4A4F5C" }}>Thử hỏi: “Kéo một đỉnh đi, tổng ba góc có đổi không?”</p>
        </Tile>
      </div>
    </section>
  );
}
