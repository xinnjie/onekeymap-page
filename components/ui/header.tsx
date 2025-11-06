import { Link } from "@/i18n/routing";
import NextLink from "next/link";
import { APP_STORE_URL } from "@/constants";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import { getTranslations } from "next-intl/server";

export default async function Header() {
  const t = await getTranslations("nav");

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden grow md:flex">
            <ul className="flex grow items-center justify-end">
              <li>
                <Link
                  href="/#features"
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  {t("features")}
                </Link>
              </li>
              <li>
                <NextLink
                  href="/docs"
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  {t("docs")}
                </NextLink>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  {t("pricing")}
                </Link>
              </li>
              <li>
                <Link
                  href={APP_STORE_URL}
                  className="btn-sm ml-4 bg-blue-500 text-white shadow-sm hover:bg-blue-600"
                >
                  {t("download")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile navigation */}
          <MobileMenu
            translations={{
              features: t("features"),
              docs: t("docs"),
              pricing: t("pricing"),
              download: t("download"),
            }}
          />
        </div>
      </div>
    </header>
  );
}
