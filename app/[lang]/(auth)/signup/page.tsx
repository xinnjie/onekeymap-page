import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

export const metadata = {
  title: "Sign Up - Simple",
  description: "Page description",
};

export default async function SignUp() {
  const t = await getTranslations("auth.signup");

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">{t("title")}</h1>
      </div>

      {/* Form */}
      <form>
        <div className="space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              {t("fullName")}
            </label>
            <input
              id="name"
              className="form-input w-full py-2"
              type="text"
              placeholder={t("fullNamePlaceholder")}
              required
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              {t("email")}
            </label>
            <input
              id="email"
              className="form-input w-full py-2"
              type="email"
              placeholder={t("emailPlaceholder")}
              required
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              {t("phone")}
            </label>
            <input
              id="phone"
              className="form-input w-full py-2"
              type="text"
              placeholder={t("phonePlaceholder")}
              required
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              {t("password")}
            </label>
            <input
              id="password"
              className="form-input w-full py-2"
              type="password"
              autoComplete="on"
              placeholder={t("passwordPlaceholder")}
              required
            />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <button className="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
            {t("submit")}
          </button>
          <div className="text-center text-sm text-gray-400 italic">
            {t("or")}
          </div>
          <button className="btn w-full bg-linear-to-t from-gray-900 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
            {t("continueGithub")}
          </button>
        </div>
      </form>

      {/* Bottom link */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          {t.rich("agreementText", {
            terms: (chunks) => (
              <Link
                className="font-medium whitespace-nowrap text-gray-700 underline hover:no-underline"
                href="/terms"
              >
                {chunks}
              </Link>
            ),
            privacy: (chunks) => (
              <Link
                className="font-medium whitespace-nowrap text-gray-700 underline hover:no-underline"
                href="/privacy"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
      </div>
    </>
  );
}
