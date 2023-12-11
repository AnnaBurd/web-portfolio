import Image from "next/image";
import Link from "next/link";

import ButtonLink from "@/app/components/ui/ButtonLink";
import { fontSecondary } from "@/app/fonts";

import Dots from "./Dots";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import styles from "./Project.module.css";
import { ProjectData } from "./Model";
import { Locale } from "@/app/i18n/i18n-config";

type Props = {
  data: ProjectData;
  lang: Locale;
};

const Project: React.FC<Props> = ({ data, lang }) => {
  console.log("Rendering project", data, lang);

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
          {data.title}
        </h2>
        <div className="mb-8 flex gap-2">
          {data.tags.map((tag) => (
            <div
              key={tag}
              className="bg-[--background-accent] px-2.5 py-1 text-xs font-bold tracking-wide "
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none">
        <p className=" max-w-prose text-base leading-relaxed tracking-wide [text-wrap:balance]">
          {data.introduction}
        </p>
        <div className="pointer-events-auto mt-8 flex gap-4">
          <ButtonLink
            href={`${lang}/work/${data.slug}`}
            className="min-w-[9rem]"
          >
            About
          </ButtonLink>
          <ButtonLink
            href={data.previewUrl}
            kind="secondary"
            className="min-w-[9rem]"
          >
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
              src={data.previewImg}
              alt={`A mokup of the ${data.title} project`}
              width={400}
              height={400}
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
