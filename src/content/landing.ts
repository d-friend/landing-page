export type LandingLocale = "en" | "vi";

export type ChatMessage = {
  from: "student" | "buddy";
  text: string;
};

export type LandingCopy = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    brand: string;
    sections: Array<{
      label: string;
      href: string;
    }>;
  };
  hero: {
    headlinePre: string;
    headlineEmphasis: string;
    headlinePost: string;
    subtext: string;
    actions: {
      login: string;
      register: string;
    };
    pilot: {
      cta: string;
      submitting: string;
      emailLabel: string;
      emailPlaceholder: string;
      hint: string;
      success: string;
      errorMissing: string;
      errorEmail: string;
      errorGeneric: string;
    };
    chat: {
      problemLabel: string;
      problemText: string;
      studentName: string;
      buddyName: string;
      messages: ChatMessage[];
      note: string;
    };
  };
  philosophy: {
    title: string;
    done: {
      label: string;
      title: string;
      subtitle: string;
      body: string;
    };
    friend: {
      label: string;
      title: string;
      subtitle: string;
      body: string;
    };
  };
  studyBuddy: {
    title: string;
    description: string;
    follow: {
      title: string;
      body: string;
    };
    doubt: {
      title: string;
      beforeLabel: string;
      before: string;
      afterLabel: string;
      after: string;
    };
    safety: {
      title: string;
      bodyPrefix: string;
      bodyHighlight: string;
      bodySuffix: string;
    };
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    sessionOne: {
      label: string;
      title: string;
      body: string;
    };
    sessionTwo: {
      label: string;
      title: string;
      body: string;
    };
    problems: Array<{
      tag: string;
      name: string;
      role: string;
      desc: string;
    }>;
  };
  coreEngine: {
    title: string;
    description: string;
    steps: Array<{
      letter: string;
      word: string;
      body: string;
    }>;
    gap: {
      label: string;
      title: string;
      plannedLabel: string;
      planned: string;
      realityLabel: string;
      reality: string;
      body: string;
    };
    loop: string;
  };
  progress: {
    eyebrow: string;
    title: string;
    description: string;
    progressLabel: string;
    rightCard: {
      title: string;
      body: string;
      gain: string;
    };
    wrongCard: {
      title: string;
      body: string;
      gain: string;
    };
    demo: {
      correct: string;
      wrong: string;
      reset: string;
      done: string;
    };
    footnote: string;
  };
  teacher: {
    eyebrow: string;
    title: string;
    description: string;
    points: Array<{
      title: string;
      body: string;
    }>;
    report: {
      title: string;
      averageLabel: string;
      averageValue: string;
      strugglingLabel: string;
      strugglingValue: string;
      attentionLabel: string;
      students: string[];
      draft: string;
      publish: string;
    };
  };
  differentiation: {
    title: string;
    description: string;
    genericLabel: string;
    dfriendLabel: string;
    genericPoints: Array<{
      title: string;
      body: string;
    }>;
    dfriendPoints: Array<{
      title: string;
      body: string;
    }>;
  };
  footer: {
    title: string;
    body: string;
    brandLine: string;
    contactLabel: string;
  };
};

export const landingCopy: Record<LandingLocale, LandingCopy> = {
  en: {
    metadata: {
      title: "D-Friend. Not a teacher. Not a tutor. Your study buddy.",
      description:
        "D-Friend is an AI study buddy built on Done > Perfect. It studies beside your kid, never gives the answer away, and reports back to the teacher.",
    },
    navigation: {
      brand: "D-Friend",
      sections: [
        { label: "Promise", href: "#landing-philosophy" },
        { label: "Study buddy", href: "#landing-study-buddy" },
        { label: "Experience", href: "#landing-experience" },
        { label: "Progress", href: "#landing-progress" },
        { label: "Teachers", href: "#landing-teacher" },
      ],
    },
    hero: {
      headlinePre: "The AI that studies ",
      headlineEmphasis: "with",
      headlinePost: " you.",
      subtext:
        "Not a teacher. Not a tutor. A study buddy that never gives the answer away and rewards every honest attempt.",
      actions: {
        login: "Log in",
        register: "Try D-Friend",
      },
      pilot: {
        cta: "Join our pilot",
        submitting: "Sending…",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        hint: "We'll only email you about the pilot. No spam.",
        success: "Thanks! We've got your email and will reach out soon.",
        errorMissing: "Please enter your email address.",
        errorEmail: "That email address doesn't look right.",
        errorGeneric: "Something went wrong. Please try again, or email hello@dfriend.online.",
      },
      chat: {
        problemLabel: "Problem 2 of 4",
        problemText: "Find m so that x² + 2x + m = 0 has two distinct roots.",
        studentName: "You",
        buddyName: "D-Friend",
        messages: [
          { from: "student", text: "I set Δ = 0 and got m = 1." },
          {
            from: "buddy",
            text: "Hmm, I tried m = 1 too, but then I only found one root. Aren't we looking for two different ones?",
          },
          { from: "student", text: "Oh right, it should be Δ > 0. So m < 1." },
          { from: "buddy", text: "That's where I landed as well. Want to submit it?" },
        ],
        note: "D-Friend wonders out loud. It never hands over the answer.",
      },
    },
    philosophy: {
      title: "Two letters. One promise.",
      done: {
        label: "D",
        title: "The “D” stands for Done.",
        subtitle: "Done > Perfect.",
        body:
          "Most platforms punish you for failing. We reward you for trying. Even a wrong answer moves your progress bar forward, because an honest mistake is an active step toward mastery.",
      },
      friend: {
        label: "Friend",
        title: "The “Friend” stands for, well, a friend.",
        subtitle: "A peer, not a professor.",
        body:
          "D-Friend isn't programmed to lecture. It follows your lead, works beside you, and never talks down to you. When you mess up, it doesn't judge. It figures it out with you.",
      },
    },
    studyBuddy: {
      title: "How your D-Friend actually thinks",
      description:
        "We stripped away the omniscient-teacher AI. D-Friend interacts like the classmate you wish you had.",
      follow: {
        title: "It follows, never leads.",
        body:
          "You hold the pen. The AI only reacts to your approach. It never hijacks your reasoning with its own.",
      },
      doubt: {
        title: "It voices doubt, not diagnosis.",
        beforeLabel: "A tutor bot says",
        before: "“You forgot to carry the 2, which caused an error.”",
        afterLabel: "D-Friend says",
        after:
          "“Hmm, I tried solving it that way, but I got stuck right after the second step. Did we miss something?”",
      },
      safety: {
        title: "It lets you fail safely.",
        bodyPrefix: "Hit a wall three times? D-Friend initiates a ",
        bodyHighlight: "soft intervention",
        bodySuffix:
          ": it steps back, points you toward the next step without giving the answer away, and lets you choose how to proceed.",
      },
    },
    experience: {
      eyebrow: "The experience",
      title: "Stop memorizing. Start rewiring.",
      description:
        "Every concept is a two-session arc: build the foundation on your own, then master it beside your buddy.",
      sessionOne: {
        label: "Session 1",
        title: "The Foundation",
        body:
          "Self-paced discovery. You explore the definitions, formulas, and methods until you understand enough to tackle the basics.",
      },
      sessionTwo: {
        label: "Session 2",
        title: "The Mastery Arc",
        body:
          "You and your D-Friend sit down to solve exactly 4 problems, in a fixed order, each designed to rewire how you think.",
      },
      problems: [
        {
          tag: "P1",
          name: "The Warm-Up",
          role: "Reinforcement",
          desc: "Prove what you learned in Session 1.",
        },
        {
          tag: "P2",
          name: "The Push",
          role: "Challenge",
          desc: "Harder, heavier, but familiar. You sweat a little.",
        },
        {
          tag: "P3",
          name: "The Break",
          role: "Exploration",
          desc: "A non-standard curveball that breaks your old patterns and forces you to think differently.",
        },
        {
          tag: "P4",
          name: "The Build",
          role: "Extension",
          desc: "Apply the new pattern right away, and walk out with confidence that sticks.",
        },
      ],
    },
    coreEngine: {
      title: "The P-D-E-O loop keeps learning moving.",
      description:
        "Four steps, run in order, on every concept. The interesting part is the distance between step two and step three.",
      steps: [
        {
          letter: "P",
          word: "Problem",
          body: "You restate the problem in your own words. If you can't say what's being asked, that's the first thing to fix.",
        },
        {
          letter: "D",
          word: "Done",
          body: "You settle on a raw solution. Not polished, not verified — just a real idea of how you'd get there.",
        },
        {
          letter: "E",
          word: "Execute",
          body: "You actually carry out your own plan, step by step. This is where an idea meets the details it skipped.",
        },
        {
          letter: "O",
          word: "Optimize",
          body: "Whatever tripped you up becomes what you carry back to P. The loop restarts with a sharper question.",
        },
      ],
      gap: {
        label: "D → E",
        title: "Knowing how is not the same as doing it.",
        plannedLabel: "D — in your head",
        planned: "Just use the discriminant and solve for m. Easy.",
        realityLabel: "E — on the page",
        reality: "Wait, is it Δ > 0 or Δ ≥ 0 for two distinct roots?",
        body:
          "Most students stop at D and assume they understand. The plan sounds complete right up until you run it. That distance between a confident idea and a working solution is the whole point of the loop, and it's the part D-Friend refuses to let you skip.",
      },
      loop: "O sends you back to P with a sharper question, not a finished answer.",
    },
    progress: {
      eyebrow: "Momentum",
      title: "The progress bar that respects you",
      description:
        "Progress only moves when you take a shot and hit submit. Try it yourself:",
      progressLabel: "Your progress",
      rightCard: {
        title: "Get it right?",
        body: "A big leap forward.",
        gain: "+20%",
      },
      wrongCard: {
        title: "Get it wrong?",
        body: "You still step forward. You tried, and that counts.",
        gain: "+12%",
      },
      demo: {
        correct: "Submit a right answer",
        wrong: "Submit a wrong answer",
        reset: "Reset",
        done: "Concept mastered. That's the whole point.",
      },
      footnote:
        "D-Friend knows the difference between trying and guessing. Spamming answers pauses your progress. Honest mistakes build your foundation.",
    },
    teacher: {
      eyebrow: "Teacher Copilot",
      title: "Every session reports back to the teacher.",
      description:
        "The study buddy is one half of the loop. Teacher Copilot turns what students struggled with into the next lesson plan.",
      points: [
        {
          title: "Sees the whole class, not just scores.",
          body: "Concept-level insight: which misconceptions repeat, who transferred a new pattern, who quietly got stuck.",
        },
        {
          title: "Drafts targeted extra practice.",
          body: "Remedial and advanced sets are drafted for exactly the students who need them.",
        },
        {
          title: "Nothing reaches students unreviewed.",
          body: "Every AI draft stays private until the teacher reviews and publishes it.",
        },
      ],
      report: {
        title: "Class snapshot",
        averageLabel: "Class average",
        averageValue: "6.8",
        strugglingLabel: "Most common sticking point",
        strugglingValue: "Sign flips when isolating x (38% of class)",
        attentionLabel: "Worth a check-in",
        students: ["Gia Bảo", "Thu Hà", "Minh Khôi"],
        draft: "Extra practice drafted for 3 students",
        publish: "Review and publish",
      },
    },
    differentiation: {
      title: "More than a chat UI with a smarter prompt.",
      description:
        "Most AI study products stop at answer checking. D-Friend is built to interpret attempts and respond to where your thinking is actually going.",
      genericLabel: "Typical AI study tool",
      dfriendLabel: "D-Friend",
      genericPoints: [
        {
          title: "One reply tries to do everything.",
          body: "Feedback, diagnosis, and encouragement get blended together, so the product reacts to output instead of understanding the attempt.",
        },
        {
          title: "Wrong is treated as one category.",
          body: "A thoughtful mistake and a random guess receive the same kind of response, which makes the help feel generic fast.",
        },
        {
          title: "Progress is prompt-deep, not product-deep.",
          body: "State lives inside conversation context, so continuity gets fragile as sessions get longer or more complex.",
        },
      ],
      dfriendPoints: [
        {
          title: "Reasoning is separated from response.",
          body: "D-Friend first interprets the attempt, then decides how to help, so encouragement never replaces judgment.",
        },
        {
          title: "It distinguishes effort from drift.",
          body: "The system can tell when your method is promising, when your logic broke late, and when you stopped genuinely engaging.",
        },
        {
          title: "Progress has memory outside the model.",
          body: "Attempts, unlocks, and momentum are tracked as product state, so the learning arc stays consistent across sessions.",
        },
      ],
    },
    footer: {
      title: "Ready to change how you learn?",
      body: "The curriculum is set. The concepts are waiting. Your buddy is online.",
      brandLine: "Done > Perfect.",
      contactLabel: "Contact us:",
    },
  },
  vi: {
    metadata: {
      title: "D-Friend. Không phải giáo viên. Không phải gia sư. Người bạn học của bạn.",
      description:
        "D-Friend là AI bạn học xây trên tinh thần Done > Perfect. Nó học cùng con bạn, không bao giờ lộ đáp án, và báo cáo lại cho giáo viên.",
    },
    navigation: {
      brand: "D-Friend",
      sections: [
        { label: "Lời hứa", href: "#landing-philosophy" },
        { label: "Bạn học", href: "#landing-study-buddy" },
        { label: "Trải nghiệm", href: "#landing-experience" },
        { label: "Tiến độ", href: "#landing-progress" },
        { label: "Giáo viên", href: "#landing-teacher" },
      ],
    },
    hero: {
      headlinePre: "AI học ",
      headlineEmphasis: "cùng",
      headlinePost: " bạn.",
      subtext:
        "Không phải giáo viên. Không phải gia sư. Một người bạn học không bao giờ lộ đáp án và luôn ghi nhận mỗi lần bạn dám thử.",
      actions: {
        login: "Đăng nhập",
        register: "Dùng thử D-Friend",
      },
      pilot: {
        cta: "Tham gia chương trình thử nghiệm",
        submitting: "Đang gửi…",
        emailLabel: "Email",
        emailPlaceholder: "ban@example.com",
        hint: "Chúng tôi chỉ gửi email về chương trình thử nghiệm. Không spam.",
        success: "Cảm ơn bạn! Chúng tôi đã nhận được email và sẽ liên hệ sớm.",
        errorMissing: "Vui lòng nhập địa chỉ email của bạn.",
        errorEmail: "Địa chỉ email có vẻ chưa đúng.",
        errorGeneric: "Đã có lỗi xảy ra. Vui lòng thử lại, hoặc gửi mail tới hello@dfriend.online.",
      },
      chat: {
        problemLabel: "Bài 2 trên 4",
        problemText: "Tìm m để x² + 2x + m = 0 có hai nghiệm phân biệt.",
        studentName: "Bạn",
        buddyName: "D-Friend",
        messages: [
          { from: "student", text: "Mình cho Δ = 0 và ra m = 1." },
          {
            from: "buddy",
            text: "Hmm, mình cũng thử m = 1, nhưng lúc đó chỉ ra đúng một nghiệm. Đề bài cần hai nghiệm phân biệt mà nhỉ?",
          },
          { from: "student", text: "À đúng rồi, phải là Δ > 0. Vậy m < 1." },
          { from: "buddy", text: "Mình cũng ra đúng như vậy. Nộp thử luôn nhé?" },
        ],
        note: "D-Friend chỉ bày tỏ sự phân vân. Nó không bao giờ đưa sẵn đáp án.",
      },
    },
    philosophy: {
      title: "Hai chữ. Một lời hứa.",
      done: {
        label: "D",
        title: "Chữ “D” là viết tắt của Done.",
        subtitle: "Done > Perfect.",
        body:
          "Phần lớn nền tảng phạt bạn khi làm sai. Chúng tôi ghi nhận việc bạn dám làm. Ngay cả câu trả lời sai vẫn đẩy thanh tiến độ tiến lên, vì một sai lầm trung thực là một bước chủ động hướng tới sự thành thạo.",
      },
      friend: {
        label: "Friend",
        title: "Còn “Friend” thì đúng nghĩa là một người bạn.",
        subtitle: "Một người đồng hành, không phải người giảng bài.",
        body:
          "D-Friend không được lập trình để giảng bài. Nó đi theo nhịp của bạn, học cùng bạn, và không bao giờ nói kiểu bề trên. Khi bạn sai, nó không phán xét. Nó cùng bạn tháo gỡ.",
      },
    },
    studyBuddy: {
      title: "D-Friend thực sự suy nghĩ như thế nào",
      description:
        "Chúng tôi loại bỏ kiểu AI “biết tuốt như giáo viên”. D-Friend tương tác như người bạn cùng lớp mà bạn luôn mong có.",
      follow: {
        title: "Nó theo bạn, không dẫn dắt bạn.",
        body:
          "Bạn là người cầm bút. AI chỉ phản ứng theo cách bạn tiếp cận vấn đề. Nó không cướp lấy mạch suy nghĩ của bạn.",
      },
      doubt: {
        title: "Nó bày tỏ sự phân vân, không chẩn đoán lỗi sai.",
        beforeLabel: "Bot gia sư sẽ nói",
        before: "“Bạn quên nhớ số 2 nên phép tính bị sai.”",
        afterLabel: "D-Friend sẽ nói",
        after:
          "“Hmm, mình thử giải theo cách đó nhưng bị kẹt ngay sau bước thứ hai. Có phải mình bỏ sót điều gì không?”",
      },
      safety: {
        title: "Nó cho phép bạn thất bại một cách an toàn.",
        bodyPrefix: "Nếu bạn đụng tường ba lần, D-Friend sẽ kích hoạt ",
        bodyHighlight: "soft intervention",
        bodySuffix:
          ": nó lùi lại, chỉ cho bạn đúng hướng mà không làm lộ đáp án, và để bạn tự quyết định bước tiếp theo.",
      },
    },
    experience: {
      eyebrow: "Trải nghiệm",
      title: "Đừng học vẹt. Hãy tái cấu trúc tư duy.",
      description:
        "Mỗi khái niệm là một hành trình hai buổi: tự xây nền móng, rồi làm chủ nó bên cạnh người bạn học.",
      sessionOne: {
        label: "Buổi 1",
        title: "Nền móng",
        body:
          "Khám phá theo nhịp của bạn. Bạn đi qua định nghĩa, công thức và phương pháp cho đến khi hiểu đủ để xử lý phần cơ bản.",
      },
      sessionTwo: {
        label: "Buổi 2",
        title: "Hành trình làm chủ",
        body:
          "Bạn và D-Friend cùng ngồi xuống giải đúng 4 bài toán, theo đúng thứ tự, mỗi bài đều được thiết kế để thay đổi cách bạn tư duy.",
      },
      problems: [
        {
          tag: "P1",
          name: "Khởi động",
          role: "Củng cố",
          desc: "Chứng minh bạn đã nắm được gì từ Buổi 1.",
        },
        {
          tag: "P2",
          name: "Tăng nhiệt",
          role: "Thử thách",
          desc: "Khó hơn, nặng hơn, nhưng vẫn quen thuộc. Bạn bắt đầu phải căng não.",
        },
        {
          tag: "P3",
          name: "Phá khung",
          role: "Khám phá",
          desc: "Một cú bẻ lái không theo lối mòn, phá vỡ khuôn mẫu cũ và buộc bạn nghĩ theo cách khác.",
        },
        {
          tag: "P4",
          name: "Xây lại",
          role: "Mở rộng",
          desc: "Áp dụng ngay tư duy mới, và rời đi với sự tự tin vững chắc.",
        },
      ],
    },
    coreEngine: {
      title: "Vòng lặp P-D-E-O giữ việc học luôn tiến lên.",
      description:
        "Bốn bước, làm theo đúng thứ tự, cho mọi khái niệm. Phần thú vị nằm ở khoảng cách giữa bước hai và bước ba.",
      steps: [
        {
          letter: "P",
          word: "Problem",
          body: "Bạn đặt lại vấn đề bằng lời của mình. Nếu chưa nói được đề đang hỏi gì, thì đó là thứ cần sửa trước tiên.",
        },
        {
          letter: "D",
          word: "Done",
          body: "Bạn chốt một cách làm thô. Chưa gọn, chưa kiểm chứng — chỉ cần là một hướng đi thật của riêng bạn.",
        },
        {
          letter: "E",
          word: "Execute",
          body: "Bạn bắt tay làm thật theo đúng cách của mình, từng bước. Đây là lúc ý tưởng gặp những chi tiết nó đã bỏ qua.",
        },
        {
          letter: "O",
          word: "Optimize",
          body: "Chỗ vừa vấp trở thành thứ bạn mang ngược về P. Vòng lặp bắt đầu lại với một câu hỏi sắc hơn.",
        },
      ],
      gap: {
        label: "D → E",
        title: "Biết cách làm không đồng nghĩa với làm được.",
        plannedLabel: "D — trong đầu",
        planned: "Cứ tính delta rồi giải ra m thôi. Dễ mà.",
        realityLabel: "E — trên giấy",
        reality: "Khoan, hai nghiệm phân biệt thì Δ > 0 hay Δ ≥ 0 nhỉ?",
        body:
          "Phần lớn học sinh dừng ở D và tưởng mình đã hiểu. Kế hoạch nghe rất trọn vẹn, cho tới lúc bắt tay làm thật. Chính khoảng cách giữa một ý tưởng tự tin và một lời giải chạy được mới là điều vòng lặp này nhắm tới, và đó cũng là phần D-Friend không cho bạn bỏ qua.",
      },
      loop: "O đưa bạn quay lại P với một câu hỏi sắc hơn, chứ không phải một đáp án đã xong.",
    },
    progress: {
      eyebrow: "Động lượng",
      title: "Thanh tiến độ biết tôn trọng nỗ lực của bạn",
      description:
        "Tiến độ chỉ tăng khi bạn thực sự thử và bấm nộp bài. Hãy thử ngay:",
      progressLabel: "Tiến độ của bạn",
      rightCard: {
        title: "Làm đúng thì sao?",
        body: "Bạn tiến một bước rất lớn.",
        gain: "+20%",
      },
      wrongCard: {
        title: "Làm sai thì sao?",
        body: "Bạn vẫn tiến lên. Bạn đã thử, và điều đó có giá trị.",
        gain: "+12%",
      },
      demo: {
        correct: "Nộp đáp án đúng",
        wrong: "Nộp đáp án sai",
        reset: "Làm lại",
        done: "Đã làm chủ khái niệm. Đó chính là mục tiêu.",
      },
      footnote:
        "D-Friend biết phân biệt giữa cố gắng thật sự và đoán mò. Spam đáp án sẽ làm tiến độ tạm dừng. Những sai lầm trung thực sẽ xây nền móng cho bạn.",
    },
    teacher: {
      eyebrow: "Teacher Copilot",
      title: "Mỗi buổi học đều báo cáo lại cho giáo viên.",
      description:
        "Người bạn học chỉ là một nửa vòng lặp. Teacher Copilot biến những chỗ học sinh vướng thành kế hoạch cho buổi dạy tiếp theo.",
      points: [
        {
          title: "Nhìn thấy cả lớp, không chỉ điểm số.",
          body: "Insight theo từng khái niệm: lỗi sai nào lặp lại, ai đã bứt phá, ai đang âm thầm bị kẹt.",
        },
        {
          title: "Tự soạn bài luyện thêm đúng chỗ.",
          body: "Bài củng cố và nâng cao được soạn sẵn cho đúng những học sinh đang cần.",
        },
        {
          title: "Không gì đến học sinh mà chưa qua giáo viên.",
          body: "Mọi bản nháp AI đều ở chế độ riêng tư cho đến khi giáo viên duyệt và phát hành.",
        },
      ],
      report: {
        title: "Tổng quan lớp học",
        averageLabel: "Điểm trung bình lớp",
        averageValue: "6.8",
        strugglingLabel: "Điểm vướng phổ biến nhất",
        strugglingValue: "Sai dấu khi chuyển vế (38% của lớp)",
        attentionLabel: "Nên hỏi thăm",
        students: ["Gia Bảo", "Thu Hà", "Minh Khôi"],
        draft: "Đã soạn bài luyện thêm cho 3 học sinh",
        publish: "Duyệt và phát hành",
      },
    },
    differentiation: {
      title: "Không chỉ là chatbot học tập với prompt hay hơn.",
      description:
        "Phần lớn công cụ AI chỉ dừng ở việc chấm đúng sai. D-Friend được thiết kế để đọc nỗ lực và phản hồi theo hướng suy nghĩ thật sự của bạn.",
      genericLabel: "Công cụ AI học tập thông thường",
      dfriendLabel: "D-Friend",
      genericPoints: [
        {
          title: "Một câu trả lời gánh toàn bộ công việc.",
          body: "Phản hồi, chẩn đoán và động viên bị trộn vào cùng một lượt sinh nội dung, nên sản phẩm chỉ phản ứng với kết quả bề mặt.",
        },
        {
          title: "Sai bị xem như một loại duy nhất.",
          body: "Một lỗi có suy nghĩ và một cú đoán mò thường nhận cùng kiểu phản hồi, khiến trải nghiệm nhanh chóng trở nên chung chung.",
        },
        {
          title: "Tiến độ nằm trong prompt, không nằm trong sản phẩm.",
          body: "Trạng thái phụ thuộc vào ngữ cảnh hội thoại, nên càng học dài thì độ ổn định càng giảm.",
        },
      ],
      dfriendPoints: [
        {
          title: "Suy luận được tách khỏi phản hồi.",
          body: "D-Friend đọc nỗ lực trước rồi mới quyết định cách hỗ trợ, nên động viên không thay cho đánh giá.",
        },
        {
          title: "Phân biệt được cố gắng với lệch hướng.",
          body: "Hệ thống nhận ra khi phương pháp có tiềm năng, khi logic chỉ vỡ ở đoạn cuối, và khi bạn đã ngừng thật sự bám vào bài toán.",
        },
        {
          title: "Tiến độ có bộ nhớ nằm ngoài mô hình.",
          body: "Lần thử, mốc mở khóa và momentum được lưu như trạng thái sản phẩm, giúp hành trình học nhất quán qua nhiều buổi.",
        },
      ],
    },
    footer: {
      title: "Sẵn sàng thay đổi cách bạn học chưa?",
      body: "Lộ trình đã sẵn sàng. Các khái niệm đang chờ. Người bạn đồng hành của bạn đã online.",
      brandLine: "Done > Perfect.",
      contactLabel: "Liên hệ:",
    },
  },
};
