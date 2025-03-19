import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function PricingAndBooking({
  TourName,
  Price,
  Option1,
  Option2,
  Option3,
  Option4,
}) {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t("Riyadh.tour.packages.title")}
        </h2>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4">{TourName}</h3>
            {Price && (
              <div className="text-4xl font-bold mb-4"> {Price}</div>
            )}
            <ul className="mb-8">
              {Option1 && (
                <li className="flex items-center gap-2 mb-2">
                  <FaCheck className="w-5 h-5 text-green-500" />
                  <span>{Option1}</span>
                </li>
              )}
              {Option2 && (
                <li className="flex items-center gap-2 mb-2">
                  <FaCheck className="w-5 h-5 text-green-500" />
                  <span>{Option2}</span>
                </li>
              )}
              {Option3 && (
                <li className="flex items-center gap-2 mb-2">
                  <FaCheck className="w-5 h-5 text-green-500" />
                  <span>{Option3}</span>
                </li>
              )}
              {Option4 && (
                <li className="flex items-center gap-2">
                  <FaCheck className="w-5 h-5 text-green-500" />
                  <span>{Option4}</span>
                </li>
              )}
            </ul>
            <Link
              to="http://wa.me/966551597624"
              target="_blank"
              className="w-60 md:w-72 lg:w-96 flex items-center justify-center bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              {t("Riyadh.tour.reserve")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingAndBooking;
