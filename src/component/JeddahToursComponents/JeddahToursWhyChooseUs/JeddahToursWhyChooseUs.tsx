import { BiCalendar, BiCar, BiHeart } from "react-icons/bi";
import { LuUserCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function JeddahToursWhyChooseUs() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <LuUserCheck className="w-8 h-8" />,
      title: t("Jeddah.tour.whyChooseUs.items.expertGuides"),
      description: t("Jeddah.tour.whyChooseUs.items.comfortableTransport"),
    },
    {
      icon: <BiCar className="w-8 h-8" />,
      title: t("Jeddah.tour.whyChooseUs.items.comfortableTransport"),
      description: t("Jeddah.tour.whyChooseUs.items.comfortableTransport"),
    },
    {
      icon: <BiHeart className="w-8 h-8" />,
      title: t("Jeddah.tour.whyChooseUs.items.authenticExperiences"),
      description: t("Jeddah.tour.whyChooseUs.items.authenticExperiences"),
    },
    {
      icon: <BiCalendar className="w-8 h-8" />,
      title: t("Jeddah.tour.whyChooseUs.items.easyBooking"),
      description: t("Jeddah.tour.whyChooseUs.items.easyBooking"),
    },
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t("Jeddah.tour.whyChooseUs.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-amber-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

    <div className="flex justify-center mt-10">
        <Link
          to="http://wa.me/966551597624"
          className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
        >
          {t("Jeddah.tour.bookNowFooter")}
        </Link>
    </div>
    </section>
  );
}

export default JeddahToursWhyChooseUs;
