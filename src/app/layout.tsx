import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://aicoder-three.vercel.app";

const description =
  "AI码人士（AI Coder），iOS + AI Agent 开发者。日常使用 Swift / SwiftUI，也做 AI Agent 与内容创作。";

export const metadata: Metadata = {
  title: "AI码人士 · AI Coder",
  description,
  applicationName: "AI码人士",
  authors: [{ name: "AI码人士" }],
  creator: "AI码人士",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI码人士 · AI Coder",
    description: "iOS + AI Agent 开发者",
    url: siteUrl,
    siteName: "AI码人士",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AI码人士 · AI Coder",
    description: "iOS + AI Agent 开发者",
  },
};

const themeBoot = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
      className={mono.variable}
    >
      <head>
        <script id="theme-boot" dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
