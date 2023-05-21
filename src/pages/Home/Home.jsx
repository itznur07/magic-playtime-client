import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import useTitle from "../../Hooks/useTitle";
import Banner from "../../components/Banner/Banner";
import Companys from "../../components/Brands/Brands";
import Category from "../../components/Category/Category";
import Gallery from "../../components/Gallery/Gallery";
import Review from "../../components/Review/Review";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";


const Home = () => {
  useTitle("Home");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Banner data-aos='fade-up'></Banner>
      <Category data-aos='fade-up'></Category>
      <Gallery data-aos='fade-up'></Gallery>
      <ShopByCategory data-aos='fade-up'></ShopByCategory>
      <Companys data-aos='fade-up'></Companys>
      <Review data-aos='fade-up'></Review>
    </>
  );
};

export default Home;
