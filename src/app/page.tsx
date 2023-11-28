// import Image from "next/image";

import About from "./components/About";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
