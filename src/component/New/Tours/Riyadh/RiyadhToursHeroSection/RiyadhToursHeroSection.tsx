import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function RiyadhToursHeroSection({
  HeroSectionPhoto,
  HereoSectionTitle,
  HerosSectionDescription,
}) {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-10">
        <img
          src={HeroSectionPhoto}
          alt="Riyadh Skyline"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 z-20"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center z-30">
        <div className="text-white max-w-3xl">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            {HereoSectionTitle}
          </h1>
          <p className="text-base md:text-2xl mb-8">
            {HerosSectionDescription}
          </p>
          <Link
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
            target="_blank"
            to={"http://wa.me/966551597624"}
          >
            {t("Riyadh.tour.bookNow")}
          </Link>
        </div>
      </div>
      <div className="absolute z-50 bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <BiChevronDown size={32} />
      </div>
      
    </section>
  );
}

export default RiyadhToursHeroSection;
