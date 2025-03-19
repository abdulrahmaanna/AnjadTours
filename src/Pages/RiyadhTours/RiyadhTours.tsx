import RiyadhToursHeroSection from "../../component/New/Tours/Riyadh/RiyadhToursHeroSection/RiyadhToursHeroSection";
import ImageSlider from "../../component/New/Tours/Riyadh/ImageSlider/ImageSlider";
import Testimonial from "../../component/New/Tours/Riyadh/Testimonial/Testimonial";
import TourOverview from "../../component/New/Tours/Riyadh/TourOverview/TourOverview";
import Inclusions from "../../component/New/Tours/Riyadh/Inclusions/Inclusions";
import PricingAndBooking from "../../component/New/Tours/Riyadh/PricingAndBooking/PricingAndBooking";
import ContactAndFAQ from "../../component/New/Tours/Riyadh/ContactAndFAQ/ContactAndFAQ";
import Photo from "../../assets/360_F_940991298_BXUYYCkdno5h9pl74xZoJCE3j4CxLPJW.jpg";
import Cuisine from "../../assets/Local Souqs.jpg";
import Diriyah from "../../assets/Historical Diriyah.jpg";
import Masmak from "../../assets/Al Masmak Fortress.jpg";
import Faisaliyah from "../../assets/al-faisaliyah-tower-saudi-arabia.avif";
import Souqs from "../../assets/Woman-at-a-Souk-in-Saudi-1-2048x1366.webp";
import { useTranslation } from "react-i18next";

interface Slide {
  image: string;
  title: string;
  description: string;
}

function RiyadhTours() {
  const { t } = useTranslation();

  const slides: Slide[] = [
    {
      image: Diriyah,
      title: t("Riyadh.tour.highlights.diriyah.title"),
      description: t("Riyadh.tour.highlights.diriyah.description"),
    },
    {
      image: Masmak,
      title: t("Riyadh.tour.highlights.masmak.title"),
      description: t("Riyadh.tour.highlights.masmak.description"),
    },
    {
      image: Faisaliyah,
      title: t("Riyadh.tour.highlights.faisaliyah.title"),
      description: t("Riyadh.tour.highlights.faisaliyah.description"),
    },
    {
      image: Souqs,
      title: t("Riyadh.tour.highlights.souqs.title"),
      description: t("Riyadh.tour.highlights.souqs.description"),
    },
    {
      image: Cuisine,
      title: t("Riyadh.tour.highlights.cuisine.title"),
      description: t("Riyadh.tour.highlights.cuisine.description"),
    },
  ];

  return (
    <>
      <title>{t("Riyadh.tour.fullTour.title")}</title>
      <meta name="author" content="Khaled Ghonim" />
      <link rel="author" href="https://dev.khaledghonim.com/" />
      <meta
        name="keywords"
        content={`Discover the heart of Saudi Arabia's capital in a full-day tour.`}
      />
      <div className="min-h-screen bg-gray-50">
        <RiyadhToursHeroSection
          HeroSectionPhoto={Photo}
          HereoSectionTitle={t("Riyadh.tour.headline")}
          HerosSectionDescription={t("Riyadh.tour.subHeadline")}
        />
        <ImageSlider slides={slides} slideTile={t("Riyadh.tour.discover")} />
        <TourOverview
          TourOverviewTitle={t("Riyadh.tour.fullTour.title")}
          Duration={t("Riyadh.tour.fullTour.duration")}
          Location1={t("Riyadh.tour.highlights.diriyah.title")}
          Des1={t("Riyadh.tour.itinerary.diriyah")}
          Location2={t("Riyadh.tour.highlights.masmak.title")}
          Des2={t("Riyadh.tour.itinerary.masmak")}
          Location3={t("Riyadh.tour.highlights.faisaliyah.title")}
          Des3={t("Riyadh.tour.itinerary.faisaliyah")}
          Location4={t("Riyadh.tour.highlights.souqs.title")}
          Des4={t("Riyadh.tour.itinerary.souqs")}
        />

        <Inclusions
          inclusions1={t("Riyadh.tour.included.items.0")}
          inclusions2={t("Riyadh.tour.included.items.1")}
          inclusions3={t("Riyadh.tour.included.items.2")}
          inclusions4={t("Riyadh.tour.included.items.3")}
        />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              {t("Riyadh.tour.testimonials.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {(
                t("Riyadh.tour.testimonials.reviews", {
                  returnObjects: true,
                }) as Array<{ name: string; review: string }>
              ).map((review, index) => (
                <Testimonial
                  key={index}
                  name={review.name}
                  rating={5}
                  text={review.review}
                />
              ))}
            </div>
          </div>
        </section>

        <PricingAndBooking
          TourName={t("Riyadh.tour.packages.fullDay.title")}
          Price={1700}
          Option1={t("Riyadh.tour.packages.fullDay.features.0")}
          Option2={t("Riyadh.tour.packages.fullDay.features.1")}
          Option3={t("Riyadh.tour.packages.fullDay.features.2")}
          Option4={t("Riyadh.tour.packages.fullDay.features.3")}
        />
        <ContactAndFAQ />
      </div>
    </>
  );
}

export default RiyadhTours;
