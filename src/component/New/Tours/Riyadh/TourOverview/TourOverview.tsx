import { FaClock } from "react-icons/fa";

function TourOverview({
  TourOverviewTitle,
  Duration,
  Location1,
  Location2,
  Location3,
  Location4,
  Des1,
  Des2,
  Des3,
  Des4,
}) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {TourOverviewTitle}
        </h2>
        <div className="flex items-center justify-center gap-4 mb-8">
          <FaClock className="w-6 h-6 text-yellow-500" />
          <span className="text-xl"> {Duration}</span>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{Location1}</h3>
            <p className="text-gray-600">{Des1}</p>
          </div>
          {Location2 && Des2 && (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{Location2}</h3>
              <p className="text-gray-600">{Des2}</p>
            </div>
          )}
          {Location3 && Des3 && (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{Location3}</h3>
              <p className="text-gray-600">{Des3}</p>
            </div>
          )}
          {Location4 && Des4 && (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{Location4}</h3>
              <p className="text-gray-600">{Des4}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TourOverview;
