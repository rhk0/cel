import React from "react";
import HeroSection from "./HeroSection";
import ProductCategories from "./ProductCategories";
import Review from "./Review";
import ProductCard from "./ProductCard";
import CheckOutPage from "./CheckOutPage";

function Landing() {
  return (
    <>
      <HeroSection />
      <ProductCategories />
      <ProductCard />
      <Review />
     
    </>
  );
}

export default Landing;
