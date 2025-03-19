import { motion } from "framer-motion";
import Video from "../../assets/herosection.mp4";
import { BiChevronDown } from "react-icons/bi";
import { useTranslation } from "react-i18next";
function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: i * 0.7 },
    }),
  };
  const { t } = useTranslation();

  return (
    <section className="relative h-[100dvh]">
      <div className="absolute inset-0 bg-cover bg-center ">
        <video
          className="w-full h-full object-cover"
          src={Video}
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="absolute inset-0 -z-10 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
            className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-6"
          >
            {t(`content.title`)}
            {/* <span className="text-3xl md:text-5xl lg:text-7xl font-bold">
              Anjad
            </span> */}
          </motion.h1>
          {[
            t(`content.intro`),
            t(`content.description`),
            t(`content.call_to_action`),
          ].map((text, index) => (
            <motion.p
              key={index}
              initial="hidden"
              animate="visible"
              custom={index + 1}
              variants={textVariants}
              className="text-sm md:text-lg lg:text-xl my-4"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
      <div className="absolute z-50 bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <BiChevronDown size={32} />
      </div>
    </section>
  );
}

export default HeroSection;
