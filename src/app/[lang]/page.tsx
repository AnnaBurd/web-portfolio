import Link from "next/link";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import About from "./components/About";

type Props = {
  params: { lang: string };
};

// export async function generateMetadata({ params: { lang } }: Props) {
//   return {
//     title: "title of index page",
//   };
// }

export default function Home({ params: { lang } }: Props) {
  console.log("home page render [lang] = ", lang);

  return (
    <main>
      <div>
        <Link
          className="m-2 bg-indigo-500 p-6"
          href={`/${lang}/work/project-0`}
        >
          1
        </Link>
        <Link
          className="m-2 bg-indigo-500 p-6"
          href={`/${lang}/work/project-1`}
        >
          2
        </Link>
        <Link className="m-2 bg-indigo-500 p-6" href={`/${lang}/work/ываыва`}>
          sdfsdf
        </Link>
        <Link className="m-2 bg-indigo-500 p-6" href={`/${lang}/work/`}>
          empty
        </Link>
      </div>
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
