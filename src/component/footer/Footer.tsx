import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-200 py-16 px-4">
      <div className="container mx-auto text-center">
        <img
          src={`/logo.png`}
          alt="Zahid Travel Logo"
          className="h-16 mx-auto mb-6"
        />
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          {t("services.about")}
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="http://wa.me/966551597624"
            className="text-gray-600 hover:text-gray-900"
          >
            {t("social.whatsapp")}
          </a>
          <a
            href="https://x.com/Riyadhcitytours"
            className="text-gray-600 hover:text-gray-900"
          >
            {t("social.twitter")}
          </a>
          <a
            href="https://www.instagram.com/toursaroundriyadh"
            className="text-gray-600 hover:text-gray-900"
          >
            {t("social.instagram")}
          </a>
          <a
            href="mailto:Info@anjadtours.com"
            className="text-gray-600 hover:text-gray-900"
          >
            {t("social.email")}
          </a>
        </div>
      </div>

      <div className="mt-18">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} {t("footer")}{" "}
          <Link
            target="_blank"
            to="https://dev.khaledghonim.com/"
            className="text-blue-600 duration-300 hover:underline-offset-4 hover:underline"
          >
            {t("Khaled Ghonim")}
          </Link>
        </p>
      </div>
    </footer>
  );
}
