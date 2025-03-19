import RiyadhToursHeroSection from "../../component/New/Tours/Riyadh/RiyadhToursHeroSection/RiyadhToursHeroSection";
import ImageSlider from "../../component/New/Tours/Riyadh/ImageSlider/ImageSlider";
import Testimonial from "../../component/New/Tours/Riyadh/Testimonial/Testimonial";
import TourOverview from "../../component/New/Tours/Riyadh/TourOverview/TourOverview";
import Inclusions from "../../component/New/Tours/Riyadh/Inclusions/Inclusions";
import PricingAndBooking from "../../component/New/Tours/Riyadh/PricingAndBooking/PricingAndBooking";
import ContactAndFAQ from "../../component/New/Tours/Riyadh/ContactAndFAQ/ContactAndFAQ";
import Photo from "../../assets/Riyadh Food Tour.jpg";
import Culinary from "../../assets/Culinary Exploration.jpg";
import Eateries from "../../assets/Eaterie.webp";
import Cultural from "../../assets/67162a5993a1f481628f5600_landvault3.webp";
import { useTranslation } from "react-i18next";

interface Slide {
  image: string;
  title: string;
  description: string;
}

function RiyadhFoodTour() {
  const { t } = useTranslation();

  const slides: Slide[] = [
    {
      image: Eateries,
      title: t("riyadhFood.tour.highlights.localEateries.title"),
      description: t("riyadhFood.tour.highlights.localEateries.description"),
    },
    {
      image: Cultural,
      title: t("riyadhFood.tour.highlights.culturalInsights.title"),
      description: t("riyadhFood.tour.highlights.culturalInsights.description"),
    },
    {
      image: Culinary,
      title: t("riyadhFood.tour.highlights.culinaryExploration.title"),
      description: t(
        "riyadhFood.tour.highlights.culinaryExploration.description"
      ),
    },
  ];

  return (
    <>
      <title>{t("riyadhFood.tour.fullTour.title")}</title>
      <meta name="author" content="Khaled Ghonim" />
      <link rel="author" href="https://dev.khaledghonim.com/" />
      <meta name="keywords" content={t("riyadhFood.tour.subHeadline")} />
      <div className="min-h-screen bg-gray-50">
        <RiyadhToursHeroSection
          HeroSectionPhoto={Photo}
          HereoSectionTitle={t("riyadhFood.tour.headline")}
          HerosSectionDescription={t("riyadhFood.tour.subHeadline")}
        />
        <ImageSlider
          slides={slides}
          slideTile={t("riyadhFood.tour.discover")}
        />
        <TourOverview
          TourOverviewTitle={t("riyadhFood.tour.fullTour.title")}
          Duration={t("riyadhFood.tour.fullTour.duration")}
          Location1={t("riyadhFood.tour.highlights.culinaryExploration.title")}
          Des1={t("riyadhFood.tour.itinerary.culinaryExploration")}
          Location2={t("riyadhFood.tour.highlights.localEateries.title")}
          Des2={t("riyadhFood.tour.itinerary.localEateries")}
          Location3={t("riyadhFood.tour.highlights.culturalInsights.title")}
          Des3={t("riyadhFood.tour.itinerary.culturalInsights")}
          Location4={undefined}
          Des4={undefined}
        />

        <Inclusions
          inclusions1={t("riyadhFood.tour.included.items.0")}
          inclusions2={t("riyadhFood.tour.included.items.1")}
          inclusions3={t("riyadhFood.tour.included.items.2")}
          inclusions4={t("riyadhFood.tour.included.items.3")}
        />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              {t("riyadhFood.tour.testimonials.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {(
                t("riyadhFood.tour.testimonials.reviews", {
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
          TourName={t("riyadhFood.tour.packages.riyadhFoodTour.title")}
          Price={undefined}
          Option1={undefined}
          Option2={undefined}
          Option3={undefined}
          Option4={undefined}
        />
        <ContactAndFAQ />
      </div>
    </>
  );
}

export default RiyadhFoodTour;
