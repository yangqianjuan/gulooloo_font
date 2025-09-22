import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// 为 about 页面动态生成 Metadata
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

  const title = messages.about?.metaTitleAbout || "About - Gulooloo Tech";
  const description = messages.about?.metaDescriptionAbout || "Learn about Gulooloo Tech team and our mission to create amazing productivity and wellness apps.";

  return {
    title,
    description,
    metadataBase: new URL("https://guloolootech.com"),
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `https://guloolootech.com/${locale}/about`,
    },
    alternates: {
      canonical: `https://guloolootech.com/${locale}/about`,
      languages: {
        "en": "https://guloolootech.com/en/about",
        "zh-CN": "https://guloolootech.com/zh/about",
        "fr": "https://guloolootech.com/fr/about",
        "es": "https://guloolootech.com/es/about",
        "ja": "https://guloolootech.com/ja/about",
        "ko": "https://guloolootech.com/ko/about",
        "pt": "https://guloolootech.com/pt/about",
        "zh-TW": "https://guloolootech.com/tw/about",
        "de": "https://guloolootech.com/de/about",
        "x-default": "https://guloolootech.com/en/about",
      },
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}