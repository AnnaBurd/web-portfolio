/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.glsl$/,
      use: "raw-loader",
      exclude: /node_modules/,
    });

    return config;
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

export default nextConfig;
