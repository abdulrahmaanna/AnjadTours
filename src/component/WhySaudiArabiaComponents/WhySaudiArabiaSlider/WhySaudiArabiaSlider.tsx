import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AlUla from "../../../assets/AlUla - Ancient Desert City.jpg";
import RedSea from "../../../assets/The Red Sea - Crystal Clear Waters.jpg";
import Asir from "../../../assets/Asir Mountains - Natural Beauty.png";
import Modern from "../../../assets/Modern Architecture - Vision 2030.webp";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { useTranslation } from "react-i18next";


function WhySaudiArabiaSlider() {
  const { t } = useTranslation();

  const slides = [
    {
      image: AlUla,
      caption: t("whyKSA.highlights.0"),
    },
    {
      image: RedSea,
      caption:  t("whyKSA.highlights.1"),
    },
    {
      image: Asir,
      caption: t("whyKSA.highlights.2"),
    },
    {
      image: Modern,
      caption: t("whyKSA.highlights.3"),
    },
  ];


  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                <p className="text-white  pb-5 text-2xl font-semibold">
                  {slide.caption}
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
  );
}

export default WhySaudiArabiaSlider;
