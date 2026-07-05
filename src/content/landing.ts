export type LandingLocale = "en" | "vi";

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
    lines: string[];
    intro: {
      prefix: string;
      primary: string;
      secondary: string;
      suffix: string;
    };
    morph: {
      basePrimary: string;
      baseSecondary: string;
      logoPrimary: string;
      logoSecondary: string;
    };
    summary: {
      prefix: string;
      highlight: string;
      suffix: string;
    };
    actions: {
      login: string;
      register: string;
    };
    skipLabel: string;
    cta: string;
    scrollHint: string;
  };
  philosophy: {
    eyebrow: string;
    title: string;
    done: {
      label: string;
      title: string;
      subtitle: string;
      body: string;
      emphasis: string;
    };
    friend: {
      label: string;
      title: string;
      subtitle: string;
      body: string;
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
  differentiation: {
    eyebrow: string;
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
  coreEngine: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{
      letter: string;
      word: string;
      body: string;
    }>;
  };
  studyBuddy: {
    eyebrow: string;
    title: string;
    description: string;
    cards: [
      {
        title: string;
        body: string;
      },
      {
        title: string;
        before: string;
        after: string;
      },
      {
        title: string;
        bodyPrefix: string;
        bodyHighlight: string;
        bodySuffix: string;
      }
    ];
  };
  progress: {
    eyebrow: string;
    title: string;
    description: string;
    badge: string;
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
    footnote: string;
  };
  parents: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{
      title: string;
      body: string;
    }>;
    note: {
      title: string;
      body: string;
    };
  };
  footer: {
    title: string;
    body: string;
    cta: string;
    brandLine: string;
  };
};

export const landingCopy: Record<LandingLocale, LandingCopy> = {
  en: {
    metadata: {
      title: "D-Friend — Not a teacher. Not a tutor. Your study buddy.",
      description:
        "D-Friend is a new learning engine built on Done > Perfect. An AI peer that learns beside you and refactors how your mind handles hard concepts.",
    },
    navigation: {
      brand: "D-Friend",
      sections: [
        { label: "Promise", href: "#landing-philosophy" },
        { label: "Study Buddy", href: "#landing-study-buddy" },
        { label: "Experience", href: "#landing-experience" },
        { label: "Core Engine", href: "#landing-core-engine" },
        { label: "Difference", href: "#landing-differentiation" },
        { label: "Progress", href: "#landing-progress" },
        { label: "For Parents", href: "#landing-parents" },
      ],
    },
    hero: {
      lines: [
        "...stays up late with you.",
        "...doesn't judge when you get it wrong.",
        "...figures out the hard stuff right beside you.",
      ],
      intro: {
        prefix: "Everyone wants to have ",
        primary: " the ",
        secondary: " friend",
        suffix: " that",
      },
      morph: {
        basePrimary: "the",
        baseSecondary: "\u00A0friend",
        logoPrimary: "D",
        logoSecondary: "-Friend",
      },
      summary: {
        prefix: "Not a teacher. Not a tutor. ",
        highlight: "Your ultimate study buddy.",
        suffix:
          " A new learning engine designed to completely refactor how your mind processes difficult concepts.",
      },
      actions: {
        login: "Login",
        register: "Register",
      },
      skipLabel: "skip →",
      cta: "Meet Your D-Friend — Try the Demo",
      scrollHint: "scroll to meet your friend",
    },
    philosophy: {
      eyebrow: "What's in a name?",
      title: "Two letters. One promise.",
      done: {
        label: "D",
        title: "The \"D\" stands for Done.",
        subtitle: "Done > Perfect.",
        body:
          "Most platforms punish you for failing. We reward you for trying. Our core P-D-E-O engine (Problem → Done → Execute → Optimize) is built on the reality that completion matters more than perfection. Even an incorrect answer moves your progress bar forward — because a mistake is an active step toward mastery.",
        emphasis: "P-D-E-O engine",
      },
      friend: {
        label: "Friend",
        title: 'The "Friend" stands for, well, a Friend.',
        subtitle: "A peer, not a professor.",
        body:
          "Your D-Friend isn't programmed to lecture you. It's an AI designed to be your peer. It follows your lead, works alongside you, and never talks down to you. When you mess up, it doesn't judge — it simply figures it out with you.",
      },
    },
    experience: {
      eyebrow: "The experience",
      title: "Stop memorizing. Start rewiring.",
      description:
        "Learning isn't about cramming. It's about breaking old habits, building new mental models, and moving through a balanced two-session arc with D-Friend.",
      sessionOne: {
        label: "Session 1",
        title: "The Foundation",
        body:
          "Self-paced discovery. You explore the definitions, formulas, and methods until you understand enough to tackle the basics.",
      },
      sessionTwo: {
        label: "Session 2",
        title: "The Mastery Matrix",
        body:
          "You and your D-Friend sit down to solve exactly 4 precise problems, in order, each designed to rewire your brain.",
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
          desc:
            "A non-standard curveball that intentionally breaks your old patterns and forces you to think differently.",
        },
        {
          tag: "P4",
          name: "The Build",
          role: "Extension",
          desc:
            "Apply your newly refactored mindset to a final problem — walking away with unshakeable confidence.",
        },
      ],
    },
    differentiation: {
      eyebrow: "Why not just ChatGPT?",
      title: "Homework done isn't the same as learning done.",
      description:
        "Paste a problem into a generic chatbot and it hands back the solution. The homework gets finished — the learning never happens. D-Friend is built so the thinking always stays with the student.",
      genericLabel: "Generic AI chatbot",
      dfriendLabel: "D-Friend",
      genericPoints: [
        {
          title: "Gives the answer away.",
          body: "Paste the problem, copy the solution, move on. It feels productive — and teaches nothing.",
        },
        {
          title: "Treats every mistake the same.",
          body: "A thoughtful attempt and a wild guess get the same canned reply, so students quickly stop reading the feedback.",
        },
        {
          title: "Forgets you tomorrow.",
          body: "Every chat starts from zero. It has no idea what you struggled with last week or what you've already mastered.",
        },
      ],
      dfriendPoints: [
        {
          title: "Never gives the answer away.",
          body: "It asks the questions that help you find the mistake yourself — because the discovery you make on your own is the one that sticks.",
        },
        {
          title: "Reads the attempt, not just the answer.",
          body: "It can tell a promising method from a lucky guess, and responds to how you're actually thinking — push harder, steady a good idea, or step in gently.",
        },
        {
          title: "Remembers the whole journey.",
          body: "Attempts, breakthroughs, and progress carry across sessions, so every new session picks up exactly where the last one ended.",
        },
      ],
    },
    coreEngine: {
      eyebrow: "Core Engine",
      title: "The P-D-E-O loop keeps learning moving.",
      description:
        "Every interaction is shaped by a simple rule: progress should reward real effort. P-D-E-O turns that rule into a repeatable loop so each submission becomes useful, even when it is imperfect.",
      steps: [
        {
          letter: "P",
          word: "Problem",
          body: "You get a concrete challenge with enough friction to reveal how you currently think, not just what you remember.",
        },
        {
          letter: "D",
          word: "Done",
          body: "You commit to an attempt. Submission matters because movement starts when your thinking leaves your head and hits the page.",
        },
        {
          letter: "E",
          word: "Execute",
          body: "D-Friend evaluates the work by reading the approach and the answer separately, so it can respond to substance instead of surface.",
        },
        {
          letter: "O",
          word: "Optimize",
          body: "The next response is tuned to your actual state: push harder, stabilize a good method, or step in softly when you are spiraling.",
        },
      ],
    },
    studyBuddy: {
      eyebrow: "The study buddy model",
      title: "How your D-Friend actually thinks",
      description:
        "We stripped away the \"omniscient teacher\" AI. D-Friend interacts using a radically different approach.",
      cards: [
        {
          title: "It follows, never leads.",
          body:
            "You hold the pen. The AI only reacts to your approach — it never hijacks your reasoning with its own.",
        },
        {
          title: "It voices doubt, not diagnosis.",
          before: "\"You forgot to carry the 2, which caused an error.\"",
          after:
            "\"Hmm, I tried solving it that way, but I got stuck right after the second step… did we miss something?\"",
        },
        {
          title: "It lets you fail safely.",
          bodyPrefix: "Hit a wall three times? D-Friend initiates a ",
          bodyHighlight: "Soft Intervention",
          bodySuffix:
            " — it steps back, points you in the right direction without giving the answer away, and lets you choose how to proceed.",
        },
      ],
    },
    progress: {
      eyebrow: "Momentum",
      title: "The progress bar that respects you",
      description:
        "Your effort earns momentum. Progress only moves when you take a shot and hit submit.",
      badge: "Wrong answer — but you stepped forward",
      progressLabel: "Your progress",
      rightCard: {
        title: "Get it right?",
        body: "A huge leap forward.",
        gain: "+20%",
      },
      wrongCard: {
        title: "Get it wrong?",
        body: "You still step forward. You tried, and that counts.",
        gain: "+12%",
      },
      footnote:
        "D-Friend knows the difference between trying and guessing. Spamming answers pauses your progress — honest mistakes build your foundation.",
    },
    parents: {
      eyebrow: "For parents",
      title: "Built so you never have to wonder what's going on.",
      description:
        "D-Friend isn't a black box your child disappears into. It's designed to work with teachers, keep exercise quality under control, and show progress you can actually trust.",
      cards: [
        {
          title: "A teacher stays in the loop",
          body: "After every session, D-Friend's Teacher Copilot sends the teacher a clear report — what your child worked on, where they got stuck, and who needs help before falling behind.",
        },
        {
          title: "Exercises written by real teachers",
          body: "Every problem comes from a structured exercise bank built and continuously reviewed by educators. The AI composes from it — it never invents unverified content.",
        },
        {
          title: "Progress that reflects real effort",
          body: "The bar only moves on genuine attempts. Random guessing pauses it, so the progress you see means your child is actually doing the work.",
        },
      ],
      note: {
        title: "Built with schools, not around them",
        body: "D-Friend runs in real classrooms with real teachers. The lesson your child studies at home is the same one their teacher planned — one continuous journey, not another app on the side.",
      },
    },
    footer: {
      title: "Ready to change how you learn?",
      body: "The curriculum is set. The concepts are waiting. Your buddy is online.",
      cta: "Enter D-Friend",
      brandLine: "Done > Perfect.",
    },
  },
  vi: {
    metadata: {
      title: "D-Friend — Không phải giáo viên. Không phải gia sư. Người bạn học của bạn.",
      description:
        "D-Friend là một cỗ máy học tập mới được xây trên tinh thần Done > Perfect. Một AI đồng hành học cùng bạn và tái cấu trúc cách bạn xử lý những khái niệm khó.",
    },
    navigation: {
      brand: "D-Friend",
      sections: [
        { label: "Lời hứa", href: "#landing-philosophy" },
        { label: "Study Buddy", href: "#landing-study-buddy" },
        { label: "Trải nghiệm", href: "#landing-experience" },
        { label: "Core Engine", href: "#landing-core-engine" },
        { label: "Khác biệt", href: "#landing-differentiation" },
        { label: "Tiến độ", href: "#landing-progress" },
        { label: "Phụ huynh", href: "#landing-parents" },
      ],
    },
    hero: {
      lines: [
        "...thức khuya học cùng bạn.",
        "...không phán xét khi bạn làm sai.",
        "...cùng bạn gỡ những phần khó nhất.",
      ],
      intro: {
        prefix: "Ai cũng muốn có ",
        primary: "người",
        secondary: " bạn",
        suffix: " như vậy",
      },
      morph: {
        basePrimary: "người",
        baseSecondary: "\u00A0bạn",
        logoPrimary: "D",
        logoSecondary: "-Friend",
      },
      summary: {
        prefix: "Không phải giáo viên. Không phải gia sư. ",
        highlight: "Người bạn học đúng nghĩa của bạn.",
        suffix:
          " Một cỗ máy học tập mới được thiết kế để tái cấu trúc hoàn toàn cách não bạn xử lý những khái niệm khó.",
      },
      actions: {
        login: "Đăng nhập",
        register: "Đăng ký",
      },
      skipLabel: "bỏ qua →",
      cta: "Gặp D-Friend của bạn — Thử demo",
      scrollHint: "cuộn xuống để gặp người bạn này",
    },
    philosophy: {
      eyebrow: "Cái tên này có gì đặc biệt?",
      title: "Hai chữ. Một lời hứa.",
      done: {
        label: "D",
        title: 'Chữ "D" là viết tắt của Done.',
        subtitle: "Done > Perfect.",
        body:
          "Phần lớn nền tảng khiến bạn bị áp lực khi làm sai. Còn chúng tôi ghi nhận việc bạn dám làm. Cốt lõi P-D-E-O engine (Problem → Done → Execute → Optimize) của chúng tôi được xây trên sự thật rằng hoàn thành quan trọng hơn hoàn hảo. Ngay cả một câu trả lời sai vẫn đẩy thanh tiến độ của bạn tiến lên — vì sai lầm là một bước đi chủ động hướng tới sự thành thạo.",
        emphasis: "P-D-E-O engine",
      },
      friend: {
        label: "Friend",
        title: 'Còn "Friend" thì đúng nghĩa là một người bạn.',
        subtitle: "Một người đồng hành, không phải người giảng bài.",
        body:
          "D-Friend không được lập trình để đứng lớp và giảng cho bạn. Đây là một AI được thiết kế để làm bạn đồng hành. Nó đi theo nhịp của bạn, làm việc cùng bạn, và không bao giờ nói chuyện theo kiểu bề trên. Khi bạn sai, nó không phán xét — nó chỉ đơn giản cùng bạn tháo gỡ vấn đề.",
      },
    },
    experience: {
      eyebrow: "Trải nghiệm",
      title: "Đừng học vẹt. Hãy tái cấu trúc tư duy.",
      description:
        "Học không phải là nhồi nhét. Đó là phá bỏ thói quen cũ, xây mô hình tư duy mới và đi qua hành trình hai buổi cân bằng cùng D-Friend.",
      sessionOne: {
        label: "Buổi 1",
        title: "Nền móng",
        body:
          "Khám phá theo nhịp của bạn. Bạn đi qua định nghĩa, công thức và phương pháp cho đến khi hiểu đủ để xử lý phần cơ bản.",
      },
      sessionTwo: {
        label: "Buổi 2",
        title: "Ma trận làm chủ",
        body:
          "Bạn và D-Friend sẽ cùng ngồi xuống giải đúng 4 bài toán, theo đúng thứ tự, mỗi bài đều được thiết kế để tái cấu trúc não bộ của bạn.",
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
          desc:
            "Một cú bẻ lái không theo lối mòn, cố tình phá vỡ các khuôn mẫu cũ và buộc bạn phải nghĩ theo cách khác.",
        },
        {
          tag: "P4",
          name: "Xây lại",
          role: "Mở rộng",
          desc:
            "Áp dụng tư duy vừa được tái cấu trúc vào bài cuối cùng — và rời đi với sự tự tin vững chắc.",
        },
      ],
    },
    differentiation: {
      eyebrow: "Sao không dùng ChatGPT luôn?",
      title: "Làm xong bài tập không có nghĩa là đã học được.",
      description:
        "Dán đề bài vào một chatbot thông thường, nó sẽ đưa ngay lời giải. Bài tập thì xong — nhưng việc học chưa từng diễn ra. D-Friend được thiết kế để phần suy nghĩ luôn thuộc về học sinh.",
      genericLabel: "Chatbot AI thông thường",
      dfriendLabel: "D-Friend",
      genericPoints: [
        {
          title: "Đưa luôn đáp án.",
          body: "Dán đề, chép lời giải, làm bài tiếp. Cảm giác rất năng suất — nhưng không dạy được điều gì.",
        },
        {
          title: "Mọi lỗi sai đều bị xử lý giống nhau.",
          body: "Một lần thử nghiêm túc và một cú đoán bừa nhận cùng kiểu phản hồi rập khuôn, nên học sinh nhanh chóng bỏ qua phần nhận xét.",
        },
        {
          title: "Ngày mai là quên bạn ngay.",
          body: "Mỗi cuộc trò chuyện bắt đầu từ con số không. Nó không biết tuần trước bạn vướng ở đâu hay đã vững phần nào.",
        },
      ],
      dfriendPoints: [
        {
          title: "Không bao giờ đưa sẵn đáp án.",
          body: "Nó đặt những câu hỏi giúp bạn tự tìm ra lỗi sai của mình — vì điều bạn tự khám phá mới là điều ở lại lâu nhất.",
        },
        {
          title: "Đọc cách làm, không chỉ chấm đáp án.",
          body: "Nó phân biệt được một hướng đi tiềm năng với một cú đoán may mắn, và phản hồi theo đúng cách bạn đang tư duy — đẩy thêm, giữ vững, hoặc can thiệp nhẹ.",
        },
        {
          title: "Ghi nhớ cả hành trình.",
          body: "Lần thử, bước đột phá và tiến độ được giữ qua từng buổi học, nên buổi mới luôn bắt đầu đúng chỗ buổi trước dừng lại.",
        },
      ],
    },
    coreEngine: {
      eyebrow: "Core Engine",
      title: "Vòng lặp P-D-E-O giữ việc học luôn tiến lên.",
      description:
        "Mọi tương tác đều bám vào một nguyên tắc: nỗ lực thật phải được ghi nhận. P-D-E-O biến nguyên tắc đó thành một vòng lặp rõ ràng để mỗi lần nộp bài đều có giá trị, kể cả khi chưa đúng.",
      steps: [
        {
          letter: "P",
          word: "Problem",
          body: "Bạn nhận một thử thách đủ thật để lộ ra cách bạn đang tư duy, chứ không chỉ kiểm tra bạn còn nhớ gì.",
        },
        {
          letter: "D",
          word: "Done",
          body: "Bạn chốt một lần thử. Hành động nộp bài là điểm khởi đầu, vì tiến bộ chỉ bắt đầu khi suy nghĩ được đặt xuống rõ ràng.",
        },
        {
          letter: "E",
          word: "Execute",
          body: "D-Friend đánh giá cách làm và đáp án như hai tín hiệu riêng, để phản hồi vào bản chất thay vì chỉ nhìn bề mặt.",
        },
        {
          letter: "O",
          word: "Optimize",
          body: "Phản hồi tiếp theo được chỉnh theo trạng thái thật của bạn: đẩy thêm, giữ vững cách làm đúng, hoặc can thiệp nhẹ khi bạn bắt đầu loay hoay.",
        },
      ],
    },
    studyBuddy: {
      eyebrow: "Mô hình bạn học đồng hành",
      title: "D-Friend thực sự suy nghĩ như thế nào",
      description:
        "Chúng tôi loại bỏ kiểu AI \"biết tuốt như giáo viên\". D-Friend tương tác theo một cách tiếp cận hoàn toàn khác.",
      cards: [
        {
          title: "Nó theo bạn, không dẫn dắt bạn.",
          body:
            "Bạn là người cầm bút. AI chỉ phản ứng theo cách bạn tiếp cận vấn đề — nó không cướp lấy mạch suy nghĩ của bạn bằng đáp án của riêng nó.",
        },
        {
          title: "Nó bày tỏ sự phân vân, không chẩn đoán lỗi sai.",
          before: '"Bạn quên nhớ số 2 nên phép tính bị sai."',
          after:
            '"Hmm, mình thử giải theo cách đó nhưng bị kẹt ngay sau bước thứ hai… có phải mình đã bỏ sót điều gì không?"',
        },
        {
          title: "Nó cho phép bạn thất bại một cách an toàn.",
          bodyPrefix: "Nếu bạn đụng tường ba lần, D-Friend sẽ kích hoạt ",
          bodyHighlight: "Soft Intervention",
          bodySuffix:
            " — nó lùi lại, chỉ cho bạn đúng hướng mà không làm lộ đáp án, và để bạn tự quyết định bước tiếp theo.",
        },
      ],
    },
    progress: {
      eyebrow: "Động lượng",
      title: "Thanh tiến độ biết tôn trọng nỗ lực của bạn",
      description:
        "Nỗ lực của bạn tạo ra động lượng. Tiến độ chỉ tăng khi bạn thực sự thử và bấm nộp bài.",
      badge: "Sai đáp án — nhưng bạn vẫn tiến lên",
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
      footnote:
        "D-Friend biết phân biệt giữa cố gắng thật sự và đoán mò. Spam đáp án sẽ làm tiến độ tạm dừng — còn những sai lầm trung thực sẽ xây nền móng cho bạn.",
    },
    parents: {
      eyebrow: "Dành cho phụ huynh",
      title: "Được thiết kế để bạn không bao giờ phải đoán con đang học gì.",
      description:
        "D-Friend không phải một chiếc hộp đen mà con bạn biến mất vào trong đó. Nó được xây để làm việc cùng giáo viên, kiểm soát chất lượng bài tập, và cho bạn thấy tiến độ thật sự đáng tin.",
      cards: [
        {
          title: "Luôn có giáo viên đồng hành",
          body: "Sau mỗi buổi học, Teacher Copilot của D-Friend gửi cho giáo viên một báo cáo rõ ràng — con bạn đã học gì, vướng ở đâu, và em nào cần hỗ trợ trước khi bị tụt lại.",
        },
        {
          title: "Bài tập do giáo viên thật biên soạn",
          body: "Mọi bài toán đều đến từ ngân hàng bài tập được xây dựng theo cấu trúc chuẩn và được đội ngũ chuyên môn rà soát liên tục. AI chỉ tổ hợp từ đó — không bao giờ tự bịa nội dung chưa kiểm chứng.",
        },
        {
          title: "Tiến độ phản ánh nỗ lực thật",
          body: "Thanh tiến độ chỉ tăng khi con thực sự làm bài. Đoán bừa sẽ khiến nó tạm dừng — nên tiến độ bạn nhìn thấy nghĩa là con đang học thật.",
        },
      ],
      note: {
        title: "Xây cùng nhà trường, không đi vòng qua nhà trường",
        body: "D-Friend đang chạy trong những lớp học thật với giáo viên thật. Bài con học ở nhà chính là bài giáo viên đã soạn trên lớp — một hành trình liền mạch, không phải thêm một ứng dụng bên lề.",
      },
    },
    footer: {
      title: "Sẵn sàng thay đổi cách bạn học chưa?",
      body: "Lộ trình đã sẵn sàng. Các khái niệm đang chờ. Người bạn đồng hành của bạn đã online.",
      cta: "Vào D-Friend",
      brandLine: "Done > Perfect.",
    },
  },
};
