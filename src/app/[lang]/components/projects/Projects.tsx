import Project from "./Project";
import { Locale } from "@/app/i18n/i18n-config";
import { getProjectsData } from "@/scripts/getProjectsData";

type Props = { lang: Locale };

const Projects: React.FC<Props> = ({ lang }) => {
  const projects = getProjectsData(lang);

  console.log("projects data from markdown: ", projects);

  return (
    <section className="wrapper" id="portfolio">
      {projects.map((project) => (
        <div
          key={project.slug}
          className=" flex min-h-screen w-full items-center pb-20"
        >
          <Project data={project} lang={lang} />
        </div>
      ))}
    </section>
  );
};

export default Projects;
