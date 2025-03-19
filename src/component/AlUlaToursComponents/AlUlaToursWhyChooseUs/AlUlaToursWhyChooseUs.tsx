import { BiChevronRight, BiMessageSquare } from "react-icons/bi";
import { FaUsers } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../../LanguageContext";

function AlUlaToursWhyChooseUs() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-stone-100 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t("AlUla.tour.whyChooseUs.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <FaUsers
              className={`text-amber-500 mr-4 flex-shrink-0 ${
                language === "ar"
                  ? "ml-2 rotate-180 group-hover:-translate-x-1"
                  : "mr-2 group-hover:translate-x-1 "
              } `}
            />
            <div>
              <h3 className="text-xl font-bold mb-2">
                {t("AlUla.tour.whyChooseUs.items.expertGuides")}
              </h3>
              <p className="text-gray-600">
                {t("AlUla.tour.whyChooseUs.items.expertGuides")}
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <BiMessageSquare
              className={`text-amber-500 mr-4 flex-shrink-0  ${
                language === "ar"
                  ? "ml-2 rotate-180 group-hover:-translate-x-1"
                  : "mr-2 group-hover:translate-x-1 "
              } `}
            />
            <div>
              <h3 className="text-xl font-bold mb-2">
                {t("AlUla.tour.whyChooseUs.items.support")}
              </h3>
              <p className="text-gray-600">
                {t("AlUla.tour.whyChooseUs.items.support")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Link
        target="_blank"
        to="http://wa.me/966551597624"
        className="bg-amber-500 max-w-96 mt-10 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-sm md:text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center mx-auto"
      >
        {t("AlUla.tour.bookNowFooter")}
        <BiChevronRight
          className={`${
            language === "ar"
              ? "mr-2 rotate-180 group-hover:-translate-x-1"
              : "ml-2 group-hover:translate-x-1 "
          }`}
        />
      </Link>
    </section>
  );
}

export default AlUlaToursWhyChooseUs;
