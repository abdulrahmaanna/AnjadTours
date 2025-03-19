import { AnimatePresence, motion } from "framer-motion";
import {
  FaChevronRight,
  FaGlobe,
  FaHome,
  FaInfoCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../LanguageContext"; // Import the useLanguage hook

interface PhoneDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function PhoneDrawer({ isOpen, onClose }: PhoneDrawerProps) {
  const [isToursOpen, setToursOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const [isRiyadhOpen, setRiyadhOpen] = useState(false);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const changeLanguageHandler = (lang: string) => {
    changeLanguage(lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const HandleClickingOutside = () => {
    onClose();
    setToursOpen(false);
  };

  const tourItems = [
    { label: t(`navigation.Riyadh Tour`), path: "/riyadh-tours" },
    { label: t(
      `navigation.Edge of the World Excursion`
    ), path: "/edge-of-world-excursion" },
    { label: t(`navigation.Riyadh Food`), path: "/riyadh-food-tour" },
    { label: t(`navigation.Riyadh by Metro`), path: "/riyadh-by-metro" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={HandleClickingOutside}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-50"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed flex flex-col justify-between right-0 top-0 h-full w-[320px] bg-white z-50 p-6 shadow-lg rounded-l-lg"
          >
            <div className={`fixed ${language === "ar" ? "right-64" : "right-4"} top-4 justify-end`}>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <IoMdClose className="text-2xl text-gray-700" />
              </button>
            </div>

            <div className="flex flex-col gap-6 mt-6">
              <Link
                to="/"
                className="flex items-center gap-2 text-xl font-bold text-gray-800 hover:text-yellow-600 transition duration-300"
                onClick={onClose}
              >
                <FaHome className="w-5 h-5" />   {t(`navigation.home`)}
              </Link>
              <div className="w-full">
                <button
                  onClick={() => setToursOpen(!isToursOpen)}
                  className="flex items-center gap-2 text-xl font-bold text-gray-800 hover:text-yellow-600 transition duration-300"
                >
                  <FaMapMarkerAlt className="w-5 h-5" />   {t(`navigation.tours`)}{" "}
                  <span>{isToursOpen ? "-" : "+"}</span>
                </button>

                <AnimatePresence>
                  {isToursOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-6 mt-2 space-y-2 max-h-96 overflow-y-auto text-gray-700"
                    >
                      <li
                        onClick={() => setRiyadhOpen(!isRiyadhOpen)}
                        className="flex items-center justify-between py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition duration-300 shadow-sm"
                      >
                        <span className="flex items-center gap-3">
                          <FaMapMarkerAlt className="w-5 h-5 text-yellow-600" />{" "}
                          {t(`navigation.Riyadh Tours`)}
                        </span>
                        <FaChevronRight
                          className={`text-gray-600 text-xs transition-transform duration-200 ${
                            isRiyadhOpen ? "rotate-90" : ""
                          }`}
                        />
                      </li>

                      <AnimatePresence>
                        {isRiyadhOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-6 space-y-2"
                          >
                            {tourItems.map((tour, index) => (
                              <li
                                key={index}
                                onClick={() => navigate(tour.path)}
                                className="flex items-center gap-3 py-3 px-4 bg-white rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-300 shadow-sm border border-gray-200"
                              >
                                <FaMapMarkerAlt className="w-5 h-5 text-yellow-600" />
                                {tour.label}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>

                      {/* Jeddah & AlUla Tours */}
                      <li
                        onClick={() => navigate("/jeddah-tours")}
                        className="flex items-center gap-3 py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition duration-300 shadow-sm"
                      >
                        <FaMapMarkerAlt className="w-5 h-5 text-yellow-600" />{" "}
                      {t(`navigation.One-Day Jeddah Tour`)}
                      </li>
                      <li
                        onClick={() => navigate("/al-ula-tours")}
                        className="flex items-center gap-3 py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition duration-300 shadow-sm"
                      >
                        <FaMapMarkerAlt className="w-5 h-5 text-yellow-600" />{" "}
                      {t(`navigation.One-Day AlUla Tour`)}
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/multi-day-trip"
                className="flex items-center gap-2 text-xl font-bold text-gray-800 hover:text-yellow-600 transition duration-300"
                onClick={onClose}
              >
                <MdOutlineTravelExplore className="w-5 h-5" />  {t(`navigation.multi_day_trip`)}
              </Link>
              <Link
                to="/why-saudi-arabia"
                className="flex items-center gap-2 text-xl font-bold text-gray-800 hover:text-yellow-600 transition duration-300"
                onClick={onClose}
              >
                <FaInfoCircle className="w-5 h-5" />   {t(`navigation.why_ksa`)}
              </Link>
            </div>

            <div className="flex items-center gap-3 mt-4 border-t pt-4">
              <FaGlobe className="w-6 h-6 text-gray-700" />
              <button
                onClick={() => changeLanguageHandler(language === "ar" ? "en" : "ar")}
                className="text-lg text-gray-800 hover:text-yellow-600 transition duration-300"
              >
                {language === "ar" ? "العربية" : "English"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default PhoneDrawer;
