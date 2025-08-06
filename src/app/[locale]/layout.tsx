// app/[locale]/layout.tsx
import "../globals.css";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

// 字体加载
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
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
    title: messages.metaTitle || "Default Title",
    description: messages.metaDescription || "Default description.",
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
    <html lang={locale} className={poppins.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://guloolootech.com/en/"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://guloolootech.com/es/"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://guloolootech.com/fr/"
        />
        <link
          rel="alternate"
          hrefLang="ja"
          href="https://guloolootech.com/ja/"
        />
        <link
          rel="alternate"
          hrefLang="ko"
          href="https://guloolootech.com/ko/"
        />
        <link
          rel="alternate"
          hrefLang="zh-TW"
          href="https://guloolootech.com/tw/"
        />
        <link
          rel="alternate"
          hrefLang="zh-CN"
          href="https://guloolootech.com/cn/"
        />
        <link
          rel="alternate"
          hrefLang="pt"
          href="https://guloolootech.com/pt/"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://guloolootech.com/en/"
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
