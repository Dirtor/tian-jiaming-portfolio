export const hero = {
  name: "Tian Jiaming / 田家铭",
  headline: "I turn AI ideas into real product systems.",
  subtitle: "把 AI 产品想法推进成真实可用的系统。",
  description:
    "I work across AI product strategy, classroom systems, automation workflows, and early-stage product validation.",
  tags: ["AI Products", "Agents", "Automation", "0 to 1"],
  email: "Dirtortian@outlook.com"
};

export const projects = [
  {
    title: "Cue.Room",
    label: "AI-native classroom system",
    href: "https://github.com/CUEAITECH/Cue.AI",
    description:
      "An AI classroom delivery system that brings live class workflow, realtime transcript, SOP guidance, SOS support, and post-class summaries into one teaching experience.",
    chinese:
      "面向教学场景的 AI-native 课堂系统，把开课、上课辅助、实时转写、课堂救场和课后交付放进同一个闭环。",
    meta: ["AI classroom", "Realtime transcript", "SOP / SOS", "Post-class delivery"],
    theme: "dark"
  },
  {
    title: "Cue.Hub",
    label: "AI project command center",
    href: "https://github.com/CUEAITECH/CUE.AI-Hub",
    description:
      "An internal AI delivery hub that connects project planning, task ownership, GitHub evidence, AI review, risk alerts, daily review, and WeCom workflows.",
    chinese:
      "面向团队研发交付的 AI 项目中枢，把任务、提交、审阅、风险、站会和企业微信提醒串成可追踪闭环。",
    meta: ["AI PM", "GitHub evidence", "Risk engine", "Team workflow"],
    theme: "light"
  }
] as const;

export const notes = [
  {
    title: "From AI idea to usable system",
    body: "Most AI classroom tools are demos. Cue.Room started as a one-sentence idea — 'what if the teacher had a co-pilot during class' — and took months of weekly iteration to become a system with live transcription, SOP guidance, SOS escalation, and post-class delivery. The gap between idea and usable is mostly a process design problem, not a technology problem.",
    chinese: "大多数 AI 课堂工具停留在演示阶段。Cue.Room 从一句话想法开始，经过数月迭代，才形成包含实时转写、SOP 引导、SOS 救场和课后交付的完整系统。从想法到可用系统，核心是流程设计问题，不是技术问题。"
  },
  {
    title: "Validating products before overbuilding",
    body: "At Mingshi Capital, I reviewed dozens of business plans where teams had spent 18 months building before talking to a single paying customer. The pattern is consistent: the products that worked started with a 30-minute manual workflow and only automated once the workflow was proven. Build the proof first, then the system.",
    chinese: "在明势资本做投资经理实习时，我看过很多商业计划书，团队在接触第一个付费用户之前已经做了 18 个月的开发。成功的产品往往从一个 30 分钟的人工流程开始，只在流程跑通后才做自动化。先验证，再搭系统。"
  },
  {
    title: "Useful agent workflows, not decorative automation",
    body: "At HSBC, the KYC / AML review process had six manual handoffs. We didn't replace the process with AI — we redesigned the template structure so 80% of standard cases could be triaged in one pass. Processing time dropped 30%. The lesson: automation that actually saves time usually looks boring. Automation that looks impressive usually doesn't change anything.",
    chinese: "在汇丰银行，KYC/AML 审核流程有六个人工交接节点。我们没有直接用 AI 替换流程，而是重新设计模板结构，让 80% 的标准案例可以一次完成分类，处理时间缩短了 30%。真正节省时间的自动化往往看起来平淡无奇；看起来很酷的自动化往往什么都没改变。"
  },
  {
    title: "Connecting finance, product, and technical execution",
    body: "Finance training teaches you to model uncertainty, not eliminate it. Product work teaches you to ship before certainty arrives. The combination turns out to be useful: I can read a cap table and a system architecture diagram in the same meeting, and know which one has the more dangerous assumption.",
    chinese: "金融训练教你对不确定性建模，而不是消除它。产品工作教你在确定性到来之前就交付。这两种思维的结合很实用：在同一次会议里，我可以同时看融资结构和系统架构图，并判断哪个假设更危险。"
  }
];

export const profile = {
  education: "Soochow University, B.A. in Economics, Finance, expected June 2027",
  highlights: [
    "GPA 3.70 / 4.0, rank 19 / 89; Soochow University Scholarship 2024 and 2025.",
    "CEO of 南京纳渡域界咨询有限公司, focused on AI education solutions and productized classroom support.",
    "Mingshi Capital quantitative analysis intern, researching enterprise services, AI infrastructure, AIGC, large models, AI chips, and fintech.",
    "HSBC Hong Kong risk management intern, covering credit risk analysis and KYC / AML workflow optimization.",
    "CITIC Securities wealth management intern, supporting market research and investment brief preparation.",
    "MCM / ICM Meritorious Winner, team lead."
  ],
  skills: ["Python", "Quant modeling", "C", "LaTeX", "Photoshop", "Mandarin", "Cantonese", "English IELTS 7.0"]
};
