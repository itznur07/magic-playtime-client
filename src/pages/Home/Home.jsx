import React from "react";
import useTitle from "../../Hooks/useTitle";
import Banner from "../../components/Banner/Banner";
import Companys from "../../components/Brands/Brands";
import Category from "../../components/Category/Category";
import Gallery from "../../components/Gallery/Gallery";
import Review from "../../components/Review/Review";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";

const Home = () => {

  /** Use Title */
  
  useTitle("Home");

  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <Companys></Companys>
      <Review></Review>
    </>
  );
};

export default Home;
