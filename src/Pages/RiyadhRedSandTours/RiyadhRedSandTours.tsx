import RiyadhToursHeroSection from "../../component/New/Tours/Riyadh/RiyadhToursHeroSection/RiyadhToursHeroSection";
import ImageSlider from "../../component/New/Tours/Riyadh/ImageSlider/ImageSlider";
import Testimonial from "../../component/New/Tours/Riyadh/Testimonial/Testimonial";
import TourOverview from "../../component/New/Tours/Riyadh/TourOverview/TourOverview";
import Inclusions from "../../component/New/Tours/Riyadh/Inclusions/Inclusions";
import PricingAndBooking from "../../component/New/Tours/Riyadh/PricingAndBooking/PricingAndBooking";
import ContactAndFAQ from "../../component/New/Tours/Riyadh/ContactAndFAQ/ContactAndFAQ";
import Photo from "../../assets/Red Sand Dunes.png";
import Dunes1 from "../../assets/Red Sand Dunes 1.webp";
import Sunset from "../../assets/Sunset Views.webp";
import Activities from "../../assets/Activities.webp";

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: Sunset,
    title: "Sunset Views",
    description:
      "Capture the mesmerizing desert sunset, a perfect photo opportunity.",
  },
  {
    image: Activities,
    title: "Camel rides",
    description: "Enjoy dune bashing and camel riding.",
  },

  {
    image: Dunes1,
    title: "Red Sand Dunes",
    description:
      "Experience the thrill of Riyadh's red sand dunes, perfect for adventure enthusiasts.",
  },
];

function RiyadhRedSandTours() {
  return (
    <>
      <title>{`Riyadh Red Sand Tours | Anjad Tours`}</title>
      <meta name="author" content="Khaled Ghonim" />
      <link rel="author" href="https://dev.khaledghonim.com/" />
      <meta
        name="keywords"
        content={`Experience the thrill of Riyadh's red sand dunes, perfect for adventure enthusiasts.`}
      />
      <div className="min-h-screen bg-gray-50">
        <RiyadhToursHeroSection
          HeroSectionPhoto={Photo}
          HereoSectionTitle={`Experience Riyadh Like Never Before!`}
          HerosSectionDescription={`Join our Red Sand Dunes Tour and explore the heart of Saudi Arabia.`}
        />
        <ImageSlider slides={slides} slideTile={`Discover Riyadh's Beauty`} />
        <TourOverview
          TourOverviewTitle={`Riyadh Red Sand Tours`}
          Duration={`Approximately 4-5 hours`}
          Location1={`Red Sand Dunes`}
          Des1={`Experience the thrill of Riyadh's red sand dunes, perfect for adventure enthusiasts.`}
          Location2={`Sunset Views`}
          Des2={`Capture the mesmerizing desert sunset, a perfect photo opportunity.`}
          Location3={`Activities & Refreshments`}
          Des3={`Enjoy dune bashing and camel riding.`}
          Location4={undefined}
          Des4={undefined}
        />

        <Inclusions
          inclusions1={`Transportation with hotel pickup and drop-off`}
          inclusions2={`Professional desert guide`}
          inclusions3={`Camel ride experience`}
          inclusions4={`Light refreshments`}
        />
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              What Our Guests Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Testimonial
                name="Sarah M."
                rating={5}
                text="An unforgettable experience! The guide was knowledgeable, and the tour was well-organized."
              />
              <Testimonial
                name="John D."
                rating={5}
                text="Excellent tour that covered all the major attractions. The lunch was amazing!"
              />
              <Testimonial
                name="Ahmed K."
                rating={4}
                text="Great way to explore Riyadh. The guide shared fascinating historical insights."
              />
            </div>
          </div>
        </section>
        <PricingAndBooking
          TourName={`Red Sand Dunes - Approximately 4-5 hours`}
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

export default RiyadhRedSandTours;
