import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { fontSecondary } from "@/app/fonts";

import Link from "@/app/components/ui/Link";
import Markdown from "./Markdown";

import { Locale } from "@/app/i18n/i18n-config";
import { getProjectData } from "@/scripts/getProjectsData";

type Props = {
  params: { slug: string; lang: Locale };
};

const ProjectPage: React.FC<Props> = ({ params }) => {
  const projectData = getProjectData(params.slug, params.lang);

  return (
    <section className=" flex min-h-screen w-full overflow-x-hidden">
      <div className=" absolute inset-6 z-0 bg-[--background-accent]"></div>

      <div className="wrapper z-10  ">
        <div className="mb-44 mt-44 flex flex-col items-center text-center ">
          <h4 className="mb-1 text-sm font-semibold uppercase tracking-widest opacity-30">
            PROJECT SHOWCASE
          </h4>
          <h2
            className={
              fontSecondary.className +
              ` mb-6 max-w-[22ch] font-black leading-tight [text-wrap:balance]`
            }
          >
            {projectData.frontmatterData.title}
          </h2>
          <p className=" my-auto max-w-prose text-base leading-relaxed tracking-wide [text-wrap:balance]">
            {projectData.frontmatterData.introduction}
          </p>

          <Link
            href={projectData.frontmatterData.previewUrl}
            className="relative mt-6"
          >
            visit live site &nbsp;&nbsp;&nbsp;
            <span className="absolute -right-0.5 top-1/2 -translate-y-1/2">
              <ArrowRight size={16} weight="regular" />
            </span>
          </Link>
        </div>

        <div className="mx-auto h-80 w-2/3 bg-slate-500">image</div>

        <div className="mx-auto w-2/3">
          <Markdown>{projectData.content}</Markdown>
        </div>
        <div className="text-center">
          Last Updated:{" "}
          {new Date(projectData.frontmatterData.editedAt).toLocaleDateString(
            params.lang,
            {
              month: "long",
              day: "numeric",
              year: "numeric",
            },
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
