import React from "react";
import useTitle from "../../Hooks/useTitle";
import Banner from "../../components/Banner/Banner";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import HankPick from "../../components/HandPick/HankPick";
import ProductCategorys from "../../components/ProductCategorys/ProductCategorys";
import PromoBanner from "../../components/PromoBanner/PromoBanner";
import PostList from "../../components/RecentPostList/RecentPostList";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";
import PromoCard from "../../shared/PromoCard/PromoCard";

const Home = () => {
  useTitle("Home");

  return (
    <div className='my-5'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-12 gap-10'>
          {/* left column here */}
          <div className='col-span-3'>
            {/* silderbar here */}
            <ProductCategorys></ProductCategorys>
            <PostList></PostList>
            <PromoCard></PromoCard>
            <FeatureCard></FeatureCard>
            {/* silderbar ends here */}
          </div>
          {/* left column ends here */}
          {/* right column */}
          <div className='col-span-9'>
            {/* Banner here */}
            <Banner></Banner>
            {/* Banner ends here */}
            {/* Hand Pick Pices here */}
            <HankPick></HankPick>
            {/* Hand Pick Pices ends here */}
            {/* promo banner here */}
            <PromoBanner></PromoBanner>
            {/* promo banner ends here */}
            {/* product catelogue here */}
            <ShopByCategory></ShopByCategory>
            {/* product catelogue ends here */}
          </div>
          {/* right column ends here */}
        </div>
      </div>

      {/* <Banner data-aos='fade-up'></Banner>
      <Category data-aos='fade-up'></Category>
      <Gallery data-aos='fade-up'></Gallery>
      <ShopByCategory data-aos='fade-up'></ShopByCategory>
      <Companys data-aos='fade-up'></Companys>
      <Review data-aos='fade-up'></Review> */}
    </div>
  );
};

export default Home;
