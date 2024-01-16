import Project from "./Project";
import { Locale } from "@/app/i18n/i18n-config";
import { getProjectsData } from "@/scripts/getProjectsData";

type Props = { lang: Locale };

const Projects: React.FC<Props> = ({ lang }) => {
  const projects = getProjectsData(lang);

  return (
    <section className="wrapper !mb-6 md:!mb-10" id="portfolio">
      {projects.map((project) => (
        <div
          key={project.slug}
          className=" flex w-full items-center pb-6 md:min-h-[clamp(50vh,90vh,900px)] md:pb-0"
        >
          <Project data={project} lang={lang} />
        </div>
      ))}
    </section>
  );
};

export default Projects;
