import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah M.",
    text: "An unforgettable journey through time. The guides were incredibly knowledgeable!",
    rating: 5,
  },
  {
    name: "James K.",
    text: "The AlUla tour exceeded all expectations. A must-visit destination in Saudi Arabia.",
    rating: 5,
  },
  {
    name: "Ahmed R.",
    text: "Perfect organization and amazing historical sites. Highly recommended!",
    rating: 5,
  },
];

function AlUlaToursTestimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          What Our Guests Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-amber-500 w-5 h-5 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AlUlaToursTestimonials;
