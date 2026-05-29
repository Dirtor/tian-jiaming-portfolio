# Personal Portfolio MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a one-page Astro portfolio MVP for Tian Jiaming that presents a bilingual AI product-systems personal brand, two selected project cards, selected profile proof, and contact actions.

**Architecture:** The site is a static Astro app with one page and a small set of focused components. Content lives in a typed data module so copy can be edited without touching layout code. Styling uses global CSS variables plus component-level classes to create the approved black/white/warm-gray/orange-red visual system.

**Tech Stack:** Astro, TypeScript, CSS, npm, local browser verification.

---

## File Structure

- Create `package.json`: project scripts and dependencies.
- Create `astro.config.mjs`: Astro configuration.
- Create `tsconfig.json`: strict TypeScript settings using Astro defaults.
- Create `src/env.d.ts`: Astro type references.
- Create `src/data/portfolio.ts`: all editable portfolio content.
- Create `src/layouts/BaseLayout.astro`: document shell, metadata, and global asset links.
- Create `src/pages/index.astro`: homepage composition.
- Create `src/components/SparkMark.astro`: orange-red brand mark.
- Create `src/components/Hero.astro`: first viewport positioning and CTAs.
- Create `src/components/ProjectCard.astro`: reusable selected-work card.
- Create `src/components/SelectedWork.astro`: Cue.Room and Cue.Hub section.
- Create `src/components/OperatingNotes.astro`: short personal thinking section.
- Create `src/components/Profile.astro`: selected resume-backed credibility section.
- Create `src/components/Contact.astro`: contact and repo links.
- Create `src/styles/global.css`: visual system, responsive rules, and motion.

## Task 1: Scaffold Astro Project

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/env.d.ts`
- Create: `src/styles/global.css`

- [ ] **Step 1: Create project package files**

Create `package.json`:

```json
{
  "name": "tian-jiaming-portfolio",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "check": "astro check"
  },
  "dependencies": {
    "@astrojs/check": "^0.9.4",
    "astro": "^5.10.0",
    "typescript": "^5.8.3"
  },
  "devDependencies": {}
}
```

Create `astro.config.mjs`:

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://example.com",
  output: "static"
});
```

Create `tsconfig.json`:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

Create `src/env.d.ts`:

```ts
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
```

- [ ] **Step 2: Create global CSS foundation**

Create `src/styles/global.css`:

```css
:root {
  color-scheme: light;
  --ink: #101014;
  --ink-soft: #686866;
  --paper: #f4f2ed;
  --paper-strong: #ffffff;
  --warm-gray: #dcd9d2;
  --line: rgba(16, 16, 20, 0.14);
  --dark: #111114;
  --dark-soft: #1b1b1f;
  --light-on-dark: #f6f2ea;
  --muted-on-dark: #a7a39c;
  --accent: #ff3b14;
  --accent-hot: #ffb22c;
  --max-width: 1180px;
  --radius: 8px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--dark);
}

body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--ink);
  background: var(--paper);
  text-rendering: optimizeLegibility;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

::selection {
  background: var(--accent);
  color: var(--paper-strong);
}

.page-shell {
  min-height: 100vh;
  background:
    linear-gradient(180deg, var(--dark) 0 41rem, var(--paper) 41rem 100%);
}

.section {
  padding: 6rem max(1.25rem, calc((100vw - var(--max-width)) / 2));
}

.section-label {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin: 0 0 1.5rem;
  color: var(--accent);
  font-size: 0.76rem;
  font-weight: 760;
  letter-spacing: 0;
  text-transform: uppercase;
}

.eyebrow-dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
  background: currentColor;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.85rem;
  padding: 0 1.05rem;
  border: 1px solid currentColor;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 720;
  transition: transform 180ms ease, background 180ms ease, color 180ms ease, border-color 180ms ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button.primary {
  border-color: var(--accent);
  background: var(--accent);
  color: white;
}

.button.dark {
  color: var(--light-on-dark);
}

.muted {
  color: var(--ink-soft);
}

@media (max-width: 760px) {
  .page-shell {
    background: linear-gradient(180deg, var(--dark) 0 46rem, var(--paper) 46rem 100%);
  }

  .section {
    padding: 4rem 1rem;
  }

  .button {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}
```

- [ ] **Step 3: Install dependencies**

Run:

```bash
npm install
```

Expected: `node_modules/` and `package-lock.json` are created.

- [ ] **Step 4: Verify scaffold syntax**

Run:

```bash
npm run check
```

Expected: command exits successfully after Astro creates internal types. If it fails because no page exists yet, continue to Task 2 and run it again after creating `src/pages/index.astro`.

- [ ] **Step 5: Commit scaffold**

Run:

```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json src/env.d.ts src/styles/global.css
git commit -m "Build Astro portfolio scaffold"
```

## Task 2: Add Portfolio Content Data

**Files:**
- Create: `src/data/portfolio.ts`

- [ ] **Step 1: Create content module**

Create `src/data/portfolio.ts`:

```ts
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
    "MCM / ICM Meritorious Winner, team lead."
  ],
  skills: ["Python", "Quant modeling", "C", "LaTeX", "Photoshop", "Mandarin", "Cantonese", "English IELTS 7.0"]
};
```

- [ ] **Step 2: Run TypeScript check**

Run:

```bash
npm run check
```

Expected: no TypeScript errors related to `src/data/portfolio.ts`.

- [ ] **Step 3: Commit content data**

Run:

```bash
git add src/data/portfolio.ts
git commit -m "Add portfolio content data"
```

## Task 3: Build Base Layout And Hero

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/SparkMark.astro`
- Create: `src/components/Hero.astro`
- Create: `src/pages/index.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Create base layout**

Create `src/layouts/BaseLayout.astro`:

```astro
---
import "../styles/global.css";

interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

- [ ] **Step 2: Create spark mark component**

Create `src/components/SparkMark.astro`:

```astro
<span class="spark-mark" aria-hidden="true"></span>

<style>
  .spark-mark {
    display: inline-block;
    width: 1.15rem;
    height: 1.15rem;
    flex: 0 0 auto;
    background: var(--accent);
    clip-path: polygon(
      50% 0%,
      61% 29%,
      93% 7%,
      71% 39%,
      100% 50%,
      71% 61%,
      93% 93%,
      61% 71%,
      50% 100%,
      39% 71%,
      7% 93%,
      29% 61%,
      0% 50%,
      29% 39%,
      7% 7%,
      39% 29%
    );
  }
```

- [ ] **Step 3: Create hero component**

Create `src/components/Hero.astro`:

```astro
---
import SparkMark from "./SparkMark.astro";
import { hero } from "@/data/portfolio";
---

<header class="hero-section">
  <nav class="hero-nav" aria-label="Primary navigation">
    <a class="brand" href="#top" aria-label="Tian Jiaming home">
      <SparkMark />
      <span>{hero.name}</span>
    </a>
    <div class="nav-links">
      <a href="#work">Work</a>
      <a href="#notes">Notes</a>
      <a href="#profile">Profile</a>
      <a href={`mailto:${hero.email}`}>Contact</a>
    </div>
  </nav>

  <div class="hero-grid" id="top">
    <div class="hero-copy">
      <p class="hero-kicker">AI product systems / 个人作品集</p>
      <h1>{hero.headline}</h1>
      <p class="hero-subtitle">{hero.subtitle}</p>
      <p class="hero-description">{hero.description}</p>
      <div class="hero-tags" aria-label="Focus areas">
        {hero.tags.map((tag) => <span>{tag}</span>)}
      </div>
      <div class="button-row">
        <a class="button primary" href="#work">View work</a>
        <a class="button dark" href={`mailto:${hero.email}`}>Contact</a>
      </div>
    </div>

    <div class="hero-visual" aria-hidden="true">
      <div class="speed-band"></div>
      <div class="visual-card top-card">
        <span>01</span>
        <strong>Build useful AI products</strong>
      </div>
      <div class="visual-card bottom-card">
        <span>02</span>
        <strong>Move from idea to proof</strong>
      </div>
    </div>
  </div>
</header>
```

- [ ] **Step 4: Create homepage composition**

Create `src/pages/index.astro`:

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import Hero from "@/components/Hero.astro";
---

<BaseLayout
  title="Tian Jiaming - AI Product Systems"
  description="Tian Jiaming turns AI ideas into real product systems across classroom technology, automation, and early-stage product validation."
>
  <main class="page-shell">
    <Hero />
  </main>
</BaseLayout>
```

- [ ] **Step 5: Add hero styles**

Append this to `src/styles/global.css`:

```css
.hero-section {
  min-height: 42rem;
  padding: 1.25rem max(1.25rem, calc((100vw - var(--max-width)) / 2)) 5rem;
  color: var(--light-on-dark);
}

.hero-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 5rem;
  font-size: 0.84rem;
}

.brand,
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.brand {
  font-weight: 760;
}

.nav-links {
  color: var(--muted-on-dark);
}

.nav-links a {
  transition: color 180ms ease;
}

.nav-links a:hover {
  color: var(--light-on-dark);
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(18rem, 0.95fr);
  gap: 3rem;
  align-items: end;
}

.hero-kicker {
  margin: 0 0 1.2rem;
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
}

.hero-copy h1 {
  max-width: 12ch;
  margin: 0;
  font-size: clamp(4.3rem, 10vw, 9.7rem);
  line-height: 0.82;
  letter-spacing: 0;
}

.hero-subtitle {
  max-width: 34rem;
  margin: 1.4rem 0 0;
  color: var(--light-on-dark);
  font-size: clamp(1.2rem, 2vw, 1.7rem);
  font-weight: 760;
}

.hero-description {
  max-width: 32rem;
  margin: 0.8rem 0 1.5rem;
  color: var(--muted-on-dark);
  font-size: 1rem;
  line-height: 1.65;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 0 0 1.5rem;
}

.hero-tags span {
  padding: 0.45rem 0.7rem;
  border: 1px solid rgba(246, 242, 234, 0.24);
  border-radius: 999px;
  color: var(--light-on-dark);
  font-size: 0.82rem;
}

.hero-visual {
  position: relative;
  min-height: 23rem;
}

.speed-band {
  position: absolute;
  inset: 6.5rem -12vw auto 0;
  height: 5rem;
  background: linear-gradient(90deg, transparent, #0b0b0d 14%, var(--accent) 40%, var(--accent-hot) 54%, #151515 76%, transparent);
  transform: skewY(-5deg);
  filter: saturate(1.2);
}

.visual-card {
  position: absolute;
  right: 0;
  width: min(18rem, 82vw);
  min-height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: var(--radius);
  background: var(--paper);
  color: var(--ink);
}

.visual-card span {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 820;
}

.visual-card strong {
  max-width: 12rem;
  font-size: 1.35rem;
  line-height: 1;
}

.top-card {
  top: 0;
}

.bottom-card {
  right: 4rem;
  bottom: 0;
  background: var(--dark-soft);
  color: var(--light-on-dark);
}

@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .hero-nav {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 3.5rem;
  }
}

@media (max-width: 620px) {
  .nav-links {
    width: 100%;
    justify-content: space-between;
    gap: 0.35rem;
    font-size: 0.78rem;
  }

  .hero-copy h1 {
    font-size: clamp(3.45rem, 18vw, 5.2rem);
  }

  .hero-visual {
    min-height: 18rem;
  }

  .speed-band {
    top: 4rem;
  }

  .visual-card {
    width: min(15rem, 76vw);
  }

  .bottom-card {
    right: 1rem;
  }
}
```

- [ ] **Step 6: Verify hero**

Run:

```bash
npm run build
```

Expected: Astro check and build both complete successfully.

- [ ] **Step 7: Commit base layout and hero**

Run:

```bash
git add src/layouts/BaseLayout.astro src/components/SparkMark.astro src/components/Hero.astro src/pages/index.astro src/styles/global.css
git commit -m "Build portfolio hero"
```

## Task 4: Build Selected Work Section

**Files:**
- Create: `src/components/ProjectCard.astro`
- Create: `src/components/SelectedWork.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Create reusable project card**

Create `src/components/ProjectCard.astro`:

```astro
---
interface Props {
  project: {
    title: string;
    label: string;
    href: string;
    description: string;
    chinese: string;
    meta: readonly string[];
    theme: "dark" | "light";
  };
  index: number;
}

const { project, index } = Astro.props;
---

<article class={`project-card ${project.theme}`}>
  <div class="project-card-top">
    <span>{String(index + 1).padStart(2, "0")}</span>
    <a href={project.href} target="_blank" rel="noreferrer">GitHub</a>
  </div>
  <div>
    <p class="project-label">{project.label}</p>
    <h3>{project.title}</h3>
    <p class="project-description">{project.description}</p>
    <p class="project-chinese">{project.chinese}</p>
  </div>
  <div class="project-meta">
    {project.meta.map((item) => <span>{item}</span>)}
  </div>
</article>
```

- [ ] **Step 2: Create selected work section**

Create `src/components/SelectedWork.astro`:

```astro
---
import ProjectCard from "./ProjectCard.astro";
import SparkMark from "./SparkMark.astro";
import { projects } from "@/data/portfolio";
---

<section class="section work-section" id="work">
  <p class="section-label"><SparkMark /> Selected Work</p>
  <div class="section-heading">
    <h2>Two projects, full product-system proof.</h2>
    <p>
      The first project shows an AI-native classroom product. The second shows the operating system behind AI project delivery.
    </p>
  </div>
  <div class="project-grid">
    {projects.map((project, index) => <ProjectCard project={project} index={index} />)}
  </div>
</section>
```

- [ ] **Step 3: Add selected work to homepage**

Replace `src/pages/index.astro` with:

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import Hero from "@/components/Hero.astro";
import SelectedWork from "@/components/SelectedWork.astro";
---

<BaseLayout
  title="Tian Jiaming - AI Product Systems"
  description="Tian Jiaming turns AI ideas into real product systems across classroom technology, automation, and early-stage product validation."
>
  <main class="page-shell">
    <Hero />
    <SelectedWork />
  </main>
</BaseLayout>
```

- [ ] **Step 4: Add selected work styles**

Append this to `src/styles/global.css`:

```css
.work-section {
  background: var(--paper);
}

.section-heading {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.68fr);
  gap: 2rem;
  align-items: end;
  margin-bottom: 2rem;
}

.section-heading h2 {
  max-width: 12ch;
  margin: 0;
  color: var(--ink);
  font-size: clamp(3rem, 7vw, 6.2rem);
  line-height: 0.88;
  letter-spacing: 0;
}

.section-heading p {
  margin: 0;
  color: var(--ink-soft);
  font-size: 1rem;
  line-height: 1.65;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.project-card {
  min-height: 31rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.1rem;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 1.8rem 4rem rgba(0, 0, 0, 0.16);
}

.project-card.dark {
  color: var(--light-on-dark);
  background:
    linear-gradient(120deg, rgba(255, 59, 20, 0.8), rgba(255, 178, 44, 0.58) 28%, rgba(17, 17, 20, 0.96) 56%),
    var(--dark);
}

.project-card.light {
  color: var(--ink);
  background: var(--warm-gray);
}

.project-card-top,
.project-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 760;
}

.project-card-top a {
  border-bottom: 1px solid currentColor;
}

.project-label {
  margin: 0 0 0.6rem;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 820;
  text-transform: uppercase;
}

.project-card h3 {
  margin: 0;
  font-size: clamp(2.7rem, 6vw, 5.2rem);
  line-height: 0.86;
  letter-spacing: 0;
}

.project-description,
.project-chinese {
  max-width: 36rem;
  margin: 1.2rem 0 0;
  font-size: 1rem;
  line-height: 1.55;
}

.project-card.dark .project-description,
.project-card.dark .project-chinese {
  color: rgba(246, 242, 234, 0.78);
}

.project-card.light .project-description,
.project-card.light .project-chinese {
  color: var(--ink-soft);
}

.project-meta {
  justify-content: flex-start;
}

.project-meta span {
  padding: 0.42rem 0.62rem;
  border: 1px solid currentColor;
  border-radius: 999px;
}

@media (max-width: 860px) {
  .section-heading,
  .project-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    min-height: 25rem;
  }
}
```

- [ ] **Step 5: Build and check**

Run:

```bash
npm run build
```

Expected: build succeeds and includes the `dist/` output.

- [ ] **Step 6: Commit selected work**

Run:

```bash
git add src/components/ProjectCard.astro src/components/SelectedWork.astro src/pages/index.astro src/styles/global.css
git commit -m "Add selected work section"
```

## Task 5: Build Notes, Profile, And Contact

**Files:**
- Create: `src/components/OperatingNotes.astro`
- Create: `src/components/Profile.astro`
- Create: `src/components/Contact.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Create operating notes section**

Create `src/components/OperatingNotes.astro`:

```astro
---
import SparkMark from "./SparkMark.astro";
import { notes } from "@/data/portfolio";
---

<section class="section notes-section" id="notes">
  <p class="section-label"><SparkMark /> Operating Notes</p>
  <div class="notes-layout">
    <h2>Thinking in public, before it becomes a polished case study.</h2>
    <div class="note-list">
      {notes.map((note, index) => (
        <article class="note-item">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{note}</p>
        </article>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Create profile section**

Create `src/components/Profile.astro`:

```astro
---
import SparkMark from "./SparkMark.astro";
import { profile } from "@/data/portfolio";
---

<section class="section profile-section" id="profile">
  <p class="section-label"><SparkMark /> Profile</p>
  <div class="profile-layout">
    <div>
      <h2>Finance-trained, product-led, AI-focused.</h2>
      <p class="profile-education">{profile.education}</p>
    </div>
    <div class="profile-proof">
      {profile.highlights.map((item) => <p>{item}</p>)}
    </div>
  </div>
  <div class="skill-strip" aria-label="Skills and languages">
    {profile.skills.map((skill) => <span>{skill}</span>)}
  </div>
</section>
```

- [ ] **Step 3: Create contact section**

Create `src/components/Contact.astro`:

```astro
---
import SparkMark from "./SparkMark.astro";
import { hero, projects } from "@/data/portfolio";
---

<section class="section contact-section" id="contact">
  <div class="contact-panel">
    <p class="section-label"><SparkMark /> Contact</p>
    <h2>Interested in AI product systems, classroom technology, or useful automation?</h2>
    <p>Reach out for product conversations, collaboration, or role-fit discussions.</p>
    <div class="button-row">
      <a class="button primary" href={`mailto:${hero.email}`}>Email me</a>
      {projects.map((project) => (
        <a class="button" href={project.href} target="_blank" rel="noreferrer">{project.title}</a>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 4: Add sections to homepage**

Replace `src/pages/index.astro` with:

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import Contact from "@/components/Contact.astro";
import Hero from "@/components/Hero.astro";
import OperatingNotes from "@/components/OperatingNotes.astro";
import Profile from "@/components/Profile.astro";
import SelectedWork from "@/components/SelectedWork.astro";
---

<BaseLayout
  title="Tian Jiaming - AI Product Systems"
  description="Tian Jiaming turns AI ideas into real product systems across classroom technology, automation, and early-stage product validation."
>
  <main class="page-shell">
    <Hero />
    <SelectedWork />
    <OperatingNotes />
    <Profile />
    <Contact />
  </main>
</BaseLayout>
```

- [ ] **Step 5: Add notes, profile, and contact styles**

Append this to `src/styles/global.css`:

```css
.notes-section {
  color: var(--light-on-dark);
  background: var(--dark);
}

.notes-layout,
.profile-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(18rem, 1.1fr);
  gap: 2rem;
}

.notes-layout h2,
.profile-layout h2,
.contact-panel h2 {
  margin: 0;
  font-size: clamp(2.8rem, 6vw, 5.8rem);
  line-height: 0.9;
  letter-spacing: 0;
}

.note-list {
  display: grid;
  gap: 0;
}

.note-item {
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 1rem;
  padding: 1.15rem 0;
  border-top: 1px solid rgba(246, 242, 234, 0.16);
}

.note-item:last-child {
  border-bottom: 1px solid rgba(246, 242, 234, 0.16);
}

.note-item span {
  color: var(--accent);
  font-weight: 820;
}

.note-item p {
  margin: 0;
  color: var(--muted-on-dark);
  font-size: 1.15rem;
  line-height: 1.45;
}

.profile-section {
  background: var(--paper);
}

.profile-education {
  max-width: 30rem;
  color: var(--ink-soft);
  font-size: 1.05rem;
  line-height: 1.55;
}

.profile-proof {
  display: grid;
  gap: 0;
}

.profile-proof p {
  margin: 0;
  padding: 1rem 0;
  border-top: 1px solid var(--line);
  color: var(--ink-soft);
  line-height: 1.55;
}

.profile-proof p:last-child {
  border-bottom: 1px solid var(--line);
}

.skill-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 2rem;
}

.skill-strip span {
  padding: 0.52rem 0.72rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--paper-strong);
  color: var(--ink);
  font-size: 0.88rem;
  font-weight: 700;
}

.contact-section {
  padding-bottom: 1.25rem;
  background: var(--paper);
}

.contact-panel {
  padding: clamp(1.2rem, 5vw, 3rem);
  border-radius: var(--radius);
  color: var(--light-on-dark);
  background:
    linear-gradient(105deg, rgba(255, 59, 20, 0.78), rgba(255, 178, 44, 0.38) 20%, rgba(17, 17, 20, 0.98) 54%),
    var(--dark);
}

.contact-panel p:not(.section-label) {
  max-width: 34rem;
  color: var(--muted-on-dark);
  font-size: 1.05rem;
  line-height: 1.6;
}

.contact-panel .button:not(.primary) {
  color: var(--light-on-dark);
}

@media (max-width: 860px) {
  .notes-layout,
  .profile-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .note-item {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 6: Build and check**

Run:

```bash
npm run build
```

Expected: build succeeds with no type errors.

- [ ] **Step 7: Commit sections**

Run:

```bash
git add src/components/OperatingNotes.astro src/components/Profile.astro src/components/Contact.astro src/pages/index.astro src/styles/global.css
git commit -m "Add notes profile and contact sections"
```

## Task 6: Final Verification And Visual QA

**Files:**
- Modify only if verification finds a concrete issue.

- [ ] **Step 1: Run production build**

Run:

```bash
npm run build
```

Expected: command exits successfully and writes `dist/`.

- [ ] **Step 2: Start local dev server**

Run:

```bash
npm run dev -- --host 127.0.0.1
```

Expected: Astro prints a local URL, usually `http://127.0.0.1:4321/`.

- [ ] **Step 3: Open in browser and inspect desktop**

Open the local URL at a desktop viewport.

Expected:
- Hero headline is visible and not clipped.
- Navigation links fit on one line or wrap cleanly.
- Orange-red accents are present but not dominant.
- Cue.Room and Cue.Hub project cards are visible and readable.
- No resume home address or phone number appears.

- [ ] **Step 4: Inspect mobile**

Resize to a mobile viewport around 390px wide.

Expected:
- No horizontal scrolling.
- Hero title does not overlap visual cards.
- Buttons stack cleanly.
- Project cards, note rows, profile highlights, and contact buttons remain readable.

- [ ] **Step 5: Fix any visual defects**

If desktop or mobile verification finds overlap, clipping, unreadable contrast, or horizontal scroll, adjust only `src/styles/global.css` and rerun:

```bash
npm run build
```

Expected: build succeeds and the browser defect is resolved.

- [ ] **Step 6: Commit final QA adjustments**

Run:

```bash
git status --short
git add src/styles/global.css
git commit -m "Polish responsive portfolio layout"
```

Only run this commit if Step 5 changed CSS.

## Self-Review

Spec coverage:
- Hero positioning is covered by Tasks 2 and 3.
- Cue.Room and Cue.Hub project slots are covered by Tasks 2 and 4.
- Operating notes are covered by Task 5.
- Resume-backed profile content is covered by Tasks 2 and 5.
- Privacy constraints are covered by Task 2 content and Task 6 visual QA.
- Responsive and local verification are covered by Task 6.

Placeholder scan:
- The plan contains no unfilled markers and no unspecified project content.

Type consistency:
- `projects` uses `theme: "dark" | "light"` and `ProjectCard.astro` expects the same union.
- `hero`, `projects`, `notes`, and `profile` property names match all component imports.
