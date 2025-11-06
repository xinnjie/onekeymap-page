import Image from "next/image";
import EditorScreenshot from "@/public/images/screenshot-editor.png";
import SyncScreenshot from "@/public/images/screenshot-sync.png";
import ImportScreenshot from "@/public/images/screenshot-import.png";
import { getTranslations } from "next-intl/server";

export default async function Features() {
  const t = await getTranslations("features");

  return (
    <section id="features">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold">{t("sectionTitle")}</h2>
            <p className="mt-4 text-lg text-gray-600">{t("sectionSubtitle")}</p>
          </div>

          {/* Items */}
          <div className="space-y-12">
            {/* 1st item */}
            <article className="overflow-hidden rounded-3xl bg-white ring-1 shadow-2xl shadow-gray-200/40 ring-gray-100">
              <div className="relative aspect-[16/10] bg-gray-900">
                <Image
                  src={EditorScreenshot}
                  alt="OneKeymap keymap editor screenshot"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 960px, 100vw"
                  priority
                />
              </div>
              <div className="space-y-3 px-8 py-10 md:flex md:items-start md:gap-10 md:space-y-0">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">
                    {t("editor.title")}
                  </h4>
                  <p className="mt-3 text-lg text-gray-600">
                    {t("editor.description")}
                  </p>
                </div>
              </div>
            </article>

            {/* 2nd item */}
            <article className="overflow-hidden rounded-3xl bg-white ring-1 shadow-2xl shadow-gray-200/40 ring-gray-100">
              <div className="relative aspect-[16/10] bg-gray-900">
                <Image
                  src={SyncScreenshot}
                  alt="OneKeymap sync diff preview screenshot"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 960px, 100vw"
                />
              </div>
              <div className="space-y-3 px-8 py-10 md:flex md:items-start md:gap-10 md:space-y-0">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">
                    {t("sync.title")}
                  </h4>
                  <p className="mt-3 text-lg text-gray-600">
                    {t("sync.description")}
                  </p>
                </div>
              </div>
            </article>

            {/* 3rd item */}
            <article className="overflow-hidden rounded-3xl bg-white ring-1 shadow-2xl shadow-gray-200/40 ring-gray-100">
              <div className="relative aspect-[16/10] bg-gray-900">
                <Image
                  src={ImportScreenshot}
                  alt="OneKeymap import workflow screenshot"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 960px, 100vw"
                />
              </div>
              <div className="space-y-3 px-8 py-10 md:flex md:items-start md:gap-10 md:space-y-0">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">
                    {t("import.title")}
                  </h4>
                  <p className="mt-3 text-lg text-gray-600">
                    {t("import.description")}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
