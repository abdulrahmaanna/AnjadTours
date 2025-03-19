import AlUlaToursAbout from "../../component/AlUlaToursComponents/AlUlaToursAbout/AlUlaToursAbout";
import AlUlaToursHeroSection from "../../component/AlUlaToursComponents/AlUlaToursHeroSection/AlUlaToursHeroSection";
import AlUlaToursHighlights from "../../component/AlUlaToursComponents/AlUlaToursHighlights/AlUlaToursHighlights";
import AlUlaToursItinerary from "../../component/AlUlaToursComponents/AlUlaToursItinerary/AlUlaToursItinerary";
import AlUlaToursWhyChooseUs from "../../component/AlUlaToursComponents/AlUlaToursWhyChooseUs/AlUlaToursWhyChooseUs";

function AlUlaTours() {
  return (
    <div className="min-h-screen bg-stone-50">
      <AlUlaToursHeroSection />
      <AlUlaToursAbout />
      <AlUlaToursHighlights />
      <AlUlaToursItinerary />
      <AlUlaToursWhyChooseUs />
    </div>
  );
}

export default AlUlaTours;
