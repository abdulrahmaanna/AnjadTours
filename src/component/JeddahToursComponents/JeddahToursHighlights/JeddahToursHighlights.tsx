import Balad from "../../../assets/Al-Balad.jpg";
import Fish from "../../../assets/Fish Market.jpg";
import Waterfront from "../../../assets/Jeddah Waterfront.jpg";
import Fountain from "../../../assets/King Fahd Fountain.jpg";
import Floating from "../../../assets/Floating Mosque.jpg";
import Jameel from "../../../assets/Hayy Jameel.jpg";
import { useTranslation } from "react-i18next";

function JeddahToursHighlights() {
  const { t } = useTranslation();

  const highlights = [
    {
      title: t("Jeddah.tour.highlights.alBalad.title"),
      description: t("Jeddah.tour.highlights.alBalad.description"),
      image: Balad,
    },
    {
      title: t("Jeddah.tour.highlights.fishMarket.title"),
      description: t("Jeddah.tour.highlights.fishMarket.description"),
      image: Fish,
    },
    {
      title: t("Jeddah.tour.highlights.corniche.title"),
      description: t("Jeddah.tour.highlights.corniche.description"),
      image: Waterfront,
    },
    {
      title: t("Jeddah.tour.highlights.kingFahdFountain.title"),
      description: t("Jeddah.tour.highlights.kingFahdFountain.description"),
      image: Fountain,
    },
    {
      title: t("Jeddah.tour.highlights.floatingMosque.title"),
      description: t("Jeddah.tour.highlights.floatingMosque.description"),
      image: Floating,
    },
    {
      title: t("Jeddah.tour.highlights.hayyJameel.title"),
      description: t("Jeddah.tour.highlights.hayyJameel.description"),
      image: Jameel,
    },
  ];

  return (
    <section className="py-20 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t("Jeddah.tour.discover")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all"
            >
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JeddahToursHighlights;
