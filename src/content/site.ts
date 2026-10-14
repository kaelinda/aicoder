export const profile = {
  name: "AI码人士",
  nameEn: "AI Coder",
  handle: "AI码人士",
  tagline: "iOS + AI Agent 开发者",
} as const;

export const about = [
  "本职做 iOS。日常用 Swift 和 SwiftUI 写应用，也会碰一些 Web 前端和后端。",
  "业余在做 AI Agent 相关项目，常用 Claude Code、Codex 与 Grok Bot。内容写在公众号、小红书、知乎和 X，主要是开发笔记与工具体验。",
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
    detail: "围绕大语言模型构建工具与工作流，提升开发效率。",
  },
  {
    title: "Automation",
    detail: "用脚本和工具自动化重复任务，把精力留给创造性工作。",
  },
  {
    title: "Product",
    detail: "从想法到产品：设计、开发、测试、发布。",
  },
] as const;

export const links = [
  { label: "GitHub", href: "https://github.com/kaelinda" },
  { label: "X", href: "https://x.com/KaelLVLinda" }
] as const;

export const moos = [
  "不做牛马，做牛码",
  "代码写得牛，产品才够硬",
  "今天的 bug 今天修",
  "Agent 跑腿，我拍板",
  "if (code === 牛) ship();",
  "哞 —— build passed",
] as const;

export const ticker = [
  "$ cowsay 牛码",
  "git commit -m \"牛\"",
  "git push --force-moo",
  "404: 牛马 not found",
  "sudo make me 牛",
  "牛码 ≠ 牛马",
  "rm -rf ./内卷",
  "LGTM, moo",
] as const;
