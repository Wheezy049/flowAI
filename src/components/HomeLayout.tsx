import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import CompanyLogos from "./CompanyLogos";
import Discover from "./Discover";
import Direction from "./Direction";
import StartTrial from "./StartTrial";
import Testimonial from "./Testimonial";
import Feature from "./Feature";
import GetStarted from "./GetStarted";
import Footer from "./Footer";

function HomeLayout() {
  return (
    <div className="w-full">
      <Header />
      <div className="mt-0 sm:mt-2 lg:mt-24">
        <Hero />
        <CompanyLogos />
        <Discover />
        <Direction />
        <StartTrial />
        <Testimonial />
        <Feature />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}

export default HomeLayout;
