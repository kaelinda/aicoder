import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "周作松 · AI码人士",
  description:
    "周作松（AI码人士），iOS + AI Agent 开发者。日常使用 Swift / SwiftUI，也做 AI Agent 与内容创作。",
  metadataBase: new URL("https://aicoder.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "周作松 · AI码人士",
    description: "iOS + AI Agent 开发者",
    url: "https://aicoder.vercel.app",
    siteName: "AI码人士",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
