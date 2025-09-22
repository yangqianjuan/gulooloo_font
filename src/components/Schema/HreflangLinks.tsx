interface HreflangLinksProps {
  baseUrl: string;
  currentLocale: string;
  pageType?: 'home' | 'app' | 'blog' | 'about' | 'privacy' | 'terms';
  pageId?: string;
}

const LANGUAGE_MAPPING = {
  en: 'en',
  zh: 'zh-CN',
  fr: 'fr',
  es: 'es',
  ja: 'ja',
  ko: 'ko',
  pt: 'pt',
  tw: 'zh-TW',
  de: 'de'
} as const;

export default function HreflangLinks({
  baseUrl,
  currentLocale,
  pageType = 'home',
  pageId
}: HreflangLinksProps) {
  const generateUrl = (locale: string) => {
    let path = `/${locale}`;

    switch (pageType) {
      case 'app':
        path += `/app/${pageId}`;
        break;
      case 'blog':
        path += pageId ? `/blog/${pageId}` : '/blog';
        break;
      case 'about':
        path += '/about';
        break;
      case 'privacy':
        path += '/privacy-policy';
        break;
      case 'terms':
        path += '/terms-of-use';
        break;
      default:
        // home page, path already set
        break;
    }

    return `${baseUrl}${path}`;
  };

  return (
    <>
      {/* Generate hreflang links for all supported languages */}
      {Object.entries(LANGUAGE_MAPPING).map(([locale, hreflang]) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={hreflang}
          href={generateUrl(locale)}
        />
      ))}

      {/* x-default always points to English */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={generateUrl('en')}
      />

      {/* Canonical link for current page */}
      <link
        rel="canonical"
        href={generateUrl(currentLocale)}
      />
    </>
  );
}