// app/[locale]/layout.tsx
import "../globals.css";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import JsonLd from "@/components/Schema/JsonLd";
import { createOrganizationSchema, createWebSiteSchema, combineSchemas } from "@/components/Schema/schemas";

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
    title:
      messages.home?.metaTitle ||
      "Gulooloo Tech – Best Notes, Fasting & Invoice Apps",
    description:
      messages.home?.metaDescription ||
      "Discover Easy Notes, GoFasting, Invoice Maker and more. Boost your productivity and wellness.",
    metadataBase: new URL("https://guloolootech.com"),
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      title:
        messages.home?.metaTitle ||
        "Gulooloo Tech – Best Notes, Fasting & Invoice Apps",
      description:
        messages.home?.metaDescription ||
        "Discover Easy Notes, GoFasting, Invoice Maker and more. Boost your productivity and wellness.",
    },
    alternates: {
      canonical: `https://guloolootech.com/${locale}`,
      languages: {
        "en": "https://guloolootech.com/en",
        "zh-CN": "https://guloolootech.com/zh",
        "fr": "https://guloolootech.com/fr",
        "es": "https://guloolootech.com/es",
        "ja": "https://guloolootech.com/ja",
        "ko": "https://guloolootech.com/ko",
        "pt": "https://guloolootech.com/pt",
        "zh-TW": "https://guloolootech.com/tw",
        "de": "https://guloolootech.com/de",
        "x-default": "https://guloolootech.com/en",
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

  // Create JSON-LD schemas
  const organizationSchema = createOrganizationSchema(locale);
  const websiteSchema = createWebSiteSchema(locale);
  const schemas = combineSchemas(organizationSchema, websiteSchema);

  return (
    <html lang={locale} className={poppins.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* JSON-LD Structured Data */}
        <JsonLd data={schemas} />

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H7WB9F6GQD"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H7WB9F6GQD');
            `,
          }}
        />
      </head>
      <body className={poppins.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
