/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure the OG-image font files are bundled into the image routes'
  // serverless functions (they're read via fs at request time).
  experimental: {
    outputFileTracingIncludes: {
      "/[lang]/opengraph-image": ["./src/app/_og/**"],
      "/[lang]/twitter-image": ["./src/app/_og/**"],
      "/[lang]/work/[slug]/opengraph-image": ["./src/app/_og/**"],
      "/[lang]/work/[slug]/twitter-image": ["./src/app/_og/**"],
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
