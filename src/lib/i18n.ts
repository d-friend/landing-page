// All visible copy, one object per language. `/` serves vi, `/en` serves en (see src/app).
export type Lang = "vi" | "en";

const vi = {
  htmlLang: "vi",
  ogLocale: "vi_VN",
  title: "D-Friend · Học bằng cách tự thử",
  description: "Gõ bài bạn đang kẹt. Patch gợi ý từng bước và dựng mô phỏng để bạn tự thử.",
  ogAlt: "D-Friend: Patch và mô phỏng con lắc kép",
  switchLabel: "English",
  switchHref: "/en",
  decimal: ",",

  hero: {
    navLabel: "Chính",
    nav: { how: "Cách học", play: "Chơi thử", subjects: "Môn học", teachers: "Giáo viên", enter: "Vào học" },
    words: ["Chán", "cách", "học", "thông", "thường?"],
    punch: "Thử cách này đi.",
    scraps: ["F = ma = ?? (trang 47)", "học thuộc!!!", "v = √(gR) ?", "Kiểm tra 15 phút"],
    lead: ["Gõ bài bạn đang kẹt. ", "Patch", " gợi ý từng bước và dựng mô phỏng để bạn tự thử."],
    free: "Miễn phí. Bài đầu tiên không cần đăng nhập.",
    orTry: "Hoặc thử bài mẫu:",
    samples: [
      { label: "Con lắc kép", problem: "Vì sao con lắc kép chuyển động lung tung vậy? Thả hai con lắc lệch nhau 0,001 rad thì chuyển động khác nhau thế nào?" },
      { label: "Ném xiên", problem: "Ném quả bóng với vận tốc 20 m/s, nghiêng 45° so với mặt đất. Bóng bay xa bao nhiêu mét?" },
      { label: "Tàu lượn qua vòng", problem: "Tàu lượn thả từ độ cao 30 m, qua vòng xoắn bán kính 10 m. Tàu có qua được vòng không?" },
    ],
    windowTag: "Vật lý · Con lắc kép",
    bubble: "Thả gần như y hệt, sao lại tách nhau?",
  },

  ask: {
    placeholders: [
      "Vì sao con lắc kép chuyển động lung tung vậy?",
      "Ném bóng 20 m/s, góc 45° thì bay xa bao nhiêu?",
      "Vẽ đồ thị y = x² − 4x + 3 giúp mình",
    ],
    heroLabel: "Đề bài bạn đang kẹt",
    endLabel: "Đề bài bạn đang làm",
    endPlaceholder: "Dán đề bài bạn đang làm…",
    submit: "Giải bài này",
  },

  band: {
    label: "Những câu hỏi nếu thì sao bạn có thể hỏi",
    questions: ["Nếu vòng xoắn to hơn thì sao?", "Nếu thả trên Mặt Trăng?", "Nếu dây con lắc dài gấp đôi?", "Nếu a âm thì parabol ra sao?"],
  },

  steps: {
    heading: "Patch không giải hộ. Patch học cùng bạn.",
    sub: "Ví dụ với một bài ném xiên. Bạn luôn là người làm, Patch chỉ gợi ý đúng chỗ bạn kẹt.",
    groupLabel: "Ba bước học",
    list: [
      { title: "Giải bài", desc: "Bạn tự làm từng bước. Sai ở đâu, Patch gợi ý đúng chỗ đó." },
      { title: "Hiểu cách làm", desc: "Mỗi công thức đi kèm hình chuyển động, để thấy vì sao nó đúng." },
      { title: "Khám phá", desc: "Hỏi “nếu… thì sao?”, mô phỏng đổi theo ngay." },
    ],
    solve: {
      problemLabel: "Đề bài",
      problem: "Ném quả bóng với vận tốc 20 m/s, nghiêng 45° so với mặt đất. Bóng bay xa bao nhiêu mét?",
      step1: "Bước 1",
      step2: "Bước 2",
      correct: "Đúng",
      flightTime: "Thời gian bay t =",
      hint: "Gợi ý: lúc bóng chạm đất, độ cao của nó bằng bao nhiêu?",
    },
    understand: {
      aria: "Quả bóng bay theo đường parabol, vận tốc tách thành hai thành phần: ngang không đổi, đứng đổi dần",
      items: ["Phương ngang: bay đều, không đổi tốc độ", "Phương đứng: lên chậm dần, rơi nhanh dần", "Ghép hai chuyển động lại thành parabol"],
    },
    explore: {
      ask: "Nếu ném trên Mặt Trăng thì sao?",
      aria: "Cùng một cú ném: trên Trái Đất bóng bay 41 m, trên Mặt Trăng bay 247 m",
      earth: "Trái Đất",
      moonTag: "Mặt Trăng: 247 m, xa gấp 6!",
      caption: "Cùng một cú ném. Trọng lực yếu hơn 6 lần nên bóng bay xa hơn 6 lần. Patch dựng lại đúng cảnh bạn hỏi.",
    },
  },

  play: {
    heading: "Chơi thử: tàu có qua được vòng không?",
    sub: "Mô phỏng chạy thật ngay trên trang này. Kéo độ cao, đổi bán kính, hoặc bấm một câu hỏi. Trong D-Friend, bạn hỏi gì Patch cũng sửa mô phỏng theo.",
    status: { running: "Đang chạy", pass: "Qua được vòng", detach: "Rơi khỏi vòng", slide: "Không lên nổi" },
    initialAsk: "Thả từ 30 m, vòng bán kính 10 m thì tàu có qua không?",
    thinking: "Để xem nào…",
    detach: (y: string, need: string) => `Tàu rơi ở độ cao ${y} m vì chạy chậm quá, đường ray hết đỡ được. Muốn qua thì thả cao hơn vạch xanh: 2,5R = ${need} m.`,
    slide: "Thả thấp quá, tàu không đủ sức lên nửa vòng nên trượt ngược về.",
    pass: (v: string) => `Qua rồi! Ở đỉnh vòng tàu còn chạy ${v} m/s. Thử kéo bán kính to dần xem lúc nào thì rơi.`,
    moonNote: " Trên Mặt Trăng tàu chạy chậm hẳn, nhưng qua hay rơi vẫn y như trên Trái Đất.",
    fricNote: " Có ma sát nên phải thả cao hơn vạch 2,5R một chút.",
    chips: {
      bigger: "Nếu vòng xoắn to hơn?", biggerQ: "Nếu vòng xoắn to hơn thì sao?",
      fric: "Thêm ma sát vào", fricOn: "Nếu có ma sát thì sao?", fricOff: "Bỏ ma sát đi.",
      moon: "Thả trên Mặt Trăng", moonOn: "Nếu thả trên Mặt Trăng thì sao?", moonOff: "Quay về Trái Đất.",
      reset: "Đặt lại", resetQ: "Đặt lại như ban đầu.",
    },
    speed: "Tốc độ",
    height: "Độ cao",
    moonG: "1,62 (Mặt Trăng, tua nhanh ×2)",
    need: "Qua vòng khi thả cao ≥ 2,5R =",
    aria: (h: number, r: number, status: string) => `Mô phỏng tàu lượn: thả từ ${h} m, vòng bán kính ${r} m. ${status}`,
    dropHeight: "Độ cao thả",
    loopRadius: "Bán kính vòng",
    dropQ: (h: string) => `Thả từ ${h} m thì sao?`,
    radiusQ: (r: string) => `Vòng bán kính ${r} m thì sao?`,
    replay: "Thả lại",
    askPatch: "Bấm để hỏi Patch",
  },

  pendulum: {
    aria: "Hai con lắc kép thả gần như giống hệt nhau nhưng chuyển động tách nhau ra",
    offset: "Thả lệch nhau ",
    rod: " (dây 1 m)",
    apart: ", hai quả cách nhau ",
  },

  subjects: {
    heading: "Không chỉ có Vật lý.",
    sub: "Có sẵn mô phỏng cho Toán, Lý, Hóa và Thiên văn. Bài nào chưa có, Patch dựng mới cho bạn.",
    tryAsk: "Thử hỏi: ",
    solar: { tag: "Thiên văn", name: "Hệ Mặt Trời", q: "Trái Đất xa Mặt Trời gấp đôi thì một năm dài bao lâu?" },
    pendulum: { tag: "Vật lý", name: "Con lắc đơn", q: "Dây dài gấp đôi thì dao động chậm đi bao nhiêu?" },
    graph: { tag: "Toán", name: "Đồ thị hàm số", q: "Đổi dấu a thì parabol quay về phía nào?" },
    water: { tag: "Hóa học", name: "Phân tử nước", q: "Sao phân tử nước lại cong chứ không thẳng?" },
    geometry: { tag: "Toán", name: "Hình học", q: "Kéo một đỉnh đi, tổng ba góc có đổi không?" },
  },

  video: {
    heading: "Xem một buổi học trong 30 giây.",
    sub: "Từ lúc gõ đề bài tàu lượn, tới lúc tự hỏi “nếu vòng xoắn to hơn thì sao?”.",
    src: "/demo-vi.mp4",
    poster: "/demo-vi-poster.jpg",
  },

  teachers: {
    heading: "Bạn là giáo viên?",
    sub: "Sắp có: sau mỗi buổi học, bạn nhận báo cáo cả lớp kẹt ở bước nào để biết nên giảng lại phần gì.",
    emailLabel: "Email của bạn",
    emailPlaceholder: "email@truong.edu.vn",
    submit: "Báo tôi khi có",
    mailSubject: "Giáo viên muốn dùng D-Friend",
    mailBody: (email: string) => `Mình là giáo viên và muốn được báo khi D-Friend có báo cáo cho lớp.\nEmail của mình: ${email}`,
    sentBefore: "Đã mở email của bạn. Nếu không thấy, gửi thẳng tới ",
    sentAfter: ".",
  },

  finalCta: { line1a: "Đừng chỉ ", line1b: "ghi nhớ.", line2a: "Hãy ", line2b: "khám phá." },

  footer: { teachers: "Giáo viên", contact: "Liên hệ" },
};

const en: typeof vi = {
  htmlLang: "en",
  ogLocale: "en_US",
  title: "D-Friend · Learn by trying it",
  description: "Type the problem you're stuck on. Patch hints one step at a time and builds a simulation so you can try it yourself.",
  ogAlt: "D-Friend: Patch and a double pendulum simulation",
  switchLabel: "Tiếng Việt",
  switchHref: "/?l=vi",
  decimal: ".",

  hero: {
    navLabel: "Main",
    nav: { how: "How it works", play: "Try it", subjects: "Subjects", teachers: "Teachers", enter: "Start learning" },
    words: ["Bored", "of", "studying?"],
    punch: "Try this instead.",
    scraps: ["F = ma = ?? (page 47)", "memorize it!!!", "v = √(gR) ?", "15-minute quiz"],
    lead: ["Type the problem you're stuck on. ", "Patch", " hints one step at a time and builds a simulation so you can try it yourself."],
    free: "Free. No sign-in for your first problem.",
    orTry: "Or try a sample:",
    samples: [
      { label: "Double pendulum", problem: "Why does a double pendulum move so chaotically? If I release two pendulums 0.001 rad apart, how do their motions differ?" },
      { label: "Projectile", problem: "A ball is thrown at 20 m/s, 45° above the ground. How far does it travel, in metres?" },
      { label: "Loop-the-loop", problem: "A roller coaster cart is released from a height of 30 m and enters a loop of radius 10 m. Does the cart make it around the loop?" },
    ],
    windowTag: "Physics · Double pendulum",
    bubble: "Released almost identically, so why do they split apart?",
  },

  ask: {
    placeholders: [
      "Why does a double pendulum move so chaotically?",
      "A ball thrown at 20 m/s, 45°: how far does it go?",
      "Graph y = x² − 4x + 3 for me",
    ],
    heroLabel: "The problem you're stuck on",
    endLabel: "The problem you're working on",
    endPlaceholder: "Paste the problem you're working on…",
    submit: "Solve this",
  },

  band: {
    label: "What-if questions you can ask",
    questions: ["What if the loop were bigger?", "What if you dropped it on the Moon?", "What if the pendulum string were twice as long?", "What if a is negative?"],
  },

  steps: {
    heading: "Patch doesn't solve it for you. Patch learns with you.",
    sub: "Here's a projectile problem. You always do the work; Patch only hints at the exact spot you're stuck.",
    groupLabel: "Three learning steps",
    list: [
      { title: "Solve", desc: "You work through each step. Wherever you slip, Patch hints at that exact spot." },
      { title: "Understand", desc: "Every formula comes with motion you can see, so you see why it's true." },
      { title: "Explore", desc: "Ask “what if…?” and the simulation changes right away." },
    ],
    solve: {
      problemLabel: "Problem",
      problem: "A ball is thrown at 20 m/s, 45° above the ground. How far does it travel, in metres?",
      step1: "Step 1",
      step2: "Step 2",
      correct: "Correct",
      flightTime: "Flight time t =",
      hint: "Hint: when the ball hits the ground, what is its height?",
    },
    understand: {
      aria: "A ball follows a parabola; its velocity splits into two parts: horizontal stays constant, vertical keeps changing",
      items: ["Horizontal: steady, the speed never changes", "Vertical: slows on the way up, speeds up on the way down", "Combine the two motions and you get a parabola"],
    },
    explore: {
      ask: "What if I throw it on the Moon?",
      aria: "The same throw: on Earth the ball travels 41 m, on the Moon 247 m",
      earth: "Earth",
      moonTag: "Moon: 247 m, 6× farther!",
      caption: "Same throw. Gravity is 6× weaker, so the ball goes 6× farther. Patch rebuilds exactly the scene you asked about.",
    },
  },

  play: {
    heading: "Try it: does the cart make it around the loop?",
    sub: "A real simulation, running right on this page. Drag the height, change the radius, or tap a question. In D-Friend, whatever you ask, Patch changes the simulation to match.",
    status: { running: "Running", pass: "Made the loop", detach: "Fell off the loop", slide: "Can't climb it" },
    initialAsk: "Released from 30 m with a 10 m loop radius: does the cart make it?",
    thinking: "Let me see…",
    detach: (y: string, need: string) => `The cart fell off at a height of ${y} m: it was too slow and the track stopped holding it. To make it, release above the blue line: 2.5R = ${need} m.`,
    slide: "Released too low: the cart can't climb the half loop, so it slides back.",
    pass: (v: string) => `Made it! At the top of the loop the cart is still moving at ${v} m/s. Try making the radius bigger and see when it falls.`,
    moonNote: " On the Moon the cart runs much slower, but whether it makes it or falls is the same as on Earth.",
    fricNote: " With friction you need to release a bit higher than the 2.5R line.",
    chips: {
      bigger: "What if the loop is bigger?", biggerQ: "What if the loop were bigger?",
      fric: "Add friction", fricOn: "What if there's friction?", fricOff: "Remove the friction.",
      moon: "Drop on the Moon", moonOn: "What if I drop it on the Moon?", moonOff: "Back to Earth.",
      reset: "Reset", resetQ: "Reset to the start.",
    },
    speed: "Speed",
    height: "Height",
    moonG: "1.62 (Moon, fast-forward ×2)",
    need: "Makes the loop when released at ≥ 2.5R =",
    aria: (h: number, r: number, status: string) => `Roller coaster simulation: released from ${h} m, loop radius ${r} m. ${status}`,
    dropHeight: "Release height",
    loopRadius: "Loop radius",
    dropQ: (h: string) => `What if I release it from ${h} m?`,
    radiusQ: (r: string) => `What about a loop radius of ${r} m?`,
    replay: "Release again",
    askPatch: "Tap to ask Patch",
  },

  pendulum: {
    aria: "Two double pendulums released almost identically, but their motions drift apart",
    offset: "Released ",
    rod: " apart (1 m string)",
    apart: ", the two bobs are ",
  },

  subjects: {
    heading: "Not just Physics.",
    sub: "Ready-made simulations for Math, Physics, Chemistry and Astronomy. If there isn't one for your problem, Patch builds it.",
    tryAsk: "Try asking: ",
    solar: { tag: "Astronomy", name: "The Solar System", q: "If Earth were twice as far from the Sun, how long would a year be?" },
    pendulum: { tag: "Physics", name: "Simple pendulum", q: "If the string is twice as long, how much slower does it swing?" },
    graph: { tag: "Math", name: "Function graphs", q: "If I flip the sign of a, which way does the parabola open?" },
    water: { tag: "Chemistry", name: "Water molecule", q: "Why is a water molecule bent instead of straight?" },
    geometry: { tag: "Math", name: "Geometry", q: "If I drag a vertex, does the sum of the three angles change?" },
  },

  video: {
    heading: "Watch a lesson in 30 seconds.",
    sub: "From typing the roller coaster problem to asking “what if the loop were bigger?” yourself.",
    src: "/demo-en.mp4",
    poster: "/demo-en-poster.jpg",
  },

  teachers: {
    heading: "Are you a teacher?",
    sub: "Coming soon: after each lesson, a report on which step your whole class got stuck on, so you know what to teach again.",
    emailLabel: "Your email",
    emailPlaceholder: "you@school.edu",
    submit: "Notify me",
    mailSubject: "Teacher interested in D-Friend",
    mailBody: (email: string) => `I'm a teacher and I'd like to be notified when D-Friend has class reports.\nMy email: ${email}`,
    sentBefore: "Your email app should have opened. If not, write to ",
    sentAfter: " directly.",
  },

  finalCta: { line1a: "Stop ", line1b: "memorizing.", line2a: "Start ", line2b: "exploring." },

  footer: { teachers: "Teachers", contact: "Contact" },
};

export const dict: Record<Lang, typeof vi> = { vi, en };
