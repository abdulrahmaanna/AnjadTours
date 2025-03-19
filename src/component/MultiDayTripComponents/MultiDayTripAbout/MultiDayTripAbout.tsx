import { useTranslation } from "react-i18next";
import { FaUsers } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { SiCoffeescript } from "react-icons/si";

function MultiDayTripAbout() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {t("multiTrip.subtitle")}
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {t("multiTrip.description")}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("multiTrip.description2")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <MdOutlineCalendarMonth className="w-12 h-12 mx-auto mb-4 text-amber-500" />
            <h3 className="text-xl font-semibold mb-2">
              {t("multiTrip.features.title")}
            </h3>
            <p className="text-gray-600">
              {t("multiTrip.features.items.0.title")}{" "}
              {t("multiTrip.features.items.0.description")}
            </p>
          </div>
          <div className="text-center">
            <FaUsers className="w-12 h-12 mx-auto mb-4 text-amber-500" />
            <h3 className="text-xl font-semibold mb-2">{t("multiTrip.features.items.1.title")}{" "}</h3>
            <p className="text-gray-600">
            {t("multiTrip.features.items.1.description")}
            </p>
          </div>
          <div className="text-center">
            <SiCoffeescript className="w-12 h-12 mx-auto mb-4 text-amber-500" />
            <h3 className="text-xl font-semibold mb-2">
            {t("multiTrip.features.items.2.title")}{" "}
            </h3>
            <p className="text-gray-600">
            {t("multiTrip.features.items.2.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MultiDayTripAbout;
