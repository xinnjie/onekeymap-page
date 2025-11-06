import { Link } from "@/i18n/routing";
import NextLink from "next/link";
import Logo from "./logo";
import Image from "next/image";
import DiscordLogo from "@/public/images/logo-discord.svg";
import { getTranslations } from "next-intl/server";

export default async function Footer({ border = false }: { border?: boolean }) {
  const t = await getTranslations("footer");

  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">{t("madeBy")}</div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">{t("product")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#features"
                >
                  {t("features")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/pricing"
                >
                  {t("pricing")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  {t("changelog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">{t("resources")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NextLink
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/docs"
                >
                  {t("documentation")}
                </NextLink>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/terms"
                >
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/privacy"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://github.com/xinnjie/onekeymap/issues/new"
                >
                  {t("reportBug")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Feedback block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">{t("feedback")}</h3>
            <ul className="flex gap-1">
              <li>
                <Link
                  className="flex items-center justify-center text-gray-600 transition hover:text-gray-900"
                  href="https://discord.gg/fW3TWuXj9A"
                  aria-label="Discord"
                >
                  <span className="flex h-8 w-8 items-center justify-center">
                    <Image
                      src={DiscordLogo}
                      alt="Discord logo"
                      className="h-5 w-5"
                    />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-gray-600 transition hover:text-gray-900"
                  href="https://github.com/xinnjie/onekeymap/issues/new"
                  aria-label="Github"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[clamp(8rem,20vw,14rem)] leading-none font-bold before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['OneKeymap'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['OneKeymap'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
