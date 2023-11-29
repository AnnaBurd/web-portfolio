import About from "./components/sections/About";
import Hero from "./components/sections/hero/Hero";
import Projects from "./components/sections/projects/Projects";
import { locales } from "../../../i18n-config";

type Props = {
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  return {
    title: "title of index page",
  };
}

export default function Home({ params: { locale } }: Props) {
  console.log("home page component rendered");

  return (
    <main>
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
