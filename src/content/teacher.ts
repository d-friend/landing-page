import type { Locale, PilotFormCopy } from "@/content/shared";

export type TeacherCopy = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    sections: Array<{ label: string; href: string }>;
    /** Short form of the pilot CTA — the full label wraps in the top bar. */
    cta: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    pilot: PilotFormCopy;
    snapshot: {
      title: string;
      classLabel: string;
      groups: Array<{ label: string; count: string; percent: number }>;
      stickingLabel: string;
      stickingValue: string;
    };
  };
  pain: {
    eyebrow: string;
    title: string;
    points: Array<{ title: string; body: string }>;
  };
  how: {
    eyebrow: string;
    title: string;
    steps: Array<{ label: string; title: string; body: string }>;
  };
  report: {
    eyebrow: string;
    title: string;
    points: Array<{ title: string; body: string }>;
    closing: string;
    mock: {
      title: string;
      classLabel: string;
      stats: Array<{ label: string; value: string }>;
      groupsLabel: string;
      groups: Array<{ label: string; count: string; percent: number }>;
      blockersLabel: string;
      blockers: Array<{ name: string; share: string }>;
      attentionLabel: string;
      attention: Array<{ name: string; reason: string }>;
      nextLabel: string;
      nextValue: string;
      cta: string;
    };
  };
  trust: {
    eyebrow: string;
    title: string;
    blocks: Array<{ title: string; body: string }>;
  };
  difference: {
    eyebrow: string;
    title: string;
    body: string;
    mechanism: string;
    tutorLabel: string;
    tutorLine: string;
    dfriendLabel: string;
    dfriendLine: string;
  };
  school: {
    title: string;
    body: string;
    cta: string;
  };
  finalCta: {
    title: string;
    body: string;
    pilot: PilotFormCopy;
  };
  footer: {
    brandLine: string;
    contactLabel: string;
  };
};

const enPilot: PilotFormCopy = {
  cta: "Get a free pilot seat",
  submitting: "Sending…",
  emailLabel: "Email",
  emailPlaceholder: "you@school.edu.vn",
  hint: "We'll only email you about the pilot. No spam.",
  success: "Thanks! We've got your email and will be in touch about the pilot.",
  errorMissing: "Please enter your email address.",
  errorEmail: "That email address doesn't look right.",
  errorGeneric: "Something went wrong. Please try again, or email hello@dfriend.online.",
};

const viPilot: PilotFormCopy = {
  cta: "Nhận suất pilot miễn phí",
  submitting: "Đang gửi…",
  emailLabel: "Email",
  emailPlaceholder: "email@truong.edu.vn",
  hint: "Chúng tôi chỉ email về chương trình pilot. Không spam.",
  success: "Cảm ơn thầy cô! Chúng tôi đã nhận được email và sẽ liên hệ về chương trình pilot.",
  errorMissing: "Vui lòng nhập địa chỉ email của bạn.",
  errorEmail: "Địa chỉ email có vẻ chưa đúng.",
  errorGeneric: "Đã có lỗi xảy ra. Vui lòng thử lại, hoặc gửi mail tới hello@dfriend.online.",
};

export const teacherCopy: Record<Locale, TeacherCopy> = {
  en: {
    metadata: {
      title: "D-Friend Teacher Copilot. Plan a lesson in one sentence.",
      description:
        "Teacher Copilot builds lessons from your own question bank, lets students practise beside a study buddy that never gives answers, and reports every knowledge gap back to you after each session.",
    },
    navigation: {
      sections: [
        { label: "The problem", href: "#teacher-pain" },
        { label: "How it works", href: "#teacher-how" },
        { label: "The report", href: "#teacher-report" },
        { label: "You decide", href: "#teacher-trust" },
        { label: "For schools", href: "#teacher-school" },
      ],
      cta: "Join the pilot",
    },
    hero: {
      headline: "Plan a lesson in one sentence. Know exactly who is stuck, and where.",
      subheadline:
        "Teacher Copilot builds your lesson from your own question bank, lets students practise beside a study buddy that never hands over the answer — and reports every gap back to you, student by student, after every session.",
      pilot: enPilot,
      snapshot: {
        title: "Session report",
        classLabel: "Class 9A · Apr 18",
        groups: [
          { label: "Solid", count: "18", percent: 56 },
          { label: "Struggling", count: "9", percent: 28 },
          { label: "Didn't finish", count: "5", percent: 16 },
        ],
        stickingLabel: "Most common slip",
        stickingValue: "Sign flips when isolating x (38% of class)",
      },
    },
    pain: {
      eyebrow: "The problem",
      title: "You find out who is falling behind… after you've finished marking the test.",
      points: [
        {
          title: "Planning eats your evenings.",
          body: "Every lesson plan means hours picking questions, grading difficulty, and weighing up where each group is. Same again next week.",
        },
        {
          title: "A score never tells you why.",
          body: "A 5 out of 10 says the student is struggling. Which concept, what kind of mistake, how many times it repeated — the score stays silent.",
        },
        {
          title: "General-purpose tools just hand over the answer.",
          body: "The student asks a chatbot, copies the solution, submits. Homework: done. Learning: not.",
        },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "A closed loop: you assign, they practise, the system reports back.",
      steps: [
        {
          label: "Step 1",
          title: "Plan a lesson in one sentence",
          body: "Type one line: “Quadratic equations, class 9A, upper-middle group.” Copilot pulls from your own standardised question bank, orders the problems along the P1→P4 arc, and drafts the groundwork session. You review, edit if needed, and only then publish.",
        },
        {
          label: "Step 2",
          title: "Students practise with D-Friend",
          body: "Not a tutor re-explaining the lesson. A study buddy sitting beside them, following their approach, raising doubts instead of pronouncing errors — and never giving the answer away.",
        },
        {
          label: "Step 3",
          title: "A report that goes down to the mistake",
          body: "After the session you get a report: where the class stands, who needs help, and why — at the level of concepts, not scores.",
        },
      ],
    },
    report: {
      eyebrow: "After every session",
      title: "Not just a score. A diagnosis.",
      points: [
        {
          title: "The whole class at a glance",
          body: "Class average, who turned up, how many problems were attempted. One look, ten seconds.",
        },
        {
          title: "Three groups",
          body: "Solid · struggling · didn't finish. You know the shape of the room before the next period starts.",
        },
        {
          title: "Top 3 sticking points",
          body: "The problem types and concepts the class tripped on most, ranked by how often they came up.",
        },
        {
          title: "Who needs you, and why",
          body: "Not “student A: 4.5” but “student A: flips the sign when isolating x, in both problem 2 and problem 3.”",
        },
        {
          title: "A suggested next step",
          body: "Move on, revisit, or push further — and one click to draft that lesson.",
        },
      ],
      closing:
        "Every report ends with a button. One click and the next lesson is drafted, tuned to exactly what the class just tripped on.",
      mock: {
        title: "Session report",
        classLabel: "Class 9A · Quadratic equations",
        stats: [
          { label: "Class average", value: "6.8" },
          { label: "Attended", value: "32/35" },
          { label: "Problems attempted", value: "124" },
        ],
        groupsLabel: "How the class split",
        groups: [
          { label: "Solid", count: "18", percent: 56 },
          { label: "Struggling", count: "9", percent: 28 },
          { label: "Didn't finish", count: "5", percent: 16 },
        ],
        blockersLabel: "Top 3 sticking points",
        blockers: [
          { name: "Sign flips when isolating x", share: "38%" },
          { name: "Forgetting the Δ > 0 condition", share: "25%" },
          { name: "Misremembering the root formula", share: "19%" },
        ],
        attentionLabel: "Worth a check-in",
        attention: [
          {
            name: "Gia Bảo",
            reason: "Flips the sign when isolating x, in both problem 2 and problem 3.",
          },
          {
            name: "Thu Hà",
            reason: "Right answer on problem 3, but got there by testing numbers.",
          },
          {
            name: "Minh Khôi",
            reason: "Stopped at problem 2, hasn't come back after three attempts.",
          },
        ],
        nextLabel: "Suggested for next session",
        nextValue: "Revisit: moving terms across, and the condition for two distinct roots",
        cta: "Draft the next lesson",
      },
    },
    trust: {
      eyebrow: "You're in control",
      title: "The system drafts. You decide.",
      blocks: [
        {
          title: "Nothing reaches students unreviewed.",
          body: "Every lesson plan and every extra exercise stays a draft until you have read it, edited it, and pressed publish.",
        },
        {
          title: "Questions come from your bank, not invented.",
          body: "You upload your papers in bulk and the system breaks them into structured exercises. Copilot only selects and sequences from that library — it does not write practice content of its own.",
        },
        {
          title: "Built for the Vietnamese curriculum.",
          body: "Vietnamese exam structures, Vietnamese conventions for writing up a solution, Vietnamese as the first language — not a translation layer.",
        },
      ],
    },
    difference: {
      eyebrow: "Why it's different",
      title: "Right answer, wrong method — we catch that.",
      body: "Most tools mark in one dimension: correct answer, well done. But a student who reaches the right answer by the wrong route carries that route into the exam — and it fails them on the harder question.",
      mechanism:
        "D-Friend reads the method and the result as two separate signals. Right result, wrong path? The system records it, you see it in the report, and the study buddy nudges the student into looking at their own working again.",
      tutorLabel: "A typical tutor bot",
      tutorLine: "You forgot to check the case x = 0.",
      dfriendLabel: "D-Friend",
      dfriendLine:
        "Huh, I did it that way too and got stuck right about here… what did you do at this step?",
    },
    school: {
      title: "For school leaders: the whole school, not just one class.",
      body: "Learning data rolls up by class and by year group — which concepts a whole cohort is weak on, which teachers could use more support. Register for a school-level pilot and talk to us directly.",
      cta: "Talk to us about a school pilot",
    },
    finalCta: {
      title: "Next lesson, let the report find who needs you most.",
      body: "The pilot is open to a limited number of classes. Free for the whole pilot period — in exchange, we need your honest feedback.",
      pilot: enPilot,
    },
    footer: {
      brandLine: "Done > Perfect.",
      contactLabel: "Contact us:",
    },
  },
  vi: {
    metadata: {
      title: "D-Friend Teacher Copilot. Soạn bài bằng một câu.",
      description:
        "Teacher Copilot soạn giáo án từ chính ngân hàng bài tập của bạn, để học sinh luyện cùng một người bạn học không bao giờ lộ đáp án — và báo cáo lại từng lỗ hổng kiến thức sau mỗi buổi.",
    },
    navigation: {
      sections: [
        { label: "Vấn đề", href: "#teacher-pain" },
        { label: "Cách hoạt động", href: "#teacher-how" },
        { label: "Báo cáo", href: "#teacher-report" },
        { label: "Bạn cầm lái", href: "#teacher-trust" },
        { label: "Nhà trường", href: "#teacher-school" },
      ],
      cta: "Đăng ký pilot",
    },
    hero: {
      headline: "Soạn bài bằng một câu. Biết chính xác ai đang hổng ở đâu.",
      subheadline:
        "Teacher Copilot của D-Friend soạn giáo án từ chính ngân hàng bài tập của bạn, để học sinh luyện cùng một người bạn học không bao giờ lộ đáp án — và báo cáo lại cho bạn từng lỗ hổng kiến thức, theo từng em, sau mỗi buổi.",
      pilot: viPilot,
      snapshot: {
        title: "Báo cáo buổi học",
        classLabel: "Lớp 9A · 18/4",
        groups: [
          { label: "Đã vững", count: "18", percent: 56 },
          { label: "Đang vướng", count: "9", percent: 28 },
          { label: "Chưa hoàn thành", count: "5", percent: 16 },
        ],
        stickingLabel: "Lỗi phổ biến nhất",
        stickingValue: "Sai dấu khi chuyển vế (38% lớp)",
      },
    },
    pain: {
      eyebrow: "Vấn đề",
      title: "Bạn chỉ biết học sinh hổng kiến thức… khi đã chấm xong bài kiểm tra.",
      points: [
        {
          title: "Soạn bài ngốn buổi tối.",
          body: "Mỗi giáo án là hàng giờ chọn bài, phân loại độ khó, cân nhắc trình độ từng nhóm. Tuần nào cũng lặp lại.",
        },
        {
          title: "Điểm số không nói lý do.",
          body: "Điểm 5 cho biết em đó yếu. Nhưng yếu ở khái niệm nào, sai kiểu gì, lặp lại bao nhiêu lần — điểm số im lặng.",
        },
        {
          title: "Công cụ đại trà thì đưa luôn đáp án.",
          body: "Học sinh hỏi chatbot, chép lời giải, nộp bài. Bài tập về nhà hoàn thành. Kiến thức thì không.",
        },
      ],
    },
    how: {
      eyebrow: "Cách hoạt động",
      title: "Một vòng lặp khép kín: bạn giao — trò luyện — hệ thống báo về.",
      steps: [
        {
          label: "Bước 1",
          title: "Soạn bài trong một câu",
          body: "Gõ một câu: “Bài phương trình bậc hai, lớp 9A, nhóm trung bình khá.” Copilot chọn bài từ ngân hàng bài tập chuẩn hoá của chính bạn, xếp theo lộ trình 4 bài P1→P4, và soạn sẵn nội dung dẫn dắt cho buổi nền tảng. Bạn duyệt, sửa nếu cần, rồi mới phát hành.",
        },
        {
          label: "Bước 2",
          title: "Học sinh luyện cùng D-Friend",
          body: "Không phải gia sư giảng lại. Một người bạn học ngồi cạnh, đi theo cách giải của học sinh, gợi nghi vấn thay vì phán lỗi — và không bao giờ đưa đáp án.",
        },
        {
          label: "Bước 3",
          title: "Báo cáo về tận từng lỗi sai",
          body: "Sau buổi học, bạn nhận báo cáo: lớp đang ở đâu, ai cần hỗ trợ, và vì sao — ở mức khái niệm, không phải mức điểm số.",
        },
      ],
    },
    report: {
      eyebrow: "Báo cáo sau buổi học",
      title: "Không chỉ điểm số. Là chẩn đoán.",
      points: [
        {
          title: "Toàn cảnh lớp học",
          body: "Điểm trung bình, sĩ số tham gia, số bài đã làm. Một cái nhìn, 10 giây.",
        },
        {
          title: "Ba nhóm học sinh",
          body: "Đã vững · đang vướng · chưa hoàn thành. Biết ngay phân bố lớp trước tiết sau.",
        },
        {
          title: "Top 3 điểm nghẽn",
          body: "Những dạng bài, khái niệm cả lớp vấp nhiều nhất, xếp theo tần suất.",
        },
        {
          title: "Danh sách cần hỗ trợ, kèm lý do",
          body: "Không phải “em A: 4.5 điểm” mà là “em A: sai dấu khi chuyển vế, lặp lại ở cả bài 2 và bài 3.”",
        },
        {
          title: "Đề xuất bước tiếp theo",
          body: "Học tiếp, ôn lại, hay nâng cao — và một cú click để soạn luôn bài đó.",
        },
      ],
      closing:
        "Mỗi báo cáo kết thúc bằng một nút. Bấm một lần, giáo án buổi sau đã sẵn — được điều chỉnh theo đúng những gì lớp vừa vấp.",
      mock: {
        title: "Báo cáo buổi học",
        classLabel: "Lớp 9A · Phương trình bậc hai",
        stats: [
          { label: "Điểm trung bình", value: "6.8" },
          { label: "Tham gia", value: "32/35" },
          { label: "Bài đã làm", value: "124" },
        ],
        groupsLabel: "Phân bố lớp",
        groups: [
          { label: "Đã vững", count: "18", percent: 56 },
          { label: "Đang vướng", count: "9", percent: 28 },
          { label: "Chưa hoàn thành", count: "5", percent: 16 },
        ],
        blockersLabel: "Top 3 điểm nghẽn",
        blockers: [
          { name: "Sai dấu khi chuyển vế", share: "38%" },
          { name: "Quên điều kiện Δ > 0", share: "25%" },
          { name: "Nhầm công thức nghiệm", share: "19%" },
        ],
        attentionLabel: "Cần hỗ trợ",
        attention: [
          {
            name: "Gia Bảo",
            reason: "Sai dấu khi chuyển vế, lặp lại ở cả bài 2 và bài 3.",
          },
          {
            name: "Thu Hà",
            reason: "Đúng kết quả bài 3, nhưng đi tới bằng cách thử số.",
          },
          {
            name: "Minh Khôi",
            reason: "Dừng ở bài 2, chưa quay lại sau ba lần thử.",
          },
        ],
        nextLabel: "Đề xuất cho buổi sau",
        nextValue: "Ôn lại: quy tắc chuyển vế và điều kiện có hai nghiệm phân biệt",
        cta: "Soạn giáo án buổi sau",
      },
    },
    trust: {
      eyebrow: "Bạn cầm lái",
      title: "Bản nháp do hệ thống soạn. Quyết định là của bạn.",
      blocks: [
        {
          title: "Không gì đến học sinh mà chưa qua tay bạn.",
          body: "Mọi giáo án, mọi bài tập bổ sung được soạn ra đều ở trạng thái nháp — cho đến khi bạn xem, sửa, và bấm phát hành.",
        },
        {
          title: "Bài tập từ ngân hàng của bạn, không phải tự bịa ra.",
          body: "Bạn upload đề hàng loạt, hệ thống tự bóc tách thành bài tập có cấu trúc. Copilot chỉ chọn và sắp xếp từ kho đó — không tự sáng tác nội dung ôn luyện.",
        },
        {
          title: "Bám chương trình Việt Nam.",
          body: "Xây cho lớp học Việt Nam: cấu trúc đề Việt Nam, cách trình bày lời giải Việt Nam, tiếng Việt là ngôn ngữ chính — không phải bản dịch.",
        },
      ],
    },
    difference: {
      eyebrow: "Vì sao khác biệt",
      title: "Đúng đáp án nhưng sai phương pháp — chúng tôi bắt được ca đó.",
      body: "Phần lớn công cụ chấm một chiều: đáp án đúng thì khen. Nhưng học sinh giải đúng bằng phương pháp sai sẽ mang phương pháp đó vào phòng thi — và trượt ở bài khó hơn.",
      mechanism:
        "D-Friend chấm cách làm và kết quả độc lập nhau. Đúng kết quả, sai đường đi? Hệ thống ghi nhận, bạn thấy trong báo cáo, và người bạn học nhẹ nhàng khiến học sinh tự nhìn lại cách giải của mình.",
      tutorLabel: "Bot gia sư thường",
      tutorLine: "Em quên xét trường hợp x = 0 rồi.",
      dfriendLabel: "D-Friend",
      dfriendLine: "Ơ mình cũng làm cách đó mà bị kẹt đúng chỗ này… bạn làm gì ở bước này thế?",
    },
    school: {
      title: "Với ban giám hiệu: nhìn được cả trường, không chỉ từng lớp.",
      body: "Dữ liệu học tập tổng hợp theo lớp, theo khối — khái niệm nào cả khối đang yếu, giáo viên nào cần thêm hỗ trợ. Đăng ký pilot cấp trường để trao đổi trực tiếp với chúng tôi.",
      cta: "Liên hệ về pilot cấp trường",
    },
    finalCta: {
      title: "Buổi dạy tới, hãy để báo cáo tự tìm ra ai cần bạn nhất.",
      body: "Pilot đang mở cho số lượng lớp giới hạn. Miễn phí trong suốt giai đoạn pilot — đổi lại, chúng tôi cần phản hồi thẳng thắn của bạn.",
      pilot: viPilot,
    },
    footer: {
      brandLine: "Done > Perfect.",
      contactLabel: "Liên hệ:",
    },
  },
};
