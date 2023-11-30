// import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

type Props = {
  params: { slug: string; lang: string };
};

const ProjectPage: React.FC<Props> = ({ params }) => {
  return (
    <div className=" flex h-screen w-screen flex-col items-center justify-center bg-yellow-500 text-3xl  text-white opacity-80">
      ProjectPage: {params.slug} - {params.lang}
      <br />
      <br />
      <Link href={`/${params.lang}`}>BACK HOME</Link>
    </div>
  );
};

export default ProjectPage;
