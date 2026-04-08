import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import IntroductionSection from "../../components/IntroductionSection/IntroductionSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import WhyTrust from "../../components/WhyTrust/WhyTrust";
import MissionVision from "../../components/MissionVision/MissionVision";

const AboutUs = () => {
  return (
    <>
      <Breadcrumb />
      <IntroductionSection />
      <MissionVision />
      <ServicesSection />
      <WhyTrust />
    </>
  );
};

export default AboutUs;
