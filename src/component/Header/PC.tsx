import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CiMail } from "react-icons/ci";
import {
  FaCheck,
  FaChevronRight,
  FaGlobe,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../LanguageContext"; // Import the useLanguage hook

function PC() {
  const [isMainHeaderFixed, setMainHeaderFixed] = useState(false);
  const [isToursOpen, setToursOpen] = useState(false);
  const [RiydahToursOpen, setRiydahToursOpen] = useState(false);
  const [isLangOpen, setLangOpen] = useState(false);
  const { language, changeLanguage } = useLanguage(); // Use the context

  const nevigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setMainHeaderFixed(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const { t } = useTranslation();

  const changeLanguageHandler = (lang: string) => {
    changeLanguage(lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed hidden lg:flex w-full bg-opacity-50 z-50 px-6 py-4 transition duration-300 ${
        isMainHeaderFixed ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="w-[250px]">
          <img src="/logo.png" alt="Logo" className="w-full" />
        </Link>

        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="text-white text-xl font-bold hover:text-yellow-300 transition duration-300"
          >
            {t(`navigation.home`)}
          </Link>

          <div
            className="relative inline-block"
            onMouseEnter={() => setToursOpen(true)}
            onMouseLeave={() => setToursOpen(false)}
          >
            <button className="text-white text-xl font-bold cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 hover:text-yellow-300">
              {t(`navigation.tours`)}
            </button>

            <AnimatePresence>
              {isToursOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-56 bg-white text-gray-800 shadow-xl rounded-lg border border-gray-200 "
                >
                  <li
                    className="flex justify-between items-center px-4 py-3 group hover:bg-gray-100 transition-all cursor-pointer relative"
                    onMouseEnter={() => setRiydahToursOpen(true)}
                    onMouseLeave={() => setRiydahToursOpen(false)}
                  >
                    {t(`navigation.Riyadh Tours`)}

                    <FaChevronRight
                      className={`text-gray-500 text-xs transition-transform duration-200  ${
                        language === "ar"
                          ? "rotate-180 group-hover:-translate-x-1"
                          : " group-hover:translate-x-1"
                      }`}
                    />
                    <AnimatePresence>
                      {RiydahToursOpen && (
                        <motion.ul
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className={`absolute ${
                            language === "ar"
                              ? "right-full mr-2"
                              : "left-full  ml-2"
                          } top-0 w-56 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden`}
                        >
                          {[
                            {
                              label: t(`navigation.Riyadh Tour`),
                              path: "/riyadh-tours",
                            },
                            {
                              label: t(
                                `navigation.Edge of the World Excursion`
                              ),
                              path: "/edge-of-world-excursion",
                            },
                            {
                              label: t(`navigation.Riyadh Food`),
                              path: "/riyadh-food-tour",
                            },
                            {
                              label: t(`navigation.Riyadh by Metro`),
                              path: "/riyadh-by-metro",
                            },
                          ].map((tour, index) => (
                            <li
                              key={index}
                              onClick={() => nevigate(tour.path)}
                              className="px-4 py-3 text-lg hover:bg-gray-100 transition-all cursor-pointer"
                            >
                              {tour.label}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  {[
                    {
                      label: t(`navigation.One-Day Jeddah Tour`),
                      path: "/jeddah-tours",
                    },
                    {
                      label: t(`navigation.One-Day AlUla Tour`),
                      path: "/al-ula-tours",
                    },
                  ].map((tour, index) => (
                    <li
                      key={index}
                      onClick={() => nevigate(tour.path)}
                      className="px-4 py-3 hover:bg-gray-100 transition-all cursor-pointer"
                    >
                      {tour.label}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/multi-day-trip"
            className="text-white text-xl font-bold hover:text-yellow-300 transition duration-300"
          >
            {t(`navigation.multi_day_trip`)}
          </Link>
          <Link
            to="/why-saudi-arabia"
            className="text-white text-xl font-bold hover:text-yellow-300 transition duration-300"
          >
            {t(`navigation.why_ksa`)}
          </Link>

          <div className="flex gap-4">
            <a
              href="https://x.com/Riyadhcitytours"
              target="_blank"
              className={`hover:text-sky-500 transition duration-300 ${
                isMainHeaderFixed ? "text-white" : "text-black"
              }`}
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/toursaroundriyadh"
              className={`hover:text-pink-600 transition duration-300 ${
                isMainHeaderFixed ? "text-white" : "text-black"
              }`}
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="mailto:Info@anjadtours.com"
              className={`hover:text-red-500 transition duration-300 ${
                isMainHeaderFixed ? "text-white" : "text-black"
              }`}
            >
              <CiMail className="w-6 h-6" />
            </a>
            <a
              target="_blank"
              href="http://wa.me/966551597624"
              className={`hover:text-green-500 transition duration-300 ${
                isMainHeaderFixed ? "text-white" : "text-black"
              }`}
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <div className="flex items-center text-white cursor-pointer hover:text-yellow-300">
              <FaGlobe className="w-5 h-5" />

              <span className={`${language === "ar" ? "mr-1" : "ml-1"}`}>
                {language === "ar" ? "AR" : "EN"}
              </span>
            </div>
            <AnimatePresence>
              {isLangOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-32 bg-white text-black shadow-lg p-2 rounded-lg border border-gray-200"
                >
                  <li
                    className="px-4 py-3 flex items-center gap-1.5 hover:bg-gray-100 cursor-pointer transition duration-300 rounded-md"
                    onClick={() => changeLanguageHandler("ar")}
                  >
                    العربية{" "}
                    {language === "ar" && <FaCheck className="w-5 h-5" />}
                  </li>
                  <li
                    className="px-4 py-3 flex items-center gap-1.5 hover:bg-gray-100 cursor-pointer transition duration-300 rounded-md"
                    onClick={() => changeLanguageHandler("en")}
                  >
                    English{" "}
                    {language === "en" && <FaCheck className="w-5 h-5" />}
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default PC;
