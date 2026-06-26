import { getProjectsData, getProjectData } from "@/scripts/getProjectsData";
import { Locale } from "../../../i18n/i18n-config";
import {
  siteUrl,
  siteMeta,
  defaultOgImage,
  buildAlternates,
  clampDescription,
} from "@/app/seo";
import type { Metadata } from "next";

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

// Metadata for the page — derived dynamically from each project's frontmatter
// so it stays correct per-locale and per-project without hardcoded branches.
export async function generateMetadata({
  params: { lang, slug },
}: Props): Promise<Metadata> {
  const { frontmatterData } = getProjectData(slug, lang);
  const meta = siteMeta[lang] ?? siteMeta.en;

  const title = frontmatterData.title;
  const description = clampDescription(frontmatterData.introduction);
  const path = `/work/${slug}`;
  const ogImage = frontmatterData.mockupAsset || defaultOgImage;

  return {
    title,
    description,
    alternates: buildAlternates(lang, path),
    openGraph: {
      type: "article",
      siteName: meta.siteName,
      title,
      description,
      url: `${siteUrl}/${lang}${path}`,
      locale: meta.locale,
      modifiedTime: frontmatterData.editedAt,
      authors: [meta.authorName],
      tags: frontmatterData.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

type Props = {
  params: {
    lang: Locale;
    slug: string;
  };
  children: React.ReactNode;
};

export default function Layout({ children, params: { lang, slug } }: Props) {
  const { frontmatterData } = getProjectData(slug, lang);
  const meta = siteMeta[lang] ?? siteMeta.en;
  const path = `/work/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: frontmatterData.title,
    description: frontmatterData.introduction,
    url: `${siteUrl}/${lang}${path}`,
    inLanguage: lang,
    dateModified: frontmatterData.editedAt,
    keywords: frontmatterData.tags?.join(", "),
    image: `${siteUrl}${frontmatterData.mockupAsset || defaultOgImage}`,
    author: {
      "@type": "Person",
      name: meta.authorName,
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
