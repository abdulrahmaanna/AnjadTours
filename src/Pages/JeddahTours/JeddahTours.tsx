import JeddahToursHeroSection from "../../component/JeddahToursComponents/JeddahToursHeroSection/JeddahToursHeroSection";
import JeddahToursHighlights from "../../component/JeddahToursComponents/JeddahToursHighlights/JeddahToursHighlights";
import JeddahToursItinerary from "../../component/JeddahToursComponents/JeddahToursItinerary/JeddahToursItinerary";
import JeddahToursWhyChooseUs from "../../component/JeddahToursComponents/JeddahToursWhyChooseUs/JeddahToursWhyChooseUs";

function JeddahTours() {
  return (
    <div className="min-h-screen">
      <JeddahToursHeroSection />
      <JeddahToursHighlights />
      <JeddahToursItinerary />
      <JeddahToursWhyChooseUs />
    </div>
  );
}

export default JeddahTours;
