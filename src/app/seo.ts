import { Locale, locales, defaultLocale } from "./i18n/i18n-config";

// Canonical production origin. Override via env when deploying to previews.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://annaburd.me"
).replace(/\/$/, "");

// Default social-share image used when a page does not provide its own.
export const defaultOgImage = "/images/work/real-estate-app/mockup.png";

// Localized author / site naming used across metadata and structured data.
export const siteMeta: Record<
  Locale,
  { siteName: string; authorName: string; locale: string }
> = {
  en: {
    siteName: "Anna's portfolio",
    authorName: "Anna Burdanova",
    locale: "en_US",
  },
  ru: {
    siteName: "Портфолио Анны",
    authorName: "Анна Бурданова",
    locale: "ru_RU",
  },
  vi: {
    siteName: "Hồ sơ của Anna",
    authorName: "Anna Burdanova",
    locale: "vi_VN",
  },
};

// Build the `alternates` block (canonical + hreflang languages) for a path.
// `path` is the path *without* the locale prefix, e.g. "" for home or
// "/work/real-estate-app".
export function buildAlternates(lang: Locale, path: string = "") {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `${siteUrl}/${locale}${path}`;
  }
  // x-default points search engines at the default locale.
  languages["x-default"] = `${siteUrl}/${defaultLocale}${path}`;

  return {
    canonical: `${siteUrl}/${lang}${path}`,
    languages,
  };
}

// Truncate long copy to a SERP-friendly length without cutting words.
export function clampDescription(text: string, max: number = 160): string {
  if (text.length <= max) return text;
  const truncated = text.slice(0, max);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : max).trim()}…`;
}
