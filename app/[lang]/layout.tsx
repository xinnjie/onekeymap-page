import "../css/style.css";
import { Analytics } from "@vercel/analytics/next";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { locales, type Locale, seoConfig, localeHreflang } from "@/i18n/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://onekeymap.com";

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale };
  const config = seoConfig[lang];

  return {
    title: {
      default: config.title,
      template: `%s | OneKeymap`,
    },
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: "OneKeymap Team" }],
    creator: "OneKeymap",
    publisher: "OneKeymap",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(
        locales.map((locale) => [localeHreflang[locale], `/${locale}`]),
      ),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/images/logo-onekeymap.svg",
      apple: "/images/logo-onekeymap.svg",
    },
    manifest: "/manifest.json",
    openGraph: {
      type: "website",
      locale: localeHreflang[lang].replace("-", "_"),
      url: `${siteUrl}/${lang}`,
      title: config.title,
      description: config.description,
      siteName: "OneKeymap",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "OneKeymap - Keymap Configure once. Use everywhere.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: ["/og.png"],
      creator: "@onekeymap",
      site: "@onekeymap",
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "OneKeymap",
    },
    other: {
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
    },
  };
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OneKeymap",
  description:
    "Unify your editor shortcuts across VS Code, Zed, IntelliJ IDEA, and Helix. Sync keybindings, boost productivity, and eliminate context switching between code editors.",
  url: siteUrl,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Organization",
    name: "OneKeymap Team",
  },
  downloadUrl: "https://apps.apple.com/app/onekeymap/id6752988933?mt=12",
  featureList: [
    "Unified keymap configuration",
    "Cross-editor synchronization",
    "Support for VS Code, IntelliJ IDEA, Zed, and Helix",
    "Productivity enhancement",
    "macOS native application",
  ],
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Locale };
  const messages = await getMessages();

  return (
    <html lang={lang} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} font-inter bg-gray-50 tracking-tight text-gray-900 antialiased`}
      >
        <NextIntlClientProvider locale={lang} messages={messages}>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </NextIntlClientProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
