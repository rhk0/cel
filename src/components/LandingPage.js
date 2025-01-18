import React from "react";
import HeroSection from "./home/HeroSection.js";
import Testimonial from "./home/Testimonial.js";
import Cards from "./home/Cards.js"
import Categories from "./home/Categories.js";

function Landing() {
  return (
    <>
      <HeroSection />
      <Categories />
      <Cards />
      <Testimonial />
     
    </>
  );
}

export default Landing;
