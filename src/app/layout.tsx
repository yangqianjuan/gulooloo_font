// src/app/layout.tsx
// 字体加载
// import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

// ✅ 动态设置 Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  // 导入对应语言的 messages
  const messages = await import(`@/messages/${locale}.json`).then(
    (m) => m.default
  );
  return {
    title: messages.home?.metaTitle || "Default Title",
    description: messages.home?.metaDescription || "Default description.",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
