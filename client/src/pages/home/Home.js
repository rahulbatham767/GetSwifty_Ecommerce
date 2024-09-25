import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";
import Footer from "./Footer";
import FeatureProduct from "./FeatureProduct";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeatureProduct />
      <Services />
      <Trusted />
      <Footer />
    </>
  );
};
export default Home;
