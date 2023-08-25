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
    <div className="my-5">
      <div className="max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-12 flex flex-col-reverse gap-10">
          {/* left column here */}
          <div className="col-span-12 md:col-span-3">
            {/* silderbar here */}
            <ProductCategorys></ProductCategorys>
            <PostList></PostList>
            <PromoCard></PromoCard>
            <FeatureCard></FeatureCard>
            {/* silderbar ends here */}
          </div>
          {/* left column ends here */}
          {/* right column */}
          <div className="col-span-12 md:col-span-9">
            {/* Banner here */}
            <Banner></Banner>
            {/* Banner ends here */}
            {/* Hand Pick Pieces here */}
            <HankPick></HankPick>
            {/* Hand Pick Pieces ends here */}
            {/* promo banner here */}
            <PromoBanner></PromoBanner>
            {/* promo banner ends here */}
            {/* product catalog here */}
            <ShopByCategory></ShopByCategory>
            {/* product catalog ends here */}
          </div>
          {/* right column ends here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
