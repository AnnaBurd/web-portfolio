import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import About from "./components/About";
import { Locale } from "../i18n/i18n-config";

type Props = {
  params: { lang: Locale };
};

export default async function Home({ params: { lang } }: Props) {
  return (
    <main>
      <Hero lang={lang} />
      <Projects lang={lang} />
      <About lang={lang} />
    </main>
  );
}
