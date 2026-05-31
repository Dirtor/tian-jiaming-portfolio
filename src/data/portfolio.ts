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

export const projects = [
  {
    title: "Cue.Room",
    label: "AI-native classroom system",
    labelZh: "AI 原生课堂系统",
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
    labelZh: "AI 项目指挥中心",
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
    titleZh: "从 AI 想法到可用系统",
    body: "Most AI classroom tools are demos. Cue.Room started as a one-sentence idea — 'what if the teacher had a co-pilot during class' — and took months of weekly iteration to become a system with live transcription, SOP guidance, SOS escalation, and post-class delivery. The gap between idea and usable is mostly a process design problem, not a technology problem.",
    chinese: "大多数 AI 课堂工具停留在演示阶段。Cue.Room 从一句话想法开始，经过数月迭代，才形成包含实时转写、SOP 引导、SOS 救场和课后交付的完整系统。从想法到可用系统，核心是流程设计问题，不是技术问题。"
  },
  {
    title: "Validating products before overbuilding",
    titleZh: "先验证，再构建",
    body: "At Mingshi Capital, I reviewed dozens of business plans where teams had spent 18 months building before talking to a single paying customer. The pattern is consistent: the products that worked started with a 30-minute manual workflow and only automated once the workflow was proven. Build the proof first, then the system.",
    chinese: "在明势资本做投资经理实习时，我看过很多商业计划书，团队在接触第一个付费用户之前已经做了 18 个月的开发。成功的产品往往从一个 30 分钟的人工流程开始，只在流程跑通后才做自动化。先验证，再搭系统。"
  },
  {
    title: "Useful agent workflows, not decorative automation",
    titleZh: "有用的自动化，不是装饰性自动化",
    body: "At HSBC, the KYC / AML review process had six manual handoffs. We didn't replace the process with AI — we redesigned the template structure so 80% of standard cases could be triaged in one pass. Processing time dropped 30%. The lesson: automation that actually saves time usually looks boring. Automation that looks impressive usually doesn't change anything.",
    chinese: "在汇丰银行，KYC/AML 审核流程有六个人工交接节点。我们没有直接用 AI 替换流程，而是重新设计模板结构，让 80% 的标准案例可以一次完成分类，处理时间缩短了 30%。真正节省时间的自动化往往看起来平淡无奇；看起来很酷的自动化往往什么都没改变。"
  },
  {
    title: "Connecting finance, product, and technical execution",
    titleZh: "连接金融、产品与技术执行",
    body: "Finance training teaches you to model uncertainty, not eliminate it. Product work teaches you to ship before certainty arrives. The combination turns out to be useful: I can read a cap table and a system architecture diagram in the same meeting, and know which one has the more dangerous assumption.",
    chinese: "金融训练教你对不确定性建模，而不是消除它。产品工作教你在确定性到来之前就交付。这两种思维的结合很实用：在同一次会议里，我可以同时看融资结构和系统架构图，并判断哪个假设更危险。"
  }
];

export const profile = {
  education: "Soochow University, B.A. in Economics & Finance, expected June 2027",
  educationZh: "苏州大学，经济学学士（金融学），预计 2027 年 6 月毕业",
  educationDetail: "GPA 3.70 / 4.0 · Rank 19 / 89 · Scholarship 2024 & 2025",
  educationDetailZh: "绩点 3.70 / 4.0 · 排名 19 / 89 · 苏州大学奖学金 2024 & 2025",
  skills: ["Python", "Quant modeling", "C", "LaTeX", "Photoshop", "Mandarin", "Cantonese", "English IELTS 7.0"],
  certifications: "CFA (in progress) · CET-6 · Machine Learning (Coursera) · MCM/ICM Meritorious Winner",
  certificationsZh: "CFA 在读 · CET-6 · 机器学习（Coursera）· MCM/ICM M 奖"
};

export const experience = [
  {
    company: "南京纳渡域界咨询",
    role: "CEO",
    roleZh: "首席执行官",
    period: "2025.05 – 2026.03",
    achievement: "Built Cue.Room, an AI-native classroom system, from 0 to 1. Led product design, client onboarding, and team execution — pushed project to funding stage.",
    achievementZh: "从零到一搭建 AI 原生课堂系统 Cue.Room，主导产品设计、客户对接与团队执行，推动项目进入融资阶段。"
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
    company: "CITIC Securities",
    companyZh: "中信证券",
    role: "Wealth Management Intern",
    roleZh: "财富管理部实习生",
    period: "2024.02 – 2025.05",
    achievement: "Supported HNW client investment briefs and asset allocation analysis across mutual funds, bonds, and structured products.",
    achievementZh: "协助高净值客户投资简报与资产配置分析，涵盖共同基金、债券和结构性产品。"
  }
];
