export const hero = {
  name: "Tian Jiaming / 田家铭",
  subtitle: "把 AI 产品想法推进成真实可用的系统。",
  subtitleEn: "Turning AI product ideas into real, usable systems.",
  description:
    "I work across AI product strategy, classroom systems, automation workflows, and early-stage product validation.",
  descriptionZh:
    "我的工作横跨 AI 产品战略、课堂系统、自动化工作流和早期产品验证。",
  tags: ["AI Products", "Agents", "Automation", "0 to 1"],
  tagsZh: ["AI 产品", "智能体", "自动化", "从零到一"],
  email: "Dirtortian@outlook.com"
};

export const proofSignals = [
  {
    value: "10+",
    label: "teachers using Cue.Room",
    labelZh: "位老师正在使用 Cue.Room",
    detail: "AI-native classroom system in real teaching workflows",
    detailZh: "AI-native 课堂系统进入真实教学流程"
  },
  {
    value: "~100",
    label: "classroom sessions supported",
    labelZh: "场课堂支持",
    detail: "around 100 classroom sessions supported",
    detailZh: "已支持约 100 场课堂"
  },
  {
    value: "2",
    label: "parallel CEO roles",
    labelZh: "个并行 CEO 项目",
    detail: "CEO of OmniNexus and CEO of Cue.AI as separate parallel projects",
    detailZh: "OmniNexus 与 Cue.AI 是两个并行项目，均由我担任 CEO"
  },
  {
    value: "SSCI Q2",
    label: "accepted paper",
    labelZh: "论文已录用",
    detail: "SSCI Q2 accepted paper on climate risk and insurance markets",
    detailZh: "SSCI Q2 论文《极端天气事件对全球保险市场的影响：风险管理和赔偿成本的经济分析》已录用"
  }
] as const;

export const projects = [
  {
    title: "Cue.Room",
    label: "AI-native classroom system",
    labelZh: "AI 原生课堂系统",
    role: "Founder / Product Lead",
    roleZh: "创始人 / 产品负责人",
    stage: "Demo · partner + financing conversations",
    stageZh: "Demo · 合作方与融资交流",
    href: "https://github.com/CUEAITECH/Cue.AI",
    description:
      "Cue.Room is an AI-native classroom system currently used by 10+ teachers across around 100 classroom sessions.",
    chinese:
      "Cue.Room 是面向真实课堂流程的 AI-native 课堂系统，目前已有 10+ 位老师使用，支持约 100 场课堂。",
    contribution:
      "I led product design, requirements, prototyping, development coordination, client communication, fundraising materials, and team management.",
    contributionZh:
      "我全面负责产品设计、需求定义、原型、开发协调、客户沟通、融资材料和团队管理。",
    system:
      "The system connects class creation, audio/video, real-time transcription, SOP guidance, SOS support, and post-class summaries into one teaching workflow.",
    systemZh:
      "系统把开课、音视频、实时转写、SOP、SOS 和课后总结串成一个完整教学闭环。",
    evidence: ["10+ teachers", "around 100 classroom sessions", "public deployment: Cueai.top"],
    evidenceZh: ["10+ 位老师", "约 100 场课堂", "公开部署：Cueai.top"],
    links: [
      { label: "Cueai.top", href: "https://Cueai.top" },
      { label: "GitHub", href: "https://github.com/CUEAITECH/Cue.AI" }
    ],
    meta: ["AI classroom", "Realtime transcript", "SOP / SOS", "Post-class delivery"],
    theme: "dark"
  },
  {
    title: "Cue.Hub",
    label: "AI team operating system",
    labelZh: "AI 团队操作系统",
    role: "CEO / Product Owner",
    roleZh: "CEO / 产品负责人",
    stage: "Internal use · AI-native Linear / Jira",
    stageZh: "内部使用 · 对标 AI-native Linear / Jira",
    href: "https://github.com/CUEAITECH/CUE.AI-Hub",
    description:
      "Cue.Hub is our internal AI team operating system, deployed at hub.cueai.top.",
    chinese:
      "Cue.Hub 是团队内部正在使用的 AI 团队操作系统，部署于 hub.cueai.top。",
    contribution:
      "I designed it as the operating layer behind AI product delivery, connecting team tasks, evidence, reviews, and communication.",
    contributionZh:
      "我把它设计为 AI 产品交付背后的操作层，用来连接团队任务、证据、审阅和沟通。",
    system:
      "It connects GitHub evidence, WeCom workflows, task flow, AI review, daily review, and evening review into one operating layer.",
    systemZh:
      "它把 GitHub 证据、企业微信流程、任务流、AI review、日报和晚评连接在一起。",
    evidence: ["internal team use", "public deployment: hub.cueai.top", "GitHub + WeCom + AI review"],
    evidenceZh: ["团队内部使用", "公开部署：hub.cueai.top", "GitHub + 企业微信 + AI review"],
    links: [
      { label: "hub.cueai.top", href: "https://hub.cueai.top" },
      { label: "GitHub", href: "https://github.com/CUEAITECH/CUE.AI-Hub" }
    ],
    meta: ["AI PM", "GitHub evidence", "WeCom workflow", "Team OS"],
    theme: "light"
  }
] as const;

export const workPrinciples = [
  {
    principle: "Validate before overbuilding",
    principleZh: "先验证，再构建",
    example:
      "Cue.Room moved from demo to classroom usage by focusing on the actual teacher workflow first: class creation, live support, rescue, and after-class delivery.",
    exampleZh:
      "Cue.Room 从 Demo 走向课堂使用，靠的不是先堆功能，而是优先跑通老师真实上课流程：开课、直播支持、课堂救场和课后交付。",
    takeaway:
      "AI products become real when they survive the workflow, not when the demo looks impressive.",
    takeawayZh:
      "AI 产品真正成立，是因为它能扛住真实流程，而不是因为演示看起来很酷。"
  },
  {
    principle: "Build systems around real workflows",
    principleZh: "围绕真实流程搭系统",
    example:
      "Cue.Hub was built for the team's own delivery workflow, connecting GitHub, WeCom, task flow, AI review, daily review, and evening review instead of becoming another detached dashboard.",
    exampleZh:
      "Cue.Hub 服务团队自己的交付流程，把 GitHub、企业微信、任务流、AI review、日报和晚评接起来，而不是做一个脱离工作的看板。",
    takeaway:
      "Useful automation usually looks like fewer handoffs and clearer ownership.",
    takeawayZh:
      "真正有用的自动化，通常体现为更少交接和更清楚的责任。"
  },
  {
    principle: "Connect product, finance, and technical execution",
    principleZh: "连接产品、金融和技术执行",
    example:
      "Finance training helps me model uncertainty; product work pushes me to ship before certainty arrives. That combination shapes how I judge both cap tables and system architecture.",
    exampleZh:
      "金融训练让我习惯对不确定性建模，产品工作让我在确定性到来前先交付。这种组合会影响我同时判断融资结构和系统架构的方式。",
    takeaway:
      "The dangerous assumption is not always technical; sometimes it is market timing, workflow adoption, or incentive design.",
    takeawayZh:
      "最危险的假设不一定是技术问题，也可能是市场时机、流程采用或激励设计。"
  },
  {
    principle: "Treat AI as operating infrastructure",
    principleZh: "把 AI 当成操作基础设施",
    example:
      "Cue.AI is not one isolated feature. Cue.Room handles the classroom workflow, while Cue.Hub handles the team operating layer behind product delivery.",
    exampleZh:
      "Cue.AI 不是单个功能。Cue.Room 承载课堂流程，Cue.Hub 承载产品交付背后的团队操作层。",
    takeaway:
      "The long-term value is in the system around the model.",
    takeawayZh:
      "长期价值不只在模型本身，而在模型周围形成的系统。"
  }
] as const;

export const notes = workPrinciples.map((item) => ({
  title: item.principle,
  titleZh: item.principleZh,
  body: `${item.example} ${item.takeaway}`,
  chinese: `${item.exampleZh}${item.takeawayZh}`
}));

export const profile = {
  education: "Soochow University, B.A. in Economics & Finance, expected June 2027",
  educationZh: "苏州大学，经济学学士（金融学），预计 2027 年 6 月毕业",
  educationDetail: "GPA 3.70 / 4.0 · Rank 19 / 89 · Scholarship 2024 & 2025",
  educationDetailZh: "绩点 3.70 / 4.0 · 排名 19 / 89 · 苏州大学奖学金 2024 & 2025",
  skills: ["Python", "Quant modeling", "C", "LaTeX", "Photoshop", "Mandarin", "Cantonese", "English IELTS 7.0"],
  certifications: "CFA (in progress) · CET-6 · Machine Learning (Coursera) · MCM/ICM Meritorious Winner",
  certificationsZh: "CFA 在读 · CET-6 · 机器学习（Coursera）· MCM/ICM M 奖",
  signals: [
    {
      label: "Founder / builder",
      labelZh: "创始人与建设者",
      value: "CEO of OmniNexus and CEO of Cue.AI",
      valueZh: "OmniNexus CEO / Cue.AI CEO"
    },
    {
      label: "Project relationship",
      labelZh: "项目关系",
      value: "OmniNexus and Cue.AI are separate parallel projects",
      valueZh: "OmniNexus 与 Cue.AI 是两个并行项目"
    },
    {
      label: "Research",
      labelZh: "研究",
      value: "SSCI Q2 accepted paper on climate risk and insurance markets",
      valueZh: "SSCI Q2 论文已录用"
    },
    {
      label: "Awards",
      labelZh: "竞赛",
      value: "MCM/ICM team lead · Advanced Mathematics Competition National Second Prize · ICAN Innovation and Entrepreneurship Competition National Gold Award",
      valueZh: "MCM/ICM 队长 · 高等数学竞赛全国二等奖 · ICAN 创新创业大赛全国金奖"
    },
    {
      label: "Paper title",
      labelZh: "论文题目",
      value: "极端天气事件对全球保险市场的影响：风险管理和赔偿成本的经济分析",
      valueZh: "极端天气事件对全球保险市场的影响：风险管理和赔偿成本的经济分析"
    }
  ]
};

export const experience = [
  {
    company: "OmniNexus",
    companyZh: "OmniNexus",
    role: "CEO",
    roleZh: "首席执行官",
    period: "2025.05 – Present",
    achievement: "Leading OmniNexus as a separate parallel project while also serving as CEO of Cue.AI.",
    achievementZh: "担任 OmniNexus CEO，并同时担任并行项目 Cue.AI 的 CEO。"
  },
  {
    company: "Cue.AI",
    companyZh: "Cue.AI",
    role: "CEO",
    roleZh: "首席执行官",
    period: "2025.05 – Present",
    achievement: "Built Cue.Room and Cue.Hub as two product examples under the Cue.AI direction, covering classroom workflows and AI team operations.",
    achievementZh: "推进 Cue.AI 方向下的 Cue.Room 与 Cue.Hub 两个产品例子，分别覆盖课堂流程和 AI 团队操作系统。"
  },
  {
    company: "明势资本",
    companyEn: "Mingshi Capital",
    role: "Investment Analyst Intern",
    roleZh: "投资经理实习生",
    period: "2024.11 – 2025.01",
    achievement: "Covered AI infrastructure, AIGC, large models, and AI chips for early-stage investment decisions. Conducted due diligence on team background, technical moat, and market validation.",
    achievementZh: "覆盖 AI 基础设施、AIGC、大模型、AI 芯片等方向的早期投资研究，完成团队背景、技术壁垒与市场验证的尽职调查。"
  },
  {
    company: "HSBC Hong Kong",
    companyZh: "汇丰银行（香港）",
    role: "Risk Management Intern",
    roleZh: "风险管理部实习生",
    period: "2024.07 – 2024.08",
    achievement: "Optimized KYC / AML review templates for SME and retail loan portfolios, reducing average processing time by 30%.",
    achievementZh: "优化中小企业和零售贷款的 KYC/AML 审核模板，平均处理时间缩短 30%。"
  },
  {
    company: "Zheshang Securities",
    companyZh: "浙商证券",
    role: "Intern",
    roleZh: "实习生",
    period: "2026.02 – 2026.04",
    achievement: "Supported securities research and financial analysis work.",
    achievementZh: "参与证券研究与金融分析相关工作。"
  },
  {
    company: "CITIC Securities",
    companyZh: "中信证券",
    role: "Wealth Management Intern",
    roleZh: "财富管理部实习生",
    period: "2024.02 – 2025.05",
    achievement: "Supported HNW client investment briefs and asset allocation analysis across mutual funds, bonds, and structured products.",
    achievementZh: "协助高净值客户投资简报与资产配置分析，涵盖共同基金、债券和结构性产品。"
  }
];

export const contact = {
  heading:
    "Interested in AI education products, investment / financing conversations, or business collaboration?",
  headingZh: "对 AI 教育产品、投资融资交流或业务合作感兴趣？",
  body:
    "Reach out for investment / financing conversations, AI education collaboration, or business collaboration around AI product systems.",
  bodyZh:
    "欢迎就投资融资交流、AI 教育产品合作，或围绕 AI 产品系统的业务合作展开对话。"
};
