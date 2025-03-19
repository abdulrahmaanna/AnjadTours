import { FaCar, FaHandshake, FaUserCircle } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaHotelSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Services() {
    const { t } = useTranslation();
  
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-4">{t("services.title")}</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          {t("services.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: IoCalendarOutline, title: t("services.list.0") },
            { icon: LiaHotelSolid, title: t("services.list.1") },
            { icon: FaUserCircle, title: t("services.list.2") },
            { icon: FaHandshake, title: t("services.list.3")},
            { icon: FaCar, title: t("services.list.4") },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <service.icon className="w-12 h-12 mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
