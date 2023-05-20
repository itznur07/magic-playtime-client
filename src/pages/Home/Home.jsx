import React from "react";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <ShopByCategory></ShopByCategory>
    </>
  );
};

export default Home;
