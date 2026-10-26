export function Video() {
  return (
    <section style={{ background: "#15171C", color: "#FFFDF7", padding: "110px 0" }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center" }}>
        <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: 18 }}>
          <h2 className="disp" style={{ margin: 0, fontSize: "clamp(34px, 4.2vw, 54px)", lineHeight: 1.04, fontWeight: 800 }}>
            Xem một buổi học trong 30 giây.
          </h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#C9CDD6", maxWidth: 420 }}>
            Từ lúc gõ đề bài tàu lượn, tới lúc tự hỏi “nếu vòng xoắn to hơn thì sao?”.
          </p>
        </div>
        <div style={{ flex: "2 1 520px", minWidth: 0 }}>
          <video
            src="/demo.mp4"
            poster="/demo-poster.jpg"
            controls
            preload="none"
            playsInline
            style={{ display: "block", width: "100%", aspectRatio: "16 / 9", border: "2px solid #FFFDF7", borderRadius: 20, boxShadow: "0 8px 0 #3B4BFF", background: "#000" }}
          />
        </div>
      </div>
    </section>
  );
}
