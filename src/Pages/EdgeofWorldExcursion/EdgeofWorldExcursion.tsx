import RiyadhToursHeroSection from "../../component/New/Tours/Riyadh/RiyadhToursHeroSection/RiyadhToursHeroSection";
import ImageSlider from "../../component/New/Tours/Riyadh/ImageSlider/ImageSlider";
import Testimonial from "../../component/New/Tours/Riyadh/Testimonial/Testimonial";
import TourOverview from "../../component/New/Tours/Riyadh/TourOverview/TourOverview";
import Inclusions from "../../component/New/Tours/Riyadh/Inclusions/Inclusions";
import PricingAndBooking from "../../component/New/Tours/Riyadh/PricingAndBooking/PricingAndBooking";
import ContactAndFAQ from "../../component/New/Tours/Riyadh/ContactAndFAQ/ContactAndFAQ";
import Photo from "../../assets/EdgeofWorldExcursion.jpg";
import Edge from "../../assets/Edge-of-the-World-ksa.jpg";
import Fihrayn from "../../assets/Jebel Fihrayn.jpg";
import Hike from "../../assets/EdgeofWorldExcursion hike.jpg";
import Refreshments from "../../assets/Saudi Coffee & Refreshments.jpg";
import { useTranslation } from "react-i18next";

interface Slide {
  image: string;
  title: string;
  description: string;
}

function EdgeofWorldExcursion() {
  const { t } = useTranslation();

  const slides: Slide[] = [
    {
      image: Fihrayn,
      title: t("worldExcursion.tour.highlights.jebelFihrayn.title"),
      description: t("worldExcursion.tour.highlights.jebelFihrayn.description"),
    },
    {
      image: Hike,
      title: t("worldExcursion.tour.highlights.guidedHike.title"),
      description: t("worldExcursion.tour.highlights.guidedHike.description"),
    },
    {
      image: Refreshments,
      title: t("worldExcursion.tour.highlights.saudiCoffee.title"),
      description: t("worldExcursion.tour.highlights.saudiCoffee.description"),
    },
    {
      image: Edge,
      title: t("worldExcursion.tour.highlights.edgeOfWorld.title"),
      description: t("worldExcursion.tour.highlights.edgeOfWorld.description"),
    },
  ];

  return (
    <>
      <title>{t("worldExcursion.tour.fullTour.title")}</title>
      <meta name="author" content="Khaled Ghonim" />
      <link rel="author" href="https://dev.khaledghonim.com/" />
      <meta name="keywords" content={t("worldExcursion.tour.subHeadline")} />
      <div className="min-h-screen bg-gray-50">
        <RiyadhToursHeroSection
          HeroSectionPhoto={Photo}
          HereoSectionTitle={t("worldExcursion.tour.headline")}
          HerosSectionDescription={t("worldExcursion.tour.subHeadline")}
        />
        <ImageSlider
          slides={slides}
          slideTile={t("worldExcursion.tour.discover")}
        />
        <TourOverview
          TourOverviewTitle={t("worldExcursion.tour.fullTour.title")}
          Duration={t("worldExcursion.tour.fullTour.duration")}
          Location1={t("worldExcursion.tour.highlights.jebelFihrayn.title")}
          Des1={t("worldExcursion.tour.itinerary.jebelFihrayn")}
          Location2={t("worldExcursion.tour.highlights.guidedHike.title")}
          Des2={t("worldExcursion.tour.itinerary.guidedHike")}
          Location3={t("worldExcursion.tour.highlights.saudiCoffee.title")}
          Des3={t("worldExcursion.tour.itinerary.saudiCoffee")}
          Location4={undefined}
          Des4={undefined}
        />

        <Inclusions
          inclusions1={t("worldExcursion.tour.included.items.0")}
          inclusions2={t("worldExcursion.tour.included.items.1")}
          inclusions3={t("worldExcursion.tour.included.items.2")}
          inclusions4={undefined}
        />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              {t("worldExcursion.tour.testimonials.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {(
                t("worldExcursion.tour.testimonials.reviews", {
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
          TourName={t("worldExcursion.tour.packages.edgeOfWorldTour.title")}
          Price={t("worldExcursion.tour.packages.edgeOfWorldTour.price")}
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

export default EdgeofWorldExcursion;
