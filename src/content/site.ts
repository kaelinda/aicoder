export const profile = {
  name: "AI码人士",
  nameEn: "AI Coder",
  handle: "AI码人士",
  tagline: "iOS + AI Agent 开发者",
} as const;

export const about = [
  "本职做 iOS。日常用 Swift 和 SwiftUI 写应用，也会碰一些 Web 前端和后端。",
  "业余在做 AI Agent 相关的项目，常用 Claude Code、Codex 和 Grok Bot。内容写在公众号、小红书、知乎和 X，主要是开发笔记和工具体验。",
] as const;

export const skills = [
  {
    title: "Swift / SwiftUI",
    detail: "本职方向。用 Swift 和 SwiftUI 做 iOS 应用。",
  },
  {
    title: "AI Agents",
    detail: "把编码代理接进自己的项目和工作流。",
  },
  {
    title: "Claude Code / Codex / Grok Bot",
    detail: "目前常用的几款编码代理，用来写代码、改项目、跑流程。",
  },
  {
    title: "内容创作（博客 / 小红书 / 知乎）",
    detail: "把做过的东西写成以后还能看懂的笔记。",
  },
] as const;

export const links = [
  { label: "GitHub", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "博客", href: "#" },
  { label: "小红书", href: "#" },
  { label: "知乎", href: "#" },
] as const;
