import { IoMdMail } from "react-icons/io";
import { LuMessageCircleReply } from "react-icons/lu";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MultiDayTripCallToAction() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
        {t("multiTrip.contact.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <a
            href="http://wa.me/966551597624"
            className="flex flex-col items-center hover:text-amber-500"
          >
            <LuMessageCircleReply className="w-8 h-8 mb-2" />
            <span>
            {t("multiTrip.contact.options.0")}
            </span>
          </a>
          <a
            href="mailto:Info@anjadtours.com"
            className="flex flex-col items-center hover:text-amber-500"
          >
            <IoMdMail className="w-8 h-8 mb-2" />
            <span>
            {t("multiTrip.contact.options.1")}
            </span>
          </a>
          <a
            href="tel:966551597624"
            className="flex flex-col items-center hover:text-amber-500"
          >
            <FaPhoneFlip  className="w-8 h-8 mb-2" />
            <span>
            {t("multiTrip.contact.options.2")}
            </span>
          </a>
        </div>
        <div className="mt-12 text-center">
          <Link className="bg-amber-500 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-amber-600 transition-colors" to={"http://wa.me/966551597624"}>
          {t("multiTrip.contact.options.3")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MultiDayTripCallToAction;
