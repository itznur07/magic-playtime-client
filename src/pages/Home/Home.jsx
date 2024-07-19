import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTitle from "../../Hooks/useTitle";
import Banner from "../../components/Banner/Banner";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import HankPick from "../../components/HandPick/HankPick";
import ProductCategorys from "../../components/ProductCategorys/ProductCategorys";
import PromoBanner from "../../components/PromoBanner/PromoBanner";
import PostList from "../../components/RecentPostList/RecentPostList";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";
import { getProducts } from "../../redux/api/productsAPI";
import PromoCard from "../../shared/PromoCard/PromoCard";

const Home = () => {
  useTitle("Home");

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className='my-5'>
      <div className='max-w-[1280px] mx-auto'>
        <div className='md:grid md:grid-cols-12 flex flex-col-reverse gap-10'>
          {/* left column here */}
          <div className='col-span-12 md:col-span-3'>
            {/* silderbar here */}
            <ProductCategorys></ProductCategorys>
            <PostList></PostList>
            <PromoCard></PromoCard>
            <FeatureCard></FeatureCard>
            {/* silderbar ends here */}
          </div>
          {/* left column ends here */}
          {/* right column */}
          <div className='col-span-12 md:col-span-9'>
            {/* Banner here */}
            <Banner></Banner>
            {/* Banner ends here */}
            {/* Hand Pick Pieces here */}
            <HankPick products={products}></HankPick>
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
