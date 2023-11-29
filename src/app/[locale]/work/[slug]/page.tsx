import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  console.log("generateMetadata", params);

  // read route params
  const slug = params.slug;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${slug} lalala`,
    description: "sfsdfsfsdfsfsdfsfsdfsfsdf",
    //   openGraph: {
    //     images: ['/some-specific-page-image.jpg', ...previousImages],
    //   },
  };
}

export const dynamicParams = false; // Disable dynamic params for this route, only static params will be used

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())

  const projects = [{ slug: "project1" }, { slug: "project2" }];

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectPage: React.FC<Props> = ({ params }) => {
  return (
    <div className=" flex h-screen w-screen items-center justify-center bg-yellow-500 text-3xl  text-white opacity-80">
      ProjectPage : {params.slug}
    </div>
  );
};

export default ProjectPage;
