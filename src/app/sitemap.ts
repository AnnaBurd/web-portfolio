import type { MetadataRoute } from "next";
import { locales, defaultLocale } from "./i18n/i18n-config";
import { getProjectsData } from "@/scripts/getProjectsData";
import { siteUrl } from "./seo";

// Build hreflang alternates for a locale-prefixed path.
function languagesFor(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `${siteUrl}/${locale}${path}`;
  }
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Home page (one canonical entry under the default locale, with alternates).
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/${defaultLocale}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: languagesFor("") },
    },
  ];

  // Project pages.
  const projects = getProjectsData(defaultLocale);
  for (const project of projects) {
    const path = `/work/${project.slug}`;
    entries.push({
      url: `${siteUrl}/${defaultLocale}${path}`,
      lastModified: project.editedAt ? new Date(project.editedAt) : now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: languagesFor(path) },
    });
  }

  return entries;
}
