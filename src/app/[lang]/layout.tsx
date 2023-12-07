import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fontPrimary } from "../fonts";

import { Locale, locales } from "../i18n/i18n-config";
import ContactsBar from "../components/ContactsBar";
import SplashScreen from "../components/splash-screen/SplashScreen";

// Return a list of `params` to populate the [lang] dynamic segment
export async function generateStaticParams() {
  // returns array of possible lang values [{ lang: "en" }, { lang: "ru" }, { lang: "vi" }];
  return locales.map((locale) => ({ lang: locale }));
}

// Dynamic segments with `params` [lang] not supported in `generateStaticParams` will not be dynamically generated at runtime
export const dynamicParams = false;

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
        <SplashScreen />
        <ContactsBar />
        <Header lang={lang} />
        {children}
        <Footer />
      </body>
    </html>
  );
}