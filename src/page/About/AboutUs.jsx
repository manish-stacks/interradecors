import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import IntroductionSection from "../../components/IntroductionSection/IntroductionSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import MissionVision from "../../components/MissionVision/MissionVision";
import TrustSection from "../../components/WhyTrust/Trustsection";

const AboutUs = () => {
  return (
    <>
      <Breadcrumb />
      <IntroductionSection />
      <MissionVision />
      <ServicesSection />
      <TrustSection />
    </>
  );
};

export default AboutUs;
