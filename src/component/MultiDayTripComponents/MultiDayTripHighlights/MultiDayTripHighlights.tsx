import { FaCheckCircle } from "react-icons/fa";

const highlights = [
  "Walk through the historic streets of Ad Diriyah and explore the National Museum in Riyadh",
  "Experience the awe-inspiring landscapes of Wadi Disah with an off-road adventure and a desert camp BBQ",
  "Discover the ancient Nabatean city of Hegra (UNESCO site) and marvel at AlUla's natural wonders like Elephant Rock",
  "Immerse yourself in Medina's spiritual and historical significance, with visits to Mount Uhud and the surroundings of the Prophet's Mosque",
  "Ride the Haramain High-Speed Train to Jeddah and explore the rich heritage of Al-Balad (UNESCO site)",
];

function MultiDayTripHighlights() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Highlights of Your Journey
        </h2>
        <div className="space-y-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-4">
              <FaCheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MultiDayTripHighlights;
