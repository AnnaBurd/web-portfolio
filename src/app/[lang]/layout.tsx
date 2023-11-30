import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fontPrimary } from "../fonts";

// Return a list of `params` to populate the [lang] dynamic segment
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ru" }, { lang: "vn" }];
}

// Dynamic segments with `params` [lang] not supported in `generateStaticParams` will not be dynamically generated at runtime
export const dynamicParams = false;

type Props = {
  params: {
    lang: string;
  };
  children: React.ReactNode;
};

export default function Layout({ children, params: { lang } }: Props) {
  return (
    <html lang={lang}>
      <body className={fontPrimary.className}>
        <div className="background-red fixed top-1/2">
          layout [Lang] = {lang}
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
