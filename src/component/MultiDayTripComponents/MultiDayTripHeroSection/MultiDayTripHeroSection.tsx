import { BiChevronDown } from "react-icons/bi";
import Route from "../../../assets/Saudi-Arabia-Route-Map-1.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function MultiDayTripHeroSection() {
  const { t } = useTranslation();

  return (
    <div
      className="h-screen relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${Route})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {t("multiTrip.home")}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
          {t("multiTrip.title")}
          </p>
          <Link
            to="http://wa.me/966551597624"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
          >
            {t("multiTrip.cta")}
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <BiChevronDown size={32} />
      </div>
    </div>
  );
}

export default MultiDayTripHeroSection;
