import "../globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { fontPrimary } from "../fonts";

import { Locale, locales } from "../i18n/i18n-config";
import ContactsBar from "../components/contacts/ContactsBar";
import SplashScreen from "../components/splash-screen/SplashScreen";
import { ContextProvider } from "../context/context-provider";

// Return a list of `params` to populate the [lang] dynamic segment
export async function generateStaticParams() {
  // returns array of possible lang values [{ lang: "en" }, { lang: "ru" }, { lang: "vi" }];
  return locales.map((locale) => ({ lang: locale }));
}

// Dynamic segments with `params` [lang] not supported in `generateStaticParams` will not be dynamically generated at runtime
export const dynamicParams = false;

// Metadata for the page
export async function generateMetadata({ params: { lang } }: Props) {
  if (lang === "ru") {
    return {
      title: "Главная · Портфолио Анны",
      description:
        "Анна Бурданова - веб-разработчик, опытный в React.js, Next.js, TypeScript, JavaScript, HTML, CSS и многом другом.",
    };
  }

  if (lang === "vi") {
    return {
      title: "Trang chủ · Hồ sơ của Anna",
      description:
        "Anna Burdanova là một nhà phát triển web có kinh nghiệm về React.js, Next.js, TypeScript, JavaScript, HTML, CSS và nhiều hơn nữa.",
    };
  }

  return {
    title: "Home · Anna's portfolio",
    description:
      "Anna Burdanova is a web developer experienced in React.js, Next.js, TypeScript, JavaScript, HTML, CSS, and more.",
  };
}

type Props = {
  params: {
    lang: Locale;
  };
  children: React.ReactNode;
};

export default function Layout({ children, params: { lang } }: Props) {
  return (
    <html lang={lang}>
      <body className={fontPrimary.className}>
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
