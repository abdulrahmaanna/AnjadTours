import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Diriyah from "../../../assets/Ad Diriyah.jpg";
import Wadi from "../../../assets/Wadi Disa.jpg";
import Hegra from "../../../assets/Hegra.webp";
import AlUla from "../../../assets/AlUla.jpg";
import  Jeddah from "../../../assets/Historic Jeddah - Al Balad.webp";
import { useTranslation } from "react-i18next";


function MultiDayTripDestinationSlider() {
  const { t } = useTranslation();


  const destinations = [
    {
      title: t("multiTrip.highlights.items.0.place"),
      description: t("multiTrip.highlights.items.0.description"),
      image: Diriyah,
    },
    {
      title: t("multiTrip.highlights.items.1.place"),
      description: t("multiTrip.highlights.items.1.description"),
      image: Wadi,
    },
    {
      title: t("multiTrip.highlights.items.2.place"),
      description: t("multiTrip.highlights.items.2.description"),
      image: Hegra,
    },
    {
      title: t("multiTrip.highlights.items.3.place"),
      description: t("multiTrip.highlights.items.3.description"),
      image: AlUla,
    },
    {
      title: t("multiTrip.highlights.items.4.place"),
      description: t("multiTrip.highlights.items.4.description"),
      image: Jeddah,
    },
  ];
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {t("multiTrip.highlights.title")}
        </h2>

        <div className="container mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="rounded-xl overflow-hidden"
          >
            {destinations.map((destination, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="w-full h-[600px] relative">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                    <h3 className="text-3xl font-bold mb-2">
                      {destination.title}
                    </h3>
                    <p className="text-lg max-w-xl">
                      {destination.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-button-prev z-30 absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 duration-200 ease-in-out transition-all rounded-full p-1 md:p-2 shadow-lg cursor-pointer">
              <MdOutlineChevronLeft className="text-black text-3xl" />
            </div>
            <div className="swiper-button-next z-30 absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 duration-200 ease-in-out transition-all rounded-full p-1 md:p-2 shadow-lg cursor-pointer">
              <MdOutlineChevronRight className="text-black text-3xl" />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default MultiDayTripDestinationSlider;
