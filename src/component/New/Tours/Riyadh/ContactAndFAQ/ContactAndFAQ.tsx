import { useTranslation } from "react-i18next";

function ContactAndFAQ() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">{t("Riyadh.tour.contact.title")}</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("Riyadh.tour.contact.fields.name")}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 outline-none rounded-lg border focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("Riyadh.tour.contact.fields.email")}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 outline-none rounded-lg border focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("Riyadh.tour.contact.fields.message")}
                </label>
                <textarea
                  className="w-full px-4 py-2 outline-none rounded-lg border focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  rows={4}
                ></textarea>
              </div>
              <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                {t("Riyadh.tour.contact.fields.send")}
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">
              {t("Riyadh.tour.faq.title")}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("Riyadh.tour.faq.pickup.question")}
                </h3>
                <p className="text-gray-600">
                  {t("Riyadh.tour.faq.pickup.answer")}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("Riyadh.tour.faq.whatToBring.question")}
                </h3>
                <p className="text-gray-600">
                  {t("Riyadh.tour.faq.whatToBring.answer")}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("Riyadh.tour.faq.cancellation.question")}
                </h3>
                <p className="text-gray-600">
                  {t("Riyadh.tour.faq.cancellation.answer")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactAndFAQ;
