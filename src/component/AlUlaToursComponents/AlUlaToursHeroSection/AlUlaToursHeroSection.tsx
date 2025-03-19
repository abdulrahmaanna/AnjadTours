import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import Herosection from "../../../assets/AlUla Herosection.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../../LanguageContext";

function AlUlaToursHeroSection() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src={Herosection}
          alt="AlUla Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t("AlUla.tour.headline")}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {t("AlUla.tour.subHeadline")}
          </p>
          <Link
            target="_blank"
            to="http://wa.me/966551597624"
            className="bg-amber-500 group max-w-96 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-sm md:text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center mx-auto"
          >
            {t("AlUla.tour.bookNow")}
            <BiChevronRight
              className={` ${
                language === "ar"
                  ? "mr-2 rotate-180 group-hover:-translate-x-1"
                  : "ml-2 group-hover:translate-x-1 "
              }`}
            />
          </Link>
        </div>
      </div>
      <div className="absolute z-50 bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <BiChevronDown size={32} />
      </div>
    </div>
  );
}

export default AlUlaToursHeroSection;
