import { BiChevronRight } from "react-icons/bi";
import why from "../../../assets/why-saudi-arabia.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../../LanguageContext";

function WhySaudiArabiaHeroSection() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src={why}
          alt="Why Saudi Arabia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4 z-10">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-7xl font-bold text-white mb-6">
            {t("whyKSA.title")}
          </h1>
          <p className="text-lg md:text-3xl text-white mb-8">
          {t("whyKSA.subtitle")}
          </p>
          <Link
            className="bg-white w-80 flex justify-center cursor-pointer hover:bg-gray-200 group text-gray-900 px-5 py-3 md:px-10 md:py-5 rounded-full font-semibold text-lg items-center mx-auto hover:bg-opacity-90 transition-all"
            to={"http://wa.me/966551597624"}
          >
            {t("whyKSA.cta")}
            <BiChevronRight className={`ml-2  transition-all ${language === "ar" ? "mr-2 rotate-180 group-hover:-translate-x-1" : "ml-2 group-hover:translate-x-1 "}`} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WhySaudiArabiaHeroSection;
