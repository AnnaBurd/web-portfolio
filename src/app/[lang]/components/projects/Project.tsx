import Image from "next/image";
import Link from "next/link";

import ButtonLink from "@/app/components/ui/ButtonLink";
import { fontSecondary } from "@/app/fonts";

import mockupPicture from "@/posts/project-0/mokup.jpeg";
import Dots from "./Dots";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import styles from "./Project.module.css";

type Props = {};

const Project: React.FC<Props> = ({}) => {
  return (
    <article className="gap-x  grid grid-cols-2">
      <div className="pointer-events-none">
        <h4 className="mb-1 text-sm font-medium uppercase tracking-wide opacity-30">
          Latest work
        </h4>
        <h2
          className={
            fontSecondary.className + `  mb-4 font-black leading-tight`
          }
        >
          Geology Specialized AI Translator App
        </h2>
        <div className="mb-8 flex gap-2">
          <div className="bg-[--background-accent] px-2.5 py-1 text-xs font-bold tracking-wide">
            Website Design
          </div>
          <div className="bg-[--background-accent] px-2.5 py-1 text-xs font-bold tracking-wide">
            Webflow develompent
          </div>
          <div className="bg-[--background-accent] px-2.5 py-1 text-xs font-bold tracking-wide">
            Concept
          </div>
        </div>
      </div>

      <div className="pointer-events-none">
        <p className=" max-w-prose text-base leading-relaxed tracking-wide [text-wrap:balance]">
          Full website design and build for a concept team collaboration
          platform. This website also includes a beautiful blog. I have built
          the website and the blog in Webflow which has one of the best CMS for
          blog hosting.
        </p>
        <div className="pointer-events-auto mt-8 flex gap-4">
          <ButtonLink href="/work/project-0" className="min-w-[9rem]">
            About
          </ButtonLink>
          <ButtonLink href="/#" kind="secondary" className="min-w-[9rem]">
            View live
          </ButtonLink>
        </div>
      </div>

      <div className=" col-start-2 row-start-1 row-end-3 place-self-center ">
        <Link
          href="/work/project-0"
          className={`${styles.preview} group relative`}
        >
          <span className="block transform-gpu transition-all duration-300 ease-in-out before:absolute   before:inset-0 before:-z-10 before:bg-[--background-accent] group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:duration-200 group-hover:ease-linear">
            <Image
              src={mockupPicture}
              alt="A mokup of a project"
              className=" "
            />
          </span>
          <div className="absolute bottom-[-1.8rem] left-[-1.9rem] h-[45%]   text-[rgb(var(--text-rgb))] opacity-30">
            <Dots />
          </div>
          <div
            className={`${styles.arrow} absolute bottom-0 right-0 flex  items-center gap-1.5 opacity-30 `}
          >
            <span className="text-sm font-medium tracking-wide ">
              See this project
            </span>
            <span className={styles["arrow-icon"]}>
              <ArrowRight size={20} weight="regular" />
            </span>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Project;
