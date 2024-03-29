import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { fontSecondary } from "@/app/fonts";

import Link from "@/app/components/ui/Link";
import Markdown from "./components/Markdown";

import { Locale } from "@/app/i18n/i18n-config";
import { getProjectData } from "@/scripts/getProjectsData";
import { useTranslation } from "@/app/i18n/server";
import Reveal from "@/app/components/ui/Reveal";

type Props = {
  params: { slug: string; lang: Locale };
};

const ProjectPage: React.FC<Props> = async ({ params }) => {
  const projectData = getProjectData(params.slug, params.lang);

  const translation = (await useTranslation(params.lang, "project")).t;

  return (
    <article className=" flex min-h-screen w-full overflow-x-hidden">
      <div className=" absolute inset-[--inset] z-0 bg-[--background-accent]"></div>

      <div className="wrapper z-10  ">
        <div className=" mb-[3vh] mt-[20vh] flex flex-col items-center text-center md:mb-20 ">
          <Reveal>
            <h4 className="mb-1 text-sm font-semibold uppercase tracking-widest opacity-30">
              {translation("title")}
            </h4>
          </Reveal>
          <Reveal options={{ animationDelay: 0.15 }}>
            <h2
              className={
                fontSecondary.className +
                ` mb-6 max-w-[22ch] font-black leading-tight [text-wrap:balance]`
              }
            >
              {projectData.frontmatterData.title}
            </h2>
          </Reveal>
          <Reveal options={{ animationDelay: 0.3 }}>
            <p className=" my-auto max-w-prose text-base leading-7 opacity-80 [text-wrap:balance] md:text-lg md:leading-loose">
              {projectData.frontmatterData.introduction}
            </p>
          </Reveal>

          <Reveal className="mt-6" options={{ animationDelay: 0.5 }}>
            <Link
              href={projectData.frontmatterData.repositoryUrl}
              className="mr-6"
            >
              {translation("links.github")}
            </Link>

            <Link
              href={projectData.frontmatterData.previewUrl}
              className="relative"
            >
              {translation("links.live")} &nbsp;&nbsp;&nbsp;
              <span className="absolute -right-0.5 top-1/2 -translate-y-1/2">
                <ArrowRight size={16} weight="regular" />
              </span>
            </Link>
          </Reveal>
        </div>

        <Reveal
          className="mb-6 w-full overflow-hidden  rounded-sm opacity-[0.99]   md:mx-auto md:mb-6 md:w-2/3"
          options={{ animationDelay: 0.8 }}
          containerClassName="shadow-xl"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            width="100%"
            height="auto"
            className=""
          >
            <source
              src={projectData.frontmatterData.previewAsset}
              type="video/mp4"
            />
          </video>
        </Reveal>

        <div className="w-full overflow-x-hidden md:mx-auto md:w-2/3">
          <Markdown>{projectData.content}</Markdown>
        </div>
        <div className=" mb-20 mt-10 w-full text-sm font-medium  italic opacity-70 md:mx-auto md:w-2/3 md:text-center md:text-base">
          {translation("lastUpdate")}:{" "}
          <span className="font-bold">
            {new Date(projectData.frontmatterData.editedAt).toLocaleDateString(
              params.lang,
              {
                month: "long",
                day: "numeric",
                year: "numeric",
              },
            )}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectPage;
