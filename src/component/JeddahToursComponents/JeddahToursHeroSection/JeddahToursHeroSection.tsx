import { BiChevronDown } from "react-icons/bi";
import Jeddah from "../../../assets/Jeddah.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function JeddahToursHeroSection() {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Jeddah})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-7xl font-bold mb-6">
          {t("Jeddah.tour.headline")}
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          {t("Jeddah.tour.subHeadline")}
        </p>
        <Link
          to="http://wa.me/966551597624"
          className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
        >
          {t("Jeddah.tour.bookNow")}
        </Link>

        <div className="absolute bottom-8 animate-bounce">
          <BiChevronDown size={32} />
        </div>
      </div>
    </div>
  );
}

export default JeddahToursHeroSection;
