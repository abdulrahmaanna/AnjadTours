import React from "react";
import { useTranslation } from "react-i18next";

function AlUlaToursAbout() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          {t("AlUla.tour.welcome")}
        </h2>
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
          {t("AlUla.tour.welcomeDescription")}
        </p>
      </div>
    </section>
  );
}

export default AlUlaToursAbout;
