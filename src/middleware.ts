import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

// Custom locale detection based on Accept-Language header
function detectLocaleFromAcceptLanguage(request: NextRequest): string | null {
  const acceptLanguage = request.headers.get('accept-language');

  if (!acceptLanguage) {
    return null;
  }

  // Parse Accept-Language header: zh-CN,zh;q=0.9,en;q=0.8
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [locale, quality] = lang.trim().split(';');
      const q = quality ? parseFloat(quality.split('=')[1]) : 1.0;
      return { locale: locale.trim(), quality: q };
    })
    .sort((a, b) => b.quality - a.quality);

  // Map common language codes to our supported locales
  const localeMap: Record<string, string> = {
    'zh-CN': 'zh',
    'zh-Hans': 'zh',
    'zh-TW': 'tw',
    'zh-Hant': 'tw',
    'en-US': 'en',
    'en-GB': 'en',
    'es-ES': 'es',
    'fr-FR': 'fr',
    'ja-JP': 'ja',
    'ko-KR': 'ko',
    'pt-BR': 'pt',
    'pt-PT': 'pt',
    'de-DE': 'de'
  };

  // Find the best matching locale
  for (const { locale } of languages) {
    // Check exact match first
    if (routing.locales.includes(locale as (typeof routing.locales)[number])) {
      return locale;
    }

    // Check mapped locales
    if (localeMap[locale] && routing.locales.includes(localeMap[locale] as (typeof routing.locales)[number])) {
      return localeMap[locale];
    }

    // Check base language (e.g., 'zh' from 'zh-CN')
    const baseLang = locale.split('-')[0];
    if (routing.locales.includes(baseLang as (typeof routing.locales)[number])) {
      return baseLang;
    }
  }

  return null;
}

const intlMiddleware = createMiddleware({
  ...routing,
  localeDetection: true,
  // Custom locale detection
  localePrefix: 'as-needed'
});

export default function middleware(request: NextRequest) {
  // Check if path already has a locale
  const pathname = request.nextUrl.pathname;
  const hasLocaleInPath = routing.locales.some((locale) =>
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If no locale in path, detect from Accept-Language header
  if (!hasLocaleInPath) {
    const detectedLocale = detectLocaleFromAcceptLanguage(request);

    if (detectedLocale && detectedLocale !== routing.defaultLocale) {
      const url = request.nextUrl.clone();
      url.pathname = `/${detectedLocale}${pathname}`;
      return NextResponse.redirect(url);
    }
  }

  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
