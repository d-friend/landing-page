import { TeacherForm } from "@/components/TeacherForm";

export function Teachers() {
  return (
    <section id="giao-vien" className="wrap" style={{ paddingTop: 90, paddingBottom: 20 }}>
      <div className="card" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "28px 32px" }}>
        <div style={{ flex: "1 1 380px" }}>
          <h2 className="disp" style={{ margin: "0 0 6px", fontSize: 30, fontWeight: 800 }}>Bạn là giáo viên?</h2>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#4A4F5C" }}>
            Sắp có: sau mỗi buổi học, bạn nhận báo cáo cả lớp kẹt ở bước nào để biết nên giảng lại phần gì.
          </p>
        </div>
        <TeacherForm />
      </div>
    </section>
  );
}
