import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface WhySaudiArabiaSectionsProps {
  translationKey: string;
  image: string;
  reverse: boolean;
}

function WhySaudiArabiaSections({
  translationKey,
  image,
  reverse,
}: WhySaudiArabiaSectionsProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 py-16 px-4 md:px-8`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-1">
        <img
          src={image}
          alt={t(`whyKSA.sections.${translationKey}.title`)}
          className="rounded-lg shadow-xl w-full h-[400px] object-cover"
        />
      </div>
      <div className="flex-1 space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">
          {t(`whyKSA.sections.${translationKey}.title`)}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {t(`whyKSA.sections.${translationKey}.description`)}
        </p>
        <ul className="space-y-2">
          {(
            t(`whyKSA.sections.${translationKey}.items`, {
              returnObjects: true,
            }) as string[]
          ).map((item: string, index: number) => (
            <li
              key={index}
              className="text-lg text-gray-700 leading-relaxed flex items-start"
            >
              <span className="mr-2">•</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default WhySaudiArabiaSections;
