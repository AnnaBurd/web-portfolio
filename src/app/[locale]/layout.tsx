import "../globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { fontPrimary } from "../fonts";

type Props = {
  params: {
    locale: string;
  };
  children: React.ReactNode;
};

export default function Layout({ children, params: { locale } }: Props) {
  return (
    // TODO: add lang="vn" and lang="ru"
    <html lang={locale}>
      <body className={fontPrimary.className}>
        <div>Query params Lang = {locale}</div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
