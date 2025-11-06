import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

export const metadata = {
  title: "Sign In - Simple",
  description: "Page description",
};

export default async function SignIn() {
  const t = await getTranslations("auth.signin");

  return (
    <>
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
          <div className="mt-6">
            <button className="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
              {t("submit")}
            </button>
          </div>
        </form>
        {/* Bottom link */}
        <div className="mt-6 text-center">
          <Link
            className="text-sm text-gray-700 underline hover:no-underline"
            href="/reset-password"
          >
            {t("forgotPassword")}
          </Link>
        </div>
      </>
    </>
  );
}
