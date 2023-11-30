import { Locale } from "../../../i18n/i18n-config";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  console.log("work generateStaticParams [lang] = ", lang);
  return [{ slug: "project-0" }, { slug: "project-1" }];
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
  console.log("work layout [Lang] = ", params.lang, " [slug] = ", params.slug);

  return children;
}
