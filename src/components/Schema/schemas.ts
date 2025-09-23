import {
  Organization,
  WebSite,
  SoftwareApplication,
  Article,
  BreadcrumbList,
  JsonLdSchema,
} from "./types";
import {
  iosLink_easy_notes,
  iosLink_go_fasting,
  iosLink_invoice_now,
  iosLink_qr_generator,
  andoridLink_easy_notes,
  andoridLink_go_fasting,
  andoridLink_invoice_now,
  andoridLink_qr_generator,
} from "@/utils/index";

// Base Organization Schema
export const createOrganizationSchema = (
  locale: string = "en"
): JsonLdSchema => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://guloolootech.com/#organization",
  name: "Gulooloo Tech Co., Limited",
  url: "https://guloolootech.com",
  logo: "https://guloolootech.com/logo.png",
  description:
    "Gulooloo Tech develops practical and wellness apps that help everyday people boost productivity and wellness.",
  foundingDate: "2020",
  numberOfEmployees: "11-50",
  sameAs: [
    "https://apps.apple.com/developer/gulooloo-tech-co-limited/id1234567890",
    "https://play.google.com/store/apps/developer?id=Gulooloo+Tech",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-XXX-XXX-XXXX",
    email: "support@guloolootech.com",
    contactType: "customer service",
    availableLanguage: ["en", "zh", "fr", "es", "ja", "ko", "pt", "de"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "CA",
    addressLocality: "San Francisco",
  },
});

// Website Schema
export const createWebSiteSchema = (locale: string = "en"): JsonLdSchema => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `https://guloolootech.com/${locale}#website`,
  url: `https://guloolootech.com/${locale}`,
  name: "Gulooloo Tech – Best Notes, Fasting & Invoice Apps",
  description:
    "Discover Easy Notes, GoFasting, Invoice Maker and more. Boost your productivity and wellness.",
  publisher: { "@id": "https://guloolootech.com/#organization" },
  inLanguage: ["en", "zh", "fr", "es", "ja", "ko", "pt", "tw", "de"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `https://guloolootech.com/${locale}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
});

// Software Application Schemas
export const createAppSchema = (
  appId: string,
  locale: string = "en"
): JsonLdSchema => {
  const appData = {
    easynotes: {
      name: "Easy Notes",
      description:
        "Capture ideal, organize thoughts, and track tasks effortlessly.",
      category: "ProductivityApplication",
      features: [
        "Write in Style With Rich Text Formatting",
        "Choose From A Wide Range Of Beautiful Backgrounds",
        "Use Widget And Hand-Drawing For Creative Freedom",
      ],
      version: "3.0.0",
      datePublished: "2020-01-01",
      downloadUrls: [iosLink_easy_notes, andoridLink_easy_notes],
    },
    invoicemaker: {
      name: "Invoice Maker",
      description:
        "Make invoices and estimates easily with a wide selection of beautiful templates.",
      category: "BusinessApplication",
      features: [
        "Create professional invoices in seconds",
        "Customize every detail to fit your needs",
        "Track invoices and manage payments easily",
      ],
      version: "2.5.0",
      datePublished: "2019-06-01",
      downloadUrls: [iosLink_invoice_now, andoridLink_invoice_now],
    },
    gofasting: {
      name: "GoFasting",
      description:
        "Tailor fasting plans for you, and provide step-by-step guidance.",
      category: "HealthApplication",
      features: [
        "Personalized fasting plans for every goal",
        "Smart tracking with helpful reminders",
        "Expert nutrition tips and healthy habits",
      ],
      version: "4.1.0",
      datePublished: "2021-03-01",
      downloadUrls: [iosLink_go_fasting, andoridLink_go_fasting],
    },
    QRgenerator: {
      name: "QR Code Generator",
      description: "Create stylish and functional QR codes for every purpose.",
      category: "UtilitiesApplication",
      features: [
        "Beautiful QR code templates library",
        "Custom colors, logos, and design presets",
        "High-quality output for any purpose",
      ],
      version: "1.8.0",
      datePublished: "2022-01-01",
      downloadUrls: [iosLink_qr_generator, andoridLink_qr_generator],
    },
  };

  const app = appData[appId as keyof typeof appData];
  if (!app) {
    throw new Error(`Unknown app ID: ${appId}`);
  }

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://guloolootech.com/${locale}/app/${appId}#app`,
    name: app.name,
    description: app.description,
    url: `https://guloolootech.com/${locale}/app/${appId}`,
    applicationCategory: app.category,
    operatingSystem: ["iOS", "Android"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.5,
      reviewCount: 1000,
      bestRating: 5,
      worstRating: 1,
    },
    screenshot: [
      `https://guloolootech.com/screenshots/${appId}-1.png`,
      `https://guloolootech.com/screenshots/${appId}-2.png`,
      `https://guloolootech.com/screenshots/${appId}-3.png`,
    ],
    featureList: app.features,
    publisher: { "@id": "https://guloolootech.com/#organization" },
    datePublished: app.datePublished,
    dateModified: new Date().toISOString().split("T")[0],
    version: app.version,
    downloadUrl: app.downloadUrls,
  };
};

// Article Schema for Blog Posts
export const createArticleSchema = (
  articleId: string,
  title: string,
  description: string,
  locale: string = "en"
): JsonLdSchema => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `https://guloolootech.com/${locale}/blog/${articleId}#article`,
  headline: title,
  description: description,
  image: `https://guloolootech.com/blog-images/${articleId}.webp`,
  author: {
    "@type": "Person",
    name: "Gulooloo Tech Team",
    url: "https://guloolootech.com/about",
  },
  publisher: { "@id": "https://guloolootech.com/#organization" },
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  url: `https://guloolootech.com/${locale}/blog/${articleId}`,
  mainEntityOfPage: `https://guloolootech.com/${locale}/blog/${articleId}`,
  articleSection: "Technology",
  wordCount: 1500,
  inLanguage: locale,
});

// Breadcrumb Schema
export const createBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
  locale: string = "en"
): JsonLdSchema => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Helper function to combine multiple schemas
export const combineSchemas = (...schemas: JsonLdSchema[]): JsonLdSchema[] => {
  return schemas;
};
