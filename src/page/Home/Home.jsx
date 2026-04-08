import React from "react";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import IntroductionSection from "../../components/IntroductionSection/IntroductionSection";
import ProductSection from "../../components/ProductSection/ProductSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import WhyTrust from "../../components/WhyTrust/WhyTrust";
import CallToAction from "../../components/CallToAction/CallToAction";
import BlogSection from "../../components/BlogSection/BlogSection";
import OurClients from "../../components/OurClients/OurClients";
const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <IntroductionSection />
      <ProductSection />
      <ServicesSection />
      <WhyTrust />
      <CallToAction />
      <OurClients />
      <BlogSection />
    </div>
  );
};

export default Home;
