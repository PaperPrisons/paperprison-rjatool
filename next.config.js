/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/RJA",
  // assetPrefix: "/RJA/",
  // images: {
  // domains: ["paperprisons.org"],
  // path: "/RJA/_next/image",
  //},
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;