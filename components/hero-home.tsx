import Image from "next/image";
import { APP_STORE_URL } from "@/constants";
import PageIllustration from "@/components/page-illustration";
import HeroScreenshot from "@/public/images/screenshot-hero.png";
import OneKeymapLogo from "@/public/images/logo-onekeymap-liquid-60x60@3x.png";
import { getTranslations } from "next-intl/server";

export default async function HeroHome() {
  const t = await getTranslations("hero");

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              dangerouslySetInnerHTML={{ __html: t("title") }}
            />
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg text-gray-700">{t("subtitle")}</p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href={APP_STORE_URL}
                  >
                    <Image
                      className="mr-2"
                      src={OneKeymapLogo}
                      width={24}
                      height={24}
                      alt="OneKeymap.app logo"
                    />
                    <span>{t("cta")}</span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="https://github.com/xinnjie/onekeymap-cli"
                  >
                    {t("github")}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
              <Image
                src={HeroScreenshot}
                alt="OneKeymap.app macOS app showcasing unified keymap editor"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
