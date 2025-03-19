import { useTranslation } from "react-i18next";


function MultiDayTripItinerary() {
  const { t } = useTranslation();

  const itinerary = [

    {
      day: 1,
      title:   t("multiTrip.itinerary.days.0.title"),
      description: t("multiTrip.itinerary.days.0.description"),
    },
    {
      day: 2,
      title:   t("multiTrip.itinerary.days.1.title"),
      description: t("multiTrip.itinerary.days.1.description"),
    },
    {
      day: 3,
      title:   t("multiTrip.itinerary.days.2.title"),
      description: t("multiTrip.itinerary.days.2.description"),
    },
    {
      day: 4,
      title:   t("multiTrip.itinerary.days.3.title"),
      description: t("multiTrip.itinerary.days.3.description"),
    },
    {
      day: 5,
      title:   t("multiTrip.itinerary.days.4.title"),
      description: t("multiTrip.itinerary.days.4.description"),
    },
    {
      day: 6,
      title:   t("multiTrip.itinerary.days.5.title"),
      description: t("multiTrip.itinerary.days.5.description"),
    },
    {
      day: 7,
      title:   t("multiTrip.itinerary.days.6.title"),
      description: t("multiTrip.itinerary.days.6.description"),
    },
  ];
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {t("multiTrip.itinerary.title")}
        </h2>
        <div className="space-y-6">
          {itinerary.map((day) => (
            <div
              key={day.day}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="bg-amber-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                  {day.day}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{day.title}</h3>
                  <p className="text-gray-600">{day.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MultiDayTripItinerary;
