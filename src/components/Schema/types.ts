// Schema.org types for JSON-LD structured data
export interface Organization {
  "@type": "Organization";
  "@id": string;
  name: string;
  url: string;
  logo: string;
  description: string;
  foundingDate: string;
  numberOfEmployees: string;
  sameAs: string[];
  contactPoint: ContactPoint;
  address: PostalAddress;
}

export interface ContactPoint {
  "@type": "ContactPoint";
  telephone: string;
  email: string;
  contactType: "customer service";
  availableLanguage: string[];
}

export interface PostalAddress {
  "@type": "PostalAddress";
  addressCountry: string;
  addressRegion: string;
  addressLocality: string;
}

export interface WebSite {
  "@type": "WebSite";
  "@id": string;
  url: string;
  name: string;
  description: string;
  publisher: { "@id": string };
  inLanguage: string[];
  potentialAction?: SearchAction;
}

export interface SearchAction {
  "@type": "SearchAction";
  target: {
    "@type": "EntryPoint";
    urlTemplate: string;
  };
  "query-input": string;
}

export interface SoftwareApplication {
  "@type": "SoftwareApplication";
  "@id": string;
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string[];
  offers: Offer;
  aggregateRating?: AggregateRating;
  screenshot: string[];
  featureList: string[];
  publisher: { "@id": string };
  datePublished: string;
  dateModified: string;
  version: string;
  downloadUrl: string[];
}

export interface Offer {
  "@type": "Offer";
  price: string;
  priceCurrency: string;
  availability: string;
}

export interface AggregateRating {
  "@type": "AggregateRating";
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
}

export interface Article {
  "@type": "Article";
  "@id": string;
  headline: string;
  description: string;
  image: string;
  author: Person;
  publisher: { "@id": string };
  datePublished: string;
  dateModified: string;
  url: string;
  mainEntityOfPage: string;
  articleSection: string;
  wordCount: number;
  inLanguage: string;
}

export interface Person {
  "@type": "Person";
  name: string;
  url: string;
}

export interface BreadcrumbList {
  "@type": "BreadcrumbList";
  itemListElement: ListItem[];
}

export interface ListItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

export interface JsonLdSchema {
  "@context": "https://schema.org";
  [key: string]: unknown;
}