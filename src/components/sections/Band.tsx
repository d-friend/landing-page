const questions = ["Nếu vòng xoắn to hơn thì sao?", "Nếu thả trên Mặt Trăng?", "Nếu dây con lắc dài gấp đôi?", "Nếu a âm thì parabol ra sao?"];

function Tape() {
  return (
    <svg width="16" height="16" viewBox="0 0 10 10" aria-hidden="true">
      <rect x="1" y="3" width="8" height="4" fill="#15171C" transform="rotate(-20 5 5)" />
    </svg>
  );
}

// The second copy repeats the first so the -50% translate loops seamlessly; screen readers get the first only.
function Run({ hidden }: { hidden?: boolean }) {
  return (
    <span style={{ display: "flex", gap: 36, alignItems: "center", whiteSpace: "nowrap", paddingRight: 36 }} aria-hidden={hidden || undefined}>
      {questions.map((q) => (
        <span key={q} style={{ display: "contents" }}>
          {q}
          <Tape />
        </span>
      ))}
    </span>
  );
}

export function Band() {
  return (
    <div className="band" aria-label="Những câu hỏi nếu thì sao bạn có thể hỏi">
      <div className="marq disp" style={{ fontSize: 30, fontWeight: 800, padding: "18px 0" }}>
        <Run />
        <Run hidden />
      </div>
    </div>
  );
}
