## 1. Triết lí sư phạm

### 1.1 Cấu trúc chương trình học

Chương trình được tổ chức theo 3 cấp:

```
Subject → Topic → Concept
```

Mỗi **Concept** bao gồm các loại nội dung: `definition`, `formula`, `method`, `property`, `application`, `common_mistake`, `visualization`.

*Ví dụ:* `math → calculus → limits` sẽ có định nghĩa giới hạn, công thức tính giới hạn, ứng dụng thực tế, v.v.

---

### 1.2 Mô hình học tập: P-D-E-O

Học sinh vận động theo vòng lặp:

```
Problem → Done → Execute → Optimize → (Problem mới)
```

Nguyên tắc cốt lõi: **"Done > Perfect"** — hoàn thành quan trọng hơn hoàn hảo.  
Điều này được hiện thực hóa ở tầng kỹ thuật: bài làm sai vẫn tăng progress bar một phần.

---

### 1.3 Cấu trúc buổi học

Mỗi Concept có **2 buổi học**:

| | Buổi 1 | Buổi 2 |
|---|---|---|
| **Mục tiêu** | Hiểu đủ để giải bài trắc nghiệm cơ bản | Làm chủ kiến thức qua hội thoại và bài tập |
| **Hình thức** | Tự học nội dung | Chat với AI chatbot, giải 4 bài |
| **Đầu ra** | Nắm nền tảng | Progress bar đạt 100% |

---

### 1.4 Cấu trúc 4 bài tập — Buổi 2

| # | Vai trò | Mô tả |
|---|---|---|
| P1 | REINFORCEMENT | Ôn lại kiến thức buổi 1 |
| P2 | CHALLENGE | Nâng cao hơn, cùng dạng bài |
| P3 | EXPLORATION | Khó và phi quy chuẩn — phá vỡ pattern cũ |
| P4 | EXTENSION | Cùng độ khó P3, giúp học sinh tự tin với pattern mới |

Học sinh giải theo thứ tự cố định P1 → P4. Đây là quyết định có chủ đích: chuỗi P3 → P4 chỉ có tác dụng sư phạm khi đi liên tiếp.

---

### 1.5 Hành vi chatbot — Mô hình "Bạn cùng học"

Chatbot không đóng vai giáo viên mà đóng vai **bạn học cùng**:

- Chatbot **follow theo hướng tiếp cận của học sinh**, không dẫn trước
- **Kết quả đúng** → xác nhận → gợi ý học sinh tự nhận ra điểm yếu (nếu có)
- **Kết quả sai** → chatbot "nhìn từ góc của mình" để đặt câu hỏi → học sinh tự nhận ra sai lầm → lặp lại (tối đa 3 lần)
- Sau 3 lần sai cùng một lỗi → chuyển sang `SOFT_INTERVENTION`: chatbot tạm rời vai bạn học, gợi ý trực tiếp bước tiếp theo (không cho đáp án), và đề xuất bỏ qua với điểm giảm

Kỹ thuật then chốt: chatbot **"voice doubt, not diagnosis"** — *"Hmm, mình thử cách đó rồi và bị kẹt ở chỗ..."* thay vì *"Bạn quên xử lý trường hợp X."*

---

### 1.6 Cơ chế progress bar

- Có đáp án được **submit** mới tăng progress (chatbot nói đúng/sai không tính)
- Đáp án đúng → tăng nhiều; đáp án sai → tăng ít hơn (cả hai đều > 0)
- Mục tiêu: đạt 100% khi kết thúc buổi 2
- Bảo vệ khỏi *farming*: nếu phát hiện submit bừa, progress tạm dừng tăng

---

### Flywheel B2B2C

- Có thêm 1 feature: Teacher Copilot - AI Agent cho giáo viên, giúp họ tracking tiến độ học sinh, giảm workload, và gợi ý can thiệp sớm, cơ bản là tăng efficiency.
- Teacher Copilot là **B2B2C**: bán cho trường học, nhưng giá trị cuối cùng là cho học sinh.
- Flywheel:
```
Teacher dùng AI agent → tạo lesson nhanh hơn
     ↓
Student học → submit → generate data
     ↓
Data train model tốt hơn → lesson quality tăng
     ↓
Cost B2B → B2C ≈ 0 vì school đã pay, student follow
     ↓
Loop lại từ đầu, mỗi vòng rẻ hơn và tốt hơn
```

- Ngoài ra, Teacher Copilot còn phụ trách Adaptive Learning: dựa trên learning data sau mỗi buổi học, AI agent sẽ gửi report cho giáo viên, gợi ý can thiệp sớm, và đề xuất lesson tiếp theo phù hợp với học sinh.
- Hệ thống giảm hallucination nhờ ngân hàng bài tập được upload bởi giáo viên và được update liên tục bởi đội ngũ chuyên môn và AI agent. Những bài tập này không chỉ có question và answer, mà được build dựa trên 1 cấu trúc chuẩn hóa. Điều này giúp AI agent generate bài tập mới dựa trên lesson content mà vẫn đảm bảo chất lượng và độ chính xác. Nói chung ta hoàn toàn có thể kiểm soát chất lượng bài tập, và giảm rủi ro học sinh bị học sai kiến thức. 
- Khi bài tập đủ nhiều, ta hoàn toàn không cần AI agent hỗ trợ genarate bài tập nữa, mà chỉ cần AI agent gợi ý lesson tiếp theo dựa trên learning data của học sinh.
Rồi build 1 thuật toán chọn extra exercises dựa trên learning data của học sinh, để học sinh có thể học theo hướng remedial hoặc advanced.