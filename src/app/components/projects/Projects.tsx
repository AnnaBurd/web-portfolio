import Project from "./Project";

type Props = {};

const Projects: React.FC<Props> = ({}) => {
  return (
    <section className="wrapper " id="portfolio">
      <div className="flex min-h-screen w-full items-center">
        <Project />
      </div>
      <div className="flex min-h-screen w-full items-center">
        <Project />
      </div>
    </section>
  );
};

export default Projects;
