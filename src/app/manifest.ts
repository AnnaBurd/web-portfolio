import type { MetadataRoute } from "next";
import { siteMeta } from "./seo";
import { defaultLocale } from "./i18n/i18n-config";

export default function manifest(): MetadataRoute.Manifest {
  const meta = siteMeta[defaultLocale];

  return {
    name: meta.siteName,
    short_name: "Portfolio",
    description: `${meta.authorName} — web developer portfolio.`,
    start_url: `/${defaultLocale}`,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
