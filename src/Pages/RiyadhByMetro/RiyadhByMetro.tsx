import { useTranslation } from "react-i18next";
import RiyadhToursHeroSection from "../../component/New/Tours/Riyadh/RiyadhToursHeroSection/RiyadhToursHeroSection";
import ImageSlider from "../../component/New/Tours/Riyadh/ImageSlider/ImageSlider";
import Testimonial from "../../component/New/Tours/Riyadh/Testimonial/Testimonial";
import TourOverview from "../../component/New/Tours/Riyadh/TourOverview/TourOverview";
import Inclusions from "../../component/New/Tours/Riyadh/Inclusions/Inclusions";
import PricingAndBooking from "../../component/New/Tours/Riyadh/PricingAndBooking/PricingAndBooking";
import ContactAndFAQ from "../../component/New/Tours/Riyadh/ContactAndFAQ/ContactAndFAQ";
import Photo from "../../assets/Riyadh by Metro.png";
import Qasr from "../../assets/KAFD & Qasr Al Hokm Stations.jpg";
import Museum from "../../assets/National Museum & Souqs.webp";
import Faisaliyah from "../../assets/Faisaliyah Tower 2.jpg";

interface Slide {
  image: string;
  title: string;
  description: string;
}

function RiyadhByMetro() {
  const { t } = useTranslation();

  const slides: Slide[] = [
    {
      image: Museum,
      title: t("riyadhMetro.tour.highlights.nationalMuseumSouqs.title"),
      description: t("riyadhMetro.tour.highlights.nationalMuseumSouqs.description"),
    },
    {
      image: Faisaliyah,
      title: t("riyadhMetro.tour.highlights.faisaliyahTower.title"),
      description: t("riyadhMetro.tour.highlights.faisaliyahTower.description"),
    },
    {
      image: Qasr,
      title: t("riyadhMetro.tour.highlights.kafdQasrHokm.title"),
      description: t("riyadhMetro.tour.highlights.kafdQasrHokm.description"),
    },
  ];

  return (
    <>
      <title>{t("riyadhMetro.tour.fullTour.title")}</title>
      <meta name="author" content="Khaled Ghonim" />
      <link rel="author" href="https://dev.khaledghonim.com/" />
      <meta
        name="keywords"
        content={t("riyadhMetro.tour.subHeadline")}
      />
      <div className="min-h-screen bg-gray-50">
        <RiyadhToursHeroSection
          HeroSectionPhoto={Photo}
          HereoSectionTitle={t("riyadhMetro.tour.headline")}
          HerosSectionDescription={t("riyadhMetro.tour.subHeadline")}
        />
        <ImageSlider 
          slides={slides} 
          slideTile={t("riyadhMetro.tour.discover")} 
        />
        <TourOverview
          TourOverviewTitle={t("riyadhMetro.tour.fullTour.title")}
          Duration={t("riyadhMetro.tour.fullTour.duration")}
          Location1={t("riyadhMetro.tour.highlights.kafdQasrHokm.title")}
          Des1={t("riyadhMetro.tour.itinerary.kafdQasrHokm")}
          Location2={t("riyadhMetro.tour.highlights.nationalMuseumSouqs.title")}
          Des2={t("riyadhMetro.tour.itinerary.nationalMuseumSouqs")}
          Location3={t("riyadhMetro.tour.highlights.faisaliyahTower.title")}
          Des3={t("riyadhMetro.tour.itinerary.faisaliyahTower")} Location4={undefined} Des4={undefined}        />

        <Inclusions
          inclusions1={t("riyadhMetro.tour.included.items.0")}
          inclusions2={t("riyadhMetro.tour.included.items.1")}
          inclusions3={t("riyadhMetro.tour.included.items.2")}
          inclusions4={t("riyadhMetro.tour.included.items.3")}
        />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              {t("riyadhMetro.tour.testimonials.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {(t("riyadhMetro.tour.testimonials.reviews", { returnObjects: true }) as Array<{ name: string; review: string }>).map((review, index) => (
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
          TourName={t("riyadhMetro.tour.packages.riyadhMetroTour.title")}
          Price={t("riyadhMetro.tour.packages.riyadhMetroTour.price")} Option1={undefined} Option2={undefined} Option3={undefined} Option4={undefined}        />
        <ContactAndFAQ />
      </div>
    </>
  );
}

export default RiyadhByMetro;
