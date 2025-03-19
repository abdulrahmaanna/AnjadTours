import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade"; 
import "swiper/css/autoplay";    
function ImageSlider({ slides, slideTile }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{slideTile}</h2>
        <div className="relative w-full  h-[450px] md:h-[550px] lg:h-[650px] rounded-xl overflow-hidden">
          <Swiper
            slidesPerView={1}
            effect="fade"
            grabCursor={true}
            loop={true}
            speed={1000}  
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false
            }}
            fadeEffect={{ crossFade: true }} 
            modules={[Autoplay, EffectFade]}
            className="w-full mySwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="absolute inset-0 w-full h-full z-10">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 z-20"></div>
                </div>

                {/* Content */}
                <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center px-6">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-2xl max-w-3xl">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ImageSlider;
