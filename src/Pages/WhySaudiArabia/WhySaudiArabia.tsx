import WhySaudiArabiaSlider from "../../component/WhySaudiArabiaComponents/WhySaudiArabiaSlider/WhySaudiArabiaSlider";
import WhySaudiArabiaHeroSection from "../../component/WhySaudiArabiaComponents/WhySaudiArabiaHeroSection/WhySaudiArabiaHeroSection";
import WhySaudiArabiaInfo from "../../component/WhySaudiArabiaComponents/WhySaudiArabiaInfo/WhySaudiArabiaInfo";
import WhySaudiArabiaSections from "../../component/WhySaudiArabiaComponents/WhySaudiArabiaSections/WhySaudiArabiaSections";
import RichHistory from "../../assets/A Land of Rich History.webp";
import Unique from "../../assets/Unique Cultural Experiences.jpg";
import Breathtaking from "../../assets/Breathtaking Natural Wonders.webp";
import Pilgrimage from "../../assets/Pilgrimage & Spiritual Significance.webp";
import Hub from "../../assets/Business Hub.jpg";
import Infrastructure from "../../assets/Modern Infrastructure.png";
import { useTranslation } from "react-i18next";
function WhySaudiArabia() {
  const { t } = useTranslation();

  return (
    <>
      <title>{`Why Saudi Arabia | Anjad Tours`}</title>
      <meta name="author" content="Khaled Ghonim" />
      <link rel="author" href="https://dev.khaledghonim.com/" />
      <meta
        name="keywords"
        content={`Know about Saudi Arabia's rich history, unique cultural experiences, breathtaking natural wonders, pilgrimage and spiritual significance, business hub, and modern infrastructure.`}
      />

      <div className="min-h-screen bg-white">
        <WhySaudiArabiaHeroSection />

        <div className="max-w-7xl mx-auto px-4 py-16">
          <WhySaudiArabiaSlider />

          {/* Why KSA Introduction */}
          <div className="text-center max-w-4xl mx-auto mt-16">
            <h2 className="text-4xl font-bold mb-6">
              {t("whyKSA.intro.title")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("whyKSA.intro.description")}
            </p>
          </div>

          {/* Sections */}
          <WhySaudiArabiaSections
            translationKey="richHistory"
            image={RichHistory}
            reverse={false}
          />

          <WhySaudiArabiaSections
            translationKey="culturalExperiences"
            image={Unique}
            reverse={true}
          />

          <WhySaudiArabiaSections
            translationKey="naturalWonders"
            image={Breathtaking}
            reverse={false}
          />

          <WhySaudiArabiaSections
            translationKey="businessHub"
            image={Hub}
            reverse={true}
          />

          <WhySaudiArabiaSections
            translationKey="pilgrimage"
            image={Pilgrimage}
            reverse={false}
          />

          <WhySaudiArabiaSections
            translationKey="modernInfrastructure"
            image={Infrastructure}
            reverse={true}
          />

          {/* Why Choose Saudi Arabia Section */}
        </div>
        <WhySaudiArabiaInfo />
      </div>
    </>
  );
}

export default WhySaudiArabia;
