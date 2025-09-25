import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const revalidate = 1800;

// 为 blog 页面动态生成 Metadata
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

  const title = messages.blog?.metaTitleBlog || "Blog - Gulooloo Tech";
  const description = messages.blog?.metaDescriptionBlog || "Read our latest blog posts about productivity, wellness, and technology.";

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
      url: `https://guloolootech.com/${locale}/blog`,
    },
    alternates: {
      canonical: `https://guloolootech.com/${locale}/blog`,
      languages: {
        "en": "https://guloolootech.com/en/blog",
        "zh-CN": "https://guloolootech.com/zh/blog",
        "fr": "https://guloolootech.com/fr/blog",
        "es": "https://guloolootech.com/es/blog",
        "ja": "https://guloolootech.com/ja/blog",
        "ko": "https://guloolootech.com/ko/blog",
        "pt": "https://guloolootech.com/pt/blog",
        "zh-TW": "https://guloolootech.com/tw/blog",
        "de": "https://guloolootech.com/de/blog",
        "x-default": "https://guloolootech.com/en/blog",
      },
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}