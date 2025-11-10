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
