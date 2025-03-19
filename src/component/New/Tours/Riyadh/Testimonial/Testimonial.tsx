import { FaStar } from "react-icons/fa";

interface TestimonialProps {
  name: string;
  rating: number;
  text: string;
}

function Testimonial({ name, rating, text }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-4">"{text}"</p>
      <p className="text-gray-800 font-semibold">– {name}</p>
    </div>
  );
}

export default Testimonial;
