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
  "From AI idea to usable system",
  "Validating products before overbuilding",
  "Useful agent workflows, not decorative automation",
  "Connecting finance, product, and technical execution"
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
