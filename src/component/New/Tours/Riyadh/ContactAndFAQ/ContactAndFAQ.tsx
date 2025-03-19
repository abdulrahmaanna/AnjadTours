import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import { BiCheckCircle } from "react-icons/bi";

function ContactAndFAQ() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mblgdgby");
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    if (state.succeeded) {
      setShowForm(false);
      const timer = setTimeout(() => setShowForm(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">
              {t("Riyadh.tour.contact.title")}
            </h2>
            {!showForm ? (
              <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg transition-opacity animate-fade-in">
                <BiCheckCircle className="w-12 h-12 text-green-500 mb-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {t("Thank you for your message!")}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(
                    "We have received your message and will get back to you soon."
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    {t("Riyadh.tour.contact.fields.name")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full px-4 py-2 outline-none rounded-lg border focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    {t("Riyadh.tour.contact.fields.email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 outline-none rounded-lg border focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    {t("Riyadh.tour.contact.fields.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full px-4 py-2 outline-none rounded-lg border focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    rows={4}
                  ></textarea>

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                >
                  {t("Riyadh.tour.contact.fields.send")}
                </button>
              </form>
            )}
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
