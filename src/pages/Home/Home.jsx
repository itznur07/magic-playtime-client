import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTitle from "../../Hooks/useTitle";
import Banner from "../../components/Banner/Banner";
import BlogSection from "../../components/BlogSection";
import ProductCategorys from "../../components/ProductCategorys/ProductCategorys";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";
import { getProducts } from "../../redux/api/productsAPI";

const Home = () => {
  useTitle("Home");

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className='max-w-7xl mx-auto my-5'>
      {/* banner and category */}
      <div className='w-full grid grid-cols-12 gap-10'>
        <div className='col-span-3'>
          <ProductCategorys></ProductCategorys>
        </div>
        <div className='col-span-9'>
          <Banner></Banner>
        </div>
      </div>

      {/* Products */}
      <div className='mt-24'>
        {/* <HankPick /> */}
        <ShopByCategory />
      </div>

      {/* Blogs */}
      <div>
        <BlogSection />
      </div>
    </div>
  );
};

export default Home;
