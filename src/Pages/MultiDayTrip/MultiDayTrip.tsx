import MultiDayTripAbout from "../../component/MultiDayTripComponents/MultiDayTripAbout/MultiDayTripAbout";
import MultiDayTripHeroSection from "../../component/MultiDayTripComponents/MultiDayTripHeroSection/MultiDayTripHeroSection";
import MultiDayTripDestinationSlider from "../../component/MultiDayTripComponents/MultiDayTripDestinationSlider/MultiDayTripDestinationSlider";
import MultiDayTripItinerary from "../../component/MultiDayTripComponents/MultiDayTripItinerary/MultiDayTripItinerary";
import MultiDayTripTestimonials from "../../component/MultiDayTripComponents/MultiDayTripTestimonials/MultiDayTripTestimonials";
import MultiDayTripCallToAction from "../../component/MultiDayTripComponents/MultiDayTripCallToAction/MultiDayTripCallToAction";

function MultiDayTrip() {
  
  return (
    <>
      <title>{`Multi-Day Trip | Anjad Tours`}</title>
      <meta name="author" content="Khaled Ghonim" />
      <link rel="author" href="https://dev.khaledghonim.com/" />
      <meta
        name="keywords"
        content={`Discover the heart of Saudi Arabia's capital in a multi-day tour.`}
      />
      <div className="min-h-screen bg-white">
        <MultiDayTripHeroSection />
        <MultiDayTripAbout />
        <MultiDayTripDestinationSlider />
        <MultiDayTripItinerary />
        <MultiDayTripTestimonials />
        <MultiDayTripCallToAction />
      </div>
    </>
  );
}

export default MultiDayTrip;
