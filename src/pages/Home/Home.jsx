import React from "react";
import useTitle from "../../Hooks/useTitle";
import Banner from "../../components/Banner/Banner";
import Companys from "../../components/Brands/Brands";
import Category from "../../components/Category/Category";
import Gallery from "../../components/Gallery/Gallery";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";

const Home = () => {
  useTitle("Home");

  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <Companys></Companys>
    </>
  );
};

export default Home;
