// app/[locale]/layout.tsx
import "../globals.css";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

// 字体加载优化
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: true,
  variable: "--font-poppins",
});

// ✅ 动态设置 Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 导入对应语言的 messages
  const messages = await import(`@/messages/${locale}.json`).then(
    (m) => m.default
  );
  return {
    title: messages.home?.metaTitle || "Default Title",
    description: messages.home?.metaDescription || "Default description.",
    alternates: {
      languages: {
        en: "https://guloolootech.com/en",
        zh: "https://guloolootech.com/zh",
        fr: "https://guloolootech.com/fr",
        es: "https://guloolootech.com/es",
        ja: "https://guloolootech.com/ja",
        ko: "https://guloolootech.com/ko",
        pt: "https://guloolootech.com/pt",
        tw: "https://guloolootech.com/tw",
        de: "https://guloolootech.com/de",
      },
    },
  };
}

// ✅ 布局组件
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await import(`@/messages/${locale}.json`).then(
    (m) => m.default
  );

  return (
    <html lang={locale} className={poppins.variable}>
      <body className={poppins.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
