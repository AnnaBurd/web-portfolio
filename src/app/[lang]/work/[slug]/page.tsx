// import { Metadata, ResolvingMetadata } from "next";

import md from "markdown-it";

import { Locale } from "@/app/i18n/i18n-config";
import { getProjectData } from "@/scripts/getProjectsData";
import Link from "next/link";

type Props = {
  params: { slug: string; lang: Locale };
};

const ProjectPage: React.FC<Props> = ({ params }) => {
  const projectData = getProjectData(params.slug, params.lang);

  return (
    <div className=" flex min-h-screen w-screen flex-col items-center justify-center bg-yellow-500 text-3xl  text-white opacity-80">
      Project: {params.slug} ({params.lang.toUpperCase()})
      <br />
      <br />
      <Link href={`/${params.lang}`}>BACK HOME</Link>
      <div
        dangerouslySetInnerHTML={{ __html: md().render(projectData.content) }}
        className="w-1/2"
      ></div>
    </div>
  );
};

export default ProjectPage;
