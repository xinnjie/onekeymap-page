import nextra from "nextra";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextra = nextra({
  contentDirBasePath: "/docs",
});

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // Enable compression for better performance
  compress: true,

  // Trailing slash for consistent URLs
  trailingSlash: true,

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/download",
        destination: "https://apps.apple.com/app/onekeymap/id6752988933?mt=12",
        permanent: false,
      },
    ];
  },

  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Environment variables for SEO
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || "https://onekeymap.com",
  },
};

export default withNextIntl(withNextra(nextConfig));
