import { FaPhoneSquare, FaRegCalendarCheck } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function WhySaudiArabiaInfo() {
  const { t } = useTranslation();

  return (
    <div className="py-16 w-full bg-gray-50 rounded-xl p-8">
      <h2 className="text-4xl font-bold text-center mb-6">
        {t("whyKSA.summary.title")}
      </h2>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        {t("whyKSA.summary.description")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {(
          t("whyKSA.contact.options", { returnObjects: true }) as Array<{
            title: string;
            description: string;
          }>
        ).map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4"
          >
            {index === 0 && (
              <FiMapPin className="w-12 h-12 text-gray-700 mb-4" />
            )}
            {index === 1 && (
              <FaRegCalendarCheck className="w-12 h-12 text-gray-700 mb-4" />
            )}
            {index === 2 && (
              <IoAirplaneSharp className="w-12 h-12 text-gray-700 mb-4" />
            )}
            {index === 3 && (
              <FaPhoneSquare className="w-12 h-12 text-gray-700 mb-4" />
            )}
            <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
            <p className="text-gray-600">{option.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 mb-8">
          {t("whyKSA.contact.footer")}
        </p>
        <Link
          to={"http://wa.me/966551597624"}
          className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all"
        >
          {t("whyKSA.final_cta")}
        </Link>
      </div>
    </div>
  );
}

export default WhySaudiArabiaInfo;
