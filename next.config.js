/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure the assets the OG-image routes read via fs are bundled into their
  // serverless functions: the Roboto fonts for every route, plus the project
  // markdown for the per-project routes. Without the markdown entry, any
  // on-demand render of a work image route throws ENOENT (→ 500 in Search
  // Console). The routes are statically pre-rendered via generateStaticParams,
  // so this is belt-and-suspenders for any fallback render.
  experimental: {
    outputFileTracingIncludes: {
      "/[lang]/opengraph-image": ["./src/app/_og/**"],
      "/[lang]/twitter-image": ["./src/app/_og/**"],
      "/[lang]/work/[slug]/opengraph-image": [
        "./src/app/_og/**",
        "./src/posts/**",
      ],
      "/[lang]/work/[slug]/twitter-image": [
        "./src/app/_og/**",
        "./src/posts/**",
      ],
    },
  },
  // Note: i18n configs are not working with new App Directory Structure, used middleware to navigate to locales instead
  // i18n: {
  //   locales: ["en", "vn", "vi"],
  //   defaultLocale: "en",
  // },
  // Note: can restrict the domains that images can be loaded from
  // images: {
  //   formats: ["image/webp"],
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "**",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
