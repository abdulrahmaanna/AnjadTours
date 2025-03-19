import { useTranslation } from "react-i18next";
import AlUla from "../../../assets/AlUla Old Town.jpg";
import Dadan from "../../../assets/Dadan & Jabal Ikmah.jpg";
import Elephant from "../../../assets/Elephant Rock.jpg";
import Maraya from "../../../assets/Maraya Concert Hall.jpg";
import Hegra from "../../../assets/Hegra.jpg";

function AlUlaToursHighlights() {
  const { t } = useTranslation();

  const highlights = [
    {
      title: t("AlUla.tour.highlights.hegra.title"),
      description: t("AlUla.tour.highlights.hegra.description"),
      image: Hegra,
    },
    {
      title: t("AlUla.tour.highlights.dadan.title"),
      description: t("AlUla.tour.highlights.dadan.description"),
      image: Dadan,
    },
    {
      title: t("AlUla.tour.highlights.oldTown.title"),
      description: t("AlUla.tour.highlights.oldTown.description"),
      image: AlUla,
    },
    {
      title: t("AlUla.tour.highlights.elephantRock.title"),
      description: t("AlUla.tour.highlights.elephantRock.description"),
      image: Elephant,
    },
    {
      title: t("AlUla.tour.highlights.maraya.title"),
      description: t("AlUla.tour.highlights.maraya.description"),
      image: Maraya,
    },
  ];

  return (
    <section className="py-20 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t("AlUla.tour.discover")}
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

export default AlUlaToursHighlights;
