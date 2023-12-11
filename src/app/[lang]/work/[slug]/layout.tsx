import { getProjectsData } from "@/scripts/getProjectsData";
import { Locale } from "../../../i18n/i18n-config";
import { Metadata } from "next";

// Add tags to <head> of the page
export const metadata: Metadata = {};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const projects = getProjectsData(lang);

  // return [{ slug: "project-0" }, { slug: "project-1" }];
  return projects.map((project) => ({ slug: project.slug }));
}

// Dynamic segments with `params` [lang] not supported in `generateStaticParams` will not be dynamically generated at runtime
export const dynamicParams = false;

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale; slug: string };
}) {
  return children;
}
