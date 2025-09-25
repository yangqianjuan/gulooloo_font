import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await import(`@/messages/${locale}.json`).then(
    (m) => m.default
  );

  const title = messages.blog?.[`article${id}Title`] || `Blog Article ${id} - Gulooloo Tech`;
  const description = messages.blog?.[`article${id}BodyIntro`] || "Read our latest blog post about productivity, wellness, and technology.";

  return {
    title,
    description,
    metadataBase: new URL("https://guloolootech.com"),
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: `https://guloolootech.com/${locale}/blog/${id}`,
    },
    alternates: {
      canonical: `https://guloolootech.com/${locale}/blog/${id}`,
      languages: {
        "en": `https://guloolootech.com/en/blog/${id}`,
        "zh-CN": `https://guloolootech.com/zh/blog/${id}`,
        "fr": `https://guloolootech.com/fr/blog/${id}`,
        "es": `https://guloolootech.com/es/blog/${id}`,
        "ja": `https://guloolootech.com/ja/blog/${id}`,
        "ko": `https://guloolootech.com/ko/blog/${id}`,
        "pt": `https://guloolootech.com/pt/blog/${id}`,
        "zh-TW": `https://guloolootech.com/tw/blog/${id}`,
        "de": `https://guloolootech.com/de/blog/${id}`,
        "x-default": `https://guloolootech.com/en/blog/${id}`,
      },
    },
  };
}

export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}