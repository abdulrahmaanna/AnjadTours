import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";

function Inclusions({ inclusions1, inclusions2, inclusions3, inclusions4 }) {
    const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
        {t("worldExcursion.tour.included.title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[inclusions1, inclusions2, inclusions3, inclusions4].map(
            (item, index) => {
              if (!item) return null;
              return (
                <div key={index} className="flex items-center gap-4">
                  <FaCheck className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

export default Inclusions;
