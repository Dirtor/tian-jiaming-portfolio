# Personal Portfolio Design

Date: 2026-05-29

## Goal

Build a distinctive personal portfolio website for Tian Jiaming that works primarily as a long-term personal brand homepage, with resume support as a secondary goal.

The site should make one thing clear quickly:

> I turn AI ideas into real product systems.

Chinese support line:

> 把 AI 产品想法推进成真实可用的系统。

The homepage should not feel like a standard resume page. It should feel like a personal product record: what Jiaming builds, how he thinks, and what evidence supports that.

## Audience

Primary audience:
- People who want to understand Jiaming's AI product direction, current work, and product-building taste.
- Potential collaborators, mentors, investors, and people following his long-term work.

Secondary audience:
- Recruiters or hiring managers who need quick evidence of product ability, execution, and relevant background.

## Visual Direction

Use a personality-forward editorial style inspired by the provided reference:

- Black, white, and warm gray foundation.
- Orange-red accent for energy marks, active states, and motion details.
- Oversized English typography for first impression.
- Chinese copy for clarity and substance.
- Two large project cards instead of many small portfolio items.
- Light motion only: hero speed band, card hover, and subtle scroll-in movement.

Avoid:
- A generic resume template.
- A full marketing landing page.
- Overusing orange/red across the entire page.
- Publicly exposing unnecessary personal details from the resume, especially the full home address.

## Language Strategy

The site is bilingual:

- English for hero-level identity and visual impact.
- Chinese for accurate explanation, project context, and resume-backed proof.
- Project cards can use English titles with Chinese descriptions.

## Homepage Structure

### 1. Hero

Purpose: establish personal positioning in the first viewport.

Content:
- Main headline: `I turn AI ideas into real product systems.`
- Chinese subtitle: `把 AI 产品想法推进成真实可用的系统。`
- Tags:
  - `AI Products`
  - `Agents`
  - `Automation`
  - `0 to 1`
- Primary actions:
  - View work
  - Contact
  - Resume PDF, only if the user approves public download

### 2. Selected Work

Purpose: show proof through two substantial projects.

Initial project slots:

#### Cue.Room

Source repo: `CUEAITECH/Cue.AI`

Positioning:
- AI-native classroom delivery system.
- Product direction from repo README: not just a dual-device helper, but an AI version of a classroom meeting system.
- Core chain: login, create/join classroom, audio/video classroom, realtime transcript, SOP guidance, SOS support, next-step prompts, post-class summary.

Portfolio treatment:
- Use as the strongest product-system case.
- Show as a project card first, not a full case study yet.
- Do not overclaim metrics unless real metrics are later supplied.

Draft card copy:
- Title: `Cue.Room`
- Label: `AI-native classroom system`
- Description: `An AI classroom delivery system that brings live class workflow, realtime transcript, SOP guidance, SOS support, and post-class summaries into one teaching experience.`
- Chinese support: `面向教学场景的 AI-native 课堂系统，把开课、上课辅助、实时转写、课堂救场和课后交付放进同一个闭环。`

#### Cue.Hub

Source repo: `CUEAITECH/CUE.AI-Hub`

Positioning:
- AI R&D delivery command center for the Cue.AI team.
- It connects project goals, task assignment, GitHub commits, AI review, async standups, evening review, risk alerts, and WeCom bot workflows.

Portfolio treatment:
- Use as the system/operations case.
- Shows Jiaming's ability to turn AI development work into an operational system.

Draft card copy:
- Title: `Cue.Hub`
- Label: `AI project command center`
- Description: `An internal AI delivery hub that connects project planning, task ownership, GitHub evidence, AI review, risk alerts, daily review, and WeCom workflows.`
- Chinese support: `面向团队研发交付的 AI 项目中枢，把任务、提交、审阅、风险、站会和企业微信提醒串成可追踪闭环。`

### 3. Operating Notes

Purpose: give the site long-term personal brand value without requiring a full blog from day one.

Initial note themes:
- How to move from AI idea to usable system.
- How to validate an AI product before overbuilding.
- What makes an agent workflow useful instead of decorative.
- How to connect product, finance, and technical execution.

MVP can ship with starter note titles or a short "Now thinking about" section.

### 4. Profile

Purpose: provide resume-backed credibility without turning the homepage into a CV.

Use these resume elements:
- Name: Tian Jiaming / 田家铭.
- Education: Soochow University, B.A. in Economics, Finance, expected June 2027.
- Academic signal: GPA 3.70 / 4.0, rank 19 / 89.
- Honors: Soochow University Scholarship 2024 and 2025.
- Leadership: CEO, 南京纳渡域界咨询有限公司, focused on AI education solutions and productized classroom/after-class support.
- Venture/research signal: Mingshi Capital quantitative analysis intern, covering enterprise services, AI infrastructure, AIGC, large models, AI chips, and fintech.
- Finance/risk signal: HSBC Hong Kong risk management internship, including AML/KYC process optimization and credit risk analysis.
- Execution signal: CITIC Securities wealth management internship.
- Competition signal: MCM/ICM Meritorious Winner, team lead.
- Skills: Python, quantitative modeling, C, LaTeX, Photoshop.
- Language: Mandarin, Cantonese, professional English, IELTS 7.0.

Do not use these publicly by default:
- Full home address.
- Phone number, unless explicitly approved later.

Contact defaults:
- Email: `Dirtortian@outlook.com`
- GitHub links to Cue.Room and Cue.Hub repos.
- Other social links can be added later.

## Content Tone

Tone should be:
- Direct.
- Product-minded.
- High-agency.
- Concrete and evidence-based.

Avoid sounding like:
- Generic "passionate student".
- Inflated founder biography.
- A resume bullet list pasted into a website.

## Initial Technical Recommendation

Use Astro + Tailwind for the build.

Reasons:
- Static-first and fast.
- Easy to deploy on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.
- Good fit for a portfolio with project cards and future notes.
- Lower overhead than a full app framework.

MVP scope:
- One responsive homepage.
- Local resume PDF asset if the user wants a download button.
- Two project cards.
- Profile section.
- Contact section.

Out of scope for MVP:
- Full project detail pages.
- CMS.
- Analytics.
- Dark/light theme toggle.
- Blog engine.
- Real project metrics unless supplied.

## Acceptance Criteria

- The homepage clearly communicates the AI product systems positioning.
- It includes `Cue.Room` and `Cue.Hub` as the two selected project slots.
- It uses selected resume content without exposing the full address or phone number by default.
- It has a distinctive visual style close to the approved black/white/gray/orange-red direction.
- It remains readable and professional on desktop and mobile.
- It can be run locally and later deployed as a static site.
