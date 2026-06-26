import "../globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { fontPrimary } from "../fonts";

import { Locale, locales } from "../i18n/i18n-config";
import ContactsBar from "../components/contacts/ContactsBar";
import SplashScreen from "../components/splash-screen/SplashScreen";
import { ContextProvider } from "../context/context-provider";
import { siteUrl, siteMeta, buildAlternates } from "../seo";
import type { Metadata } from "next";

// Return a list of `params` to populate the [lang] dynamic segment
export async function generateStaticParams() {
  // returns array of possible lang values [{ lang: "en" }, { lang: "ru" }, { lang: "vi" }];
  return locales.map((locale) => ({ lang: locale }));
}

// Dynamic segments with `params` [lang] not supported in `generateStaticParams` will not be dynamically generated at runtime
export const dynamicParams = false;

// Localized home-page copy.
const homeCopy: Record<
  Locale,
  { title: string; titleLabel: string; description: string }
> = {
  en: {
    title: "Home · Anna's portfolio",
    titleLabel: "Home",
    description:
      "Anna Burdanova is a web developer experienced in React.js, Next.js, TypeScript, JavaScript, HTML, CSS, and more.",
  },
  ru: {
    title: "Главная · Портфолио Анны",
    titleLabel: "Главная",
    description:
      "Анна Бурданова - веб-разработчик, опытный в React.js, Next.js, TypeScript, JavaScript, HTML, CSS и многом другом.",
  },
  vi: {
    title: "Trang chủ · Hồ sơ của Anna",
    titleLabel: "Trang chủ",
    description:
      "Anna Burdanova là một nhà phát triển web có kinh nghiệm về React.js, Next.js, TypeScript, JavaScript, HTML, CSS và nhiều hơn nữa.",
  },
};

// Metadata for the page
export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const copy = homeCopy[lang] ?? homeCopy.en;
  const meta = siteMeta[lang] ?? siteMeta.en;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: copy.title,
      template: `%s · ${meta.siteName}`,
    },
    description: copy.description,
    applicationName: meta.siteName,
    authors: [{ name: meta.authorName, url: siteUrl }],
    creator: meta.authorName,
    keywords: [
      meta.authorName,
      "web developer",
      "frontend developer",
      "React",
      "Next.js",
      "TypeScript",
      "portfolio",
    ],
    alternates: buildAlternates(lang, ""),
    openGraph: {
      type: "website",
      siteName: meta.siteName,
      title: copy.title,
      description: copy.description,
      url: `${siteUrl}/${lang}`,
      locale: meta.locale,
      // og:image is supplied by the colocated opengraph-image.tsx route.
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      // twitter:image is supplied by the colocated twitter-image.tsx route.
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

type Props = {
  params: {
    lang: Locale;
  };
  children: React.ReactNode;
};

export default function Layout({ children, params: { lang } }: Props) {
  const meta = siteMeta[lang] ?? siteMeta.en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: meta.authorName,
        url: `${siteUrl}/${lang}`,
        jobTitle: "Web Developer",
        knowsAbout: [
          "React.js",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
        ],
        sameAs: ["https://github.com/AnnaBurd"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: meta.siteName,
        inLanguage: lang,
        author: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <html lang={lang}>
      <body className={fontPrimary.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ContextProvider>
          <SplashScreen />
          <ContactsBar />
          <Header lang={lang} />
          {children}
          <Footer lang={lang} />
        </ContextProvider>
      </body>
    </html>
  );
}
