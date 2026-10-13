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
    title: "iOS / Swift",
    detail: "本职方向。用 Swift 和 SwiftUI 做 iOS 应用。",
  },
  {
    title: "SwiftUI",
    detail: "苹果的声明式 UI 框架，构建流畅的原生界面。",
  },
  {
    title: "AI Agents",
    detail: "把编码代理接进自己的项目和工作流。",
  },
  {
    title: "LLM tooling",
    detail: "围绕大语言模型构建工具和工作流，提升开发效率。",
  },
  {
    title: "Automation",
    detail: "用脚本和工具自动化重复任务，专注于创造性工作。",
  },
  {
    title: "Product",
    detail: "从想法到产品的全流程：设计、开发、测试、发布。",
  },
] as const;

export const links = [
  { label: "GitHub", href: "#" },
  { label: "X", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Email", href: "#" },
] as const;