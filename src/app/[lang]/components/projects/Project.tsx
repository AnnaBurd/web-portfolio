import Image from "next/image";
import Link from "next/link";

import ButtonLink from "@/app/components/ui/ButtonLink";
import { fontSecondary } from "@/app/fonts";

import Dots from "./Dots";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import styles from "./Project.module.css";
import { ProjectData } from "../../../Model";
import { Locale } from "@/app/i18n/i18n-config";
import { useTranslation } from "@/app/i18n/server";

type Props = {
  data: ProjectData;
  lang: Locale;
};

const Project: React.FC<Props> = async ({ data, lang }) => {
  const translation = (await useTranslation(lang, "common")).t;

  return (
    <article className="gap-x  grid py-10 md:grid-cols-2 ">
      <div className="pointer-events-none">
        <h4 className="mb-1 text-sm font-medium uppercase tracking-wide opacity-30">
          {data.mainTag}
        </h4>
        <h2
          className={
            fontSecondary.className + `  mb-4 font-black leading-tight`
          }
        >
          {data.title}
        </h2>
        <div className="mb-3 flex flex-wrap gap-2 md:mb-8">
          {data.tags.map((tag) => (
            <div
              key={tag}
              className="whitespace-nowrap bg-[--background-accent] px-2.5 py-1 text-xs font-bold tracking-wide"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none">
        <p className=" text-[0.95rem] leading-relaxed [text-wrap:balance]  md:max-w-prose md:text-base md:tracking-wide ">
          {data.introduction}
        </p>
        <div className="pointer-events-auto mt-6 flex gap-4 md:mt-8 ">
          <ButtonLink
            href={`${lang}/work/${data.slug}`}
            className="min-w-[7.5rem] !px-4 lg:min-w-[9rem]"
          >
            {translation("btn.about")}
          </ButtonLink>
          <ButtonLink
            href={data.previewUrl}
            kind="secondary"
            className="min-w-[7.5rem] !px-4 lg:min-w-[9rem]"
          >
            {translation("btn.live")}
          </ButtonLink>
        </div>
      </div>

      <div className=" row-start-2 mb-11 flex h-[clamp(20rem,35vh,28rem)] items-center md:col-start-2  md:row-start-1 md:row-end-3 md:mb-0 md:h-full md:w-full md:place-self-center">
        <Link
          href={`${lang}/work/${data.slug}`}
          className={`${styles.preview} group relative block h-full max-h-[27rem] w-full  `}
        >
          <span className=" block h-full  w-full transform-gpu transition-all duration-300 ease-in-out @container before:absolute before:inset-0 before:-z-10 before:bg-[--background-accent] group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:duration-200 group-hover:ease-linear">
            <span className="@xs:width-[95%]   relative mx-auto block h-full ">
              <Image
                src={data.mockupAsset}
                alt={`A mokup of the ${data.title} project`}
                // className="@md:![object-position:center_42%]"
                sizes="(min-width: 768px) 50vw,(min-width: 1536px) 600px,  100vw"
                style={{ objectFit: "cover", objectPosition: "center 38%" }}
                quality={100}
                fill
              />
            </span>
          </span>
          <div className="absolute bottom-[-1.5rem] left-[-1.5rem] h-[45%]   min-h-[10rem] text-[rgb(var(--text-rgb))] opacity-30  md:bottom-[-1.8rem] md:left-[-1.9rem]">
            <Dots />
          </div>
          <div
            className={`${styles.arrow} absolute bottom-0 right-0 flex  items-center gap-1.5 opacity-30 `}
          >
            <span className="text-xs font-medium tracking-wide md:text-sm ">
              {translation("btn.project")}
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
