# Homepage Content Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the personal homepage content so it feels like a personal site with stronger proof blocks, while preserving the approved hero, color system, and no-job-search positioning.

**Architecture:** Keep the existing Astro page structure and data-driven portfolio pattern. Add a compact proof strip component, enrich project/profile data, update work/profile/contact sections, and add a lightweight Node test that checks public content invariants in source data.

**Tech Stack:** Astro 5, TypeScript data modules, plain CSS, Node built-in test runner, `astro check`, `astro build`.

---

### Task 1: Content Invariant Test

**Files:**
- Modify: `package.json`
- Create: `tests/homepage-content.test.mjs`

- [ ] **Step 1: Add a failing content test**

Create `tests/homepage-content.test.mjs` with Node's built-in test runner. It should read `src/data/portfolio.ts` as text and assert that the required public facts are present.

```js
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const portfolioSource = readFileSync(new URL("../src/data/portfolio.ts", import.meta.url), "utf8");

test("homepage portfolio data includes approved proof and project relationship facts", () => {
  const requiredSnippets = [
    "10+ teachers",
    "around 100 classroom sessions",
    "Cueai.top",
    "hub.cueai.top",
    "CEO of OmniNexus",
    "CEO of Cue.AI",
    "separate parallel projects",
    "Zheshang Securities",
    "2026.02",
    "2026.04",
    "Advanced Mathematics Competition National Second Prize",
    "ICAN Innovation and Entrepreneurship Competition National Gold Award",
    "SSCI Q2",
    "极端天气事件对全球保险市场的影响：风险管理和赔偿成本的经济分析",
    "investment / financing conversations",
    "business collaboration"
  ];

  for (const snippet of requiredSnippets) {
    assert.match(portfolioSource, new RegExp(snippet.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `Missing content snippet: ${snippet}`);
  }
});
```

Update `package.json` scripts:

```json
"test": "node --test tests/*.test.mjs",
"build": "npm test && astro check && astro build"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`

Expected: FAIL with missing content snippets because current portfolio data does not include the new proof content.

### Task 2: Data Model and Content

**Files:**
- Modify: `src/data/portfolio.ts`

- [ ] **Step 1: Expand portfolio data to satisfy the content invariants**

Add exported data for:
- `proofSignals`
- richer `projects` fields: `role`, `stage`, `evidence`, `system`, `links`
- `workPrinciples`
- `profile.clusters`
- cooperation-first contact copy

Preserve existing hero content.

- [ ] **Step 2: Run test to verify it passes**

Run: `npm test`

Expected: PASS.

### Task 3: Proof Strip Component

**Files:**
- Create: `src/components/ProofStrip.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Render a compact proof strip after the hero**

Create `ProofStrip.astro` that maps `proofSignals` into compact stat cards. Add `<ProofStrip />` after `<Hero />`.

- [ ] **Step 2: Add CSS for the proof strip**

Use existing colors and radius. Keep the section compact and responsive. Do not introduce a new color palette.

- [ ] **Step 3: Run Astro check**

Run: `npm run check`

Expected: PASS.

### Task 4: Project Cards and Work Section

**Files:**
- Modify: `src/components/ProjectCard.astro`
- Modify: `src/components/SelectedWork.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Update project cards to show role, stage, system, evidence, and links**

Update the component props to match the richer project data and render denser but scannable project cards.

- [ ] **Step 2: Update Selected Work copy**

Keep the section focused on Cue.Room and Cue.Hub as the Cue.AI product examples. Do not imply OmniNexus and Cue.AI are the same project.

- [ ] **Step 3: Run Astro check**

Run: `npm run check`

Expected: PASS.

### Task 5: How I Work, Profile, and Contact

**Files:**
- Modify: `src/components/OperatingNotes.astro`
- Modify: `src/components/Profile.astro`
- Modify: `src/components/Contact.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Reshape notes into "How I Work"**

Render `workPrinciples` with principle, example, and takeaway.

- [ ] **Step 2: Render profile credibility clusters**

Show founder/builder, finance/product judgment, institutional experience, awards/research, and skills/languages clusters. Include separate OmniNexus CEO and Cue.AI CEO wording.

- [ ] **Step 3: Update contact copy**

Use investment / financing and business collaboration wording. Do not mention job search.

- [ ] **Step 4: Run full verification**

Run: `npm run build`

Expected: PASS.

### Task 6: Final Review

**Files:**
- Inspect all modified files.

- [ ] **Step 1: Check public wording**

Run:

```bash
rg -n "open to work|job search|求职|same project|English name|融资金额" src
```

Expected: no inappropriate public positioning.

- [ ] **Step 2: Check git diff**

Run: `git diff --stat && git diff --check`

Expected: only intended files changed, no whitespace errors.
