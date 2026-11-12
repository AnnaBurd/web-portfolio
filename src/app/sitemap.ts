import type { MetadataRoute } from "next";
import { locales, defaultLocale } from "./i18n/i18n-config";
import { getProjectsData } from "@/scripts/getProjectsData";
import { siteUrl } from "./seo";

// Build hreflang alternates for a path (without the locale prefix).
function languagesFor(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `${siteUrl}/${locale}${path}`;
  }
  languages["x-default"] = `${siteUrl}/${defaultLocale}${path}`;
  return languages;
}

// One <url> per locale, each carrying the full set of alternates — Google
// expects every language version to be listed, not only the default one.
function localizedEntries(
  path: string,
  entry: Omit<MetadataRoute.Sitemap[number], "url" | "alternates">,
): MetadataRoute.Sitemap {
  const languages = languagesFor(path);
  return locales.map((locale) => ({
    ...entry,
    url: `${siteUrl}/${locale}${path}`,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjectsData(defaultLocale);

  // Home changes whenever a project does, so use the newest project date.
  const latestEdit = projects
    .map((p) => (p.editedAt ? new Date(p.editedAt) : undefined))
    .filter((d): d is Date => !!d)
    .sort((a, b) => b.getTime() - a.getTime())[0];

  const entries: MetadataRoute.Sitemap = localizedEntries("", {
    lastModified: latestEdit ?? new Date(),
    changeFrequency: "monthly",
    priority: 1,
  });

  for (const project of projects) {
    entries.push(
      ...localizedEntries(`/work/${project.slug}`, {
        lastModified: project.editedAt ? new Date(project.editedAt) : undefined,
        changeFrequency: "monthly",
        priority: 0.8,
      }),
    );
  }

  return entries;
}
