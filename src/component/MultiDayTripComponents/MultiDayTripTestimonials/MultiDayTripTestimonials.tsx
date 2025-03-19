import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

function MultiDayTripTestimonials() {
    const { t } = useTranslation();
  
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {t("multiTrip.testimonials.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className="w-5 h-5 fill-amber-500 text-amber-500"
                />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
            {t("multiTrip.testimonials.quotes.0.text")}
            </p>
            <p className="font-semibold">
            {t("multiTrip.testimonials.quotes.0.author")}
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className="w-5 h-5 fill-amber-500 text-amber-500"
                />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
            {t("multiTrip.testimonials.quotes.1.text")}
            </p>
            <p className="font-semibold">
            {t("multiTrip.testimonials.quotes.1.author")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MultiDayTripTestimonials;
