import Link from "next/link";

type Props = {};

const Project: React.FC<Props> = ({}) => {
  return (
    <article className="gap-x grid grid-cols-2 ">
      <div>
        <h4>Latest work</h4>
        <h2>AI Translator App</h2>
        <div>
          <div>Website Design</div>
          <div>Webflow develompent</div>
          <div>Concept</div>
        </div>
      </div>

      <div>
        <p>
          Full website design and build for a concept team collaboration
          platform. This website also includes a beautiful blog. I have built
          the website and the blog in Webflow which has one of the best CMS for
          blog hosting.
        </p>
        <Link href="/project">See the project</Link>
      </div>

      <div className=" col-start-2 row-start-1 row-end-3 bg-red-900">
        PREVIEW
      </div>
    </article>
  );
};

export default Project;
