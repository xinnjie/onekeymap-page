import { APP_STORE_URL } from "@/constants";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "OneKeymap Pricing",
  description: "Choose the OneKeymap plan that fits you best.",
};

type PricingFeature = {
  text: string;
};

type PricingCardProps = {
  name: string;
  description: string;
  price: string;
  priceSuffix: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaHref: string;
  recommanded?: boolean;
};

function PricingCard({
  name,
  description,
  price,
  priceSuffix,
  features,
  ctaLabel,
  ctaHref,
  recommanded,
}: PricingCardProps) {
  const isRecommanded = Boolean(recommanded);
  const containerClassName = isRecommanded
    ? "bg-gray-900 text-white shadow-2xl ring-1 ring-gray-800"
    : "bg-white text-gray-900 shadow-xl ring-1 ring-gray-100";
  const headingClassName = isRecommanded
    ? "text-2xl font-semibold"
    : "text-2xl font-semibold text-gray-900";
  const descriptionClassName = isRecommanded
    ? "text-gray-200"
    : "text-gray-600";
  const priceWrapperClassName = isRecommanded ? "text-white" : "text-gray-900";
  const priceSuffixClassName = isRecommanded
    ? "text-gray-300"
    : "text-gray-600";
  const featuresClassName = isRecommanded ? "text-gray-200" : "text-gray-600";
  const ctaClassName = isRecommanded
    ? "bg-white text-gray-900 hover:bg-gray-100"
    : "bg-blue-500 text-white hover:bg-blue-600";
  return (
    <section
      className={`flex h-full flex-col rounded-3xl p-10 ${containerClassName}`}
    >
      <div>
        <h2 className={headingClassName}>{name}</h2>
        <p className={`mt-3 ${descriptionClassName}`}>{description}</p>
      </div>
      <div
        className={`mt-8 flex items-baseline gap-2 ${priceWrapperClassName}`}
      >
        <span className="text-5xl font-bold">{price}</span>
        <span className={`text-lg ${priceSuffixClassName}`}>{priceSuffix}</span>
      </div>
      <ul className={`mt-8 space-y-3 text-sm ${featuresClassName}`}>
        {features.map((feature) => {
          const dotClassName = isRecommanded ? "bg-blue-300" : "bg-blue-400";

          return (
            <li key={feature.text} className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${dotClassName}`} />
              {feature.text}
            </li>
          );
        })}
      </ul>
      <a
        className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition ${ctaClassName}`}
        href={ctaHref}
      >
        {ctaLabel}
      </a>
    </section>
  );
}

export default async function PricingPage() {
  const t = await getTranslations("pricing");

  const plans: PricingCardProps[] = [
    {
      name: t("monthly.name"),
      description: t("monthly.description"),
      price: t("monthly.price"),
      priceSuffix: t("monthly.priceSuffix"),
      features: [
        { text: t("monthly.feature1") },
        { text: t("monthly.feature2") },
      ],
      ctaLabel: t("monthly.cta"),
      ctaHref: APP_STORE_URL,
    },
    {
      name: t("annually.name"),
      description: t("annually.description"),
      price: t("annually.price"),
      priceSuffix: t("annually.priceSuffix"),
      features: [
        { text: t("annually.feature1") },
        { text: t("annually.feature2") },
      ],
      ctaLabel: t("annually.cta"),
      ctaHref: APP_STORE_URL,
      recommanded: true,
    },
    {
      name: t("lifetime.name"),
      description: t("lifetime.description"),
      price: t("lifetime.price"),
      priceSuffix: t("lifetime.priceSuffix"),
      features: [
        { text: t("lifetime.feature1") },
        { text: t("lifetime.feature2") },
      ],
      ctaLabel: t("lifetime.cta"),
      ctaHref: APP_STORE_URL,
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-gray-600">{t("subtitle")}</p>
      </div>

      <div className="mt-16 grid grid-cols-1 items-start gap-10 md:grid-cols-3">
        {plans.map((plan) => {
          const isRecommended = plan.recommanded;
          return (
            <div key={plan.name} className="relative flex flex-col">
              {isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-200 px-4 py-1 text-sm font-semibold text-gray-900 shadow-sm">
                    {t("recommended")}
                  </div>
                </div>
              )}
              <div className="flex-grow pt-6">
                <PricingCard {...plan} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
