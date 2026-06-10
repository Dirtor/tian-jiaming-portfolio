import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import test from "node:test";

const portfolioSource = readFileSync(new URL("../src/data/portfolio.ts", import.meta.url), "utf8");
const globalCss = readFileSync(new URL("../src/styles/global.css", import.meta.url), "utf8");
const indexSource = readFileSync(new URL("../src/pages/index.astro", import.meta.url), "utf8");
const projectCardSource = readFileSync(new URL("../src/components/ProjectCard.astro", import.meta.url), "utf8");
const profileSource = readFileSync(new URL("../src/components/Profile.astro", import.meta.url), "utf8");
const heroSource = readFileSync(new URL("../src/components/Hero.astro", import.meta.url), "utf8");

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
    assert.match(
      portfolioSource,
      new RegExp(snippet.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
      `Missing content snippet: ${snippet}`
    );
  }
});

test("content sections are not forced to exceed a viewport", () => {
  const sectionRule = globalCss.match(/\.section\s*\{[^}]+\}/)?.[0] ?? "";
  const projectCardRule = globalCss.match(/\.project-card\s*\{[^}]+\}/)?.[0] ?? "";

  assert.doesNotMatch(sectionRule, /min-height:\s*100vh/, "Generic content sections should not force 100vh height");
  assert.doesNotMatch(projectCardRule, /min-height:\s*4[0-9]rem/, "Project cards should not force an oversized height");
});

test("project card primary descriptions are language isolated", () => {
  assert.match(
    projectCardSource,
    /class="project-description lang-en">\{project\.description\}/,
    "English project description should be hidden in Chinese mode"
  );
  assert.match(
    projectCardSource,
    /class="project-chinese lang-zh">\{project\.chinese\}/,
    "Chinese project description should be hidden in English mode"
  );
});

test("profile section stays compact on the homepage", () => {
  assert.doesNotMatch(profileSource, /profile-avatar-wrap/, "Profile should not repeat the hero avatar");
  assert.doesNotMatch(profileSource, /experience-achievement/, "Homepage profile should keep experience rows compact");
});

test("homepage avoids rigid four-box proof grids", () => {
  assert.doesNotMatch(indexSource, /ProofStrip/, "Proof strip should not be a separate four-box homepage section");
  assert.doesNotMatch(globalCss, /\.proof-grid/, "Proof grid CSS should be removed");
  assert.doesNotMatch(globalCss, /\.profile-clusters/, "Profile should not use a four-column cluster grid");
  assert.doesNotMatch(profileSource, /profile\.clusters\.map/, "Profile should render compact signals instead of four large boxes");
});

test("hero portrait is not covered by decorative cards", () => {
  assert.match(heroSource, /hero-composite\.png/, "Hero should use the pre-composited portrait asset");
  assert.match(globalCss, /--dark:\s*#09090D;/, "Page dark background should match the requested color");
  assert.match(globalCss, /\.hero-avatar\s*\{[^}]*object-fit:\s*contain;/, "Composite hero image should render without cropping baked-in cards");
  assert.doesNotMatch(heroSource, /visual-card/, "Hero cards should be baked into the portrait image");
  assert.doesNotMatch(globalCss, /\.visual-card|\.top-card|\.bottom-card/, "Floating hero cards should not be positioned with CSS");
  assert.doesNotMatch(globalCss, /mask-image/, "Composite hero image should not be faded with CSS masks");
  assert.doesNotMatch(globalCss, /\.hero-visual::before|\.hero-visual::after/, "Composite hero image should not be covered by CSS overlays");

  const asset = statSync(new URL("../public/hero-composite.png", import.meta.url));
  assert.ok(asset.size > 100_000, "Composite hero image should exist and be non-empty");
});
