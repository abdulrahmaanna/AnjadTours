import { useLanguage } from "../../../LanguageContext";
import { useTranslation } from "react-i18next";
import { BiCloud } from "react-icons/bi";
import { CgSun } from "react-icons/cg";
import { FiMoon } from "react-icons/fi";

function JeddahToursItinerary() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const schedule = [
    {
      time: t("Jeddah.tour.yourDay.morning.title"),
      icon: <CgSun className="w-6 h-6" />,
      activities: t("Jeddah.tour.yourDay.morning.activities", { returnObjects: true }) as string[],
    },
    {
      time: t("Jeddah.tour.yourDay.afternoon.title"),
      icon: <BiCloud className="w-6 h-6" />,
      activities: t("Jeddah.tour.yourDay.afternoon.activities", { returnObjects: true }) as string[],
    },
    {
      time: t("Jeddah.tour.yourDay.evening.title"),
      icon: <FiMoon className="w-6 h-6" />,
      activities: t("Jeddah.tour.yourDay.evening.activities", { returnObjects: true }) as string[],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t("Jeddah.tour.yourDay.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schedule.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`text-amber-500 mr-3 ${language === "ar" ? "ml-3" : "mr-3"}`}>{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.time}</h3>
              </div>
              <ul className="space-y-2">
                {item.activities.map((activity, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className={`w-2 h-2 bg-amber-500 rounded-full ${language === "ar" ? "ml-3" : "mr-3"}`}></span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JeddahToursItinerary