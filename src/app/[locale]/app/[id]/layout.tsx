import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const revalidate = 7200;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const validIds = ["gofasting", "invoicemaker", "easynotes", "QRgenerator"];
  if (!validIds.includes(id)) {
    notFound();
  }

  const messages = await import(`@/messages/${locale}.json`).then(
    (m) => m.default
  );

  const appNames: Record<string, string> = {
    gofasting: "GoFasting",
    invoicemaker: "Invoice Maker",
    easynotes: "Easy Notes",
    QRgenerator: "QR Generator"
  };

  const title = `${appNames[id]} - Gulooloo Tech`;
  const description = `Discover ${appNames[id]} - A powerful and easy-to-use productivity app by Gulooloo Tech.`;

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
      url: `https://guloolootech.com/${locale}/app/${id}`,
    },
    alternates: {
      canonical: `https://guloolootech.com/${locale}/app/${id}`,
      languages: {
        "en": `https://guloolootech.com/en/app/${id}`,
        "zh-CN": `https://guloolootech.com/zh/app/${id}`,
        "fr": `https://guloolootech.com/fr/app/${id}`,
        "es": `https://guloolootech.com/es/app/${id}`,
        "ja": `https://guloolootech.com/ja/app/${id}`,
        "ko": `https://guloolootech.com/ko/app/${id}`,
        "pt": `https://guloolootech.com/pt/app/${id}`,
        "zh-TW": `https://guloolootech.com/tw/app/${id}`,
        "de": `https://guloolootech.com/de/app/${id}`,
        "x-default": `https://guloolootech.com/en/app/${id}`,
      },
    },
  };
}

export default function AppDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}