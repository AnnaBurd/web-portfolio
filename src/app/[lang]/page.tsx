import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import About from "./components/About";
import { useTranslation } from "../i18n/server";
import { Locale } from "../i18n/i18n-config";

type Props = {
  params: { lang: Locale };
};

// export async function generateMetadata({ params: { lang } }: Props) {
//   return {
//     title: "title of index page",
//   };
// }

export default async function Home({ params: { lang } }: Props) {
  const { t } = await useTranslation(lang, "home");

  console.log("Generating home page: ", "lang=", lang, t("title"));

  return (
    <main>
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
