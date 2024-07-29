import React, { useContext, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { Link } from "react-router-dom";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import PriceSlider from "../../components/PriceSlider/PriceSlider";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductCategorys from "../../components/ProductCategorys/ProductCategorys";
import ShopNav from "../../components/ShopNav/ShopNav";
import { AuthContext } from "../../Providers/AuthProviders";

const Shop = () => {
  const { products } = useContext(AuthContext);
  const [view, setView] = useState(3);
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const matchedProducts = (products && products)
    .filter((product) =>
      selectedCategory ? product.categories[0] === selectedCategory : true
    )
    .filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    )
    .sort(sort);

  const handleView = (view) => {
    setView(view === "listview" ? 1 : 3);
  };

  return (
    <div>
      {/* Banner */}
      <div className='mb-5 relative h-44'>
        <div className='absolute inset-0 bg-gray-100 bg-opacity-40'></div>
        <div className='absolute inset-0 top-1/3 text-center text-black'>
          <h1 className='text-5xl font-bold text-black'>Shop</h1>
          <span className='text-sm  font-medium text-gray-600 mt-2'>
            <Link to='/'>Home</Link> / <span>Shop</span>
          </span>
        </div>
      </div>

      {/* Page layout */}
      <div className='max-w-[1280px] mx-auto'>
        <div className='grid grid-cols-12 gap-10'>
          <div className='col-span-3 md:block hidden'>
            <ProductCategorys setSelectedCategory={setSelectedCategory} />
            <div className='mt-5'>
              <div className='rounded-lg border'>
                <div className='bg-[#F3F3F3] p-5  w-full rounded-t-lg font-bold text-xl '>
                  Filter
                </div>
                <div className='py-2 mt-4 mx-3'>
                  <PriceSlider
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                  />
                </div>
              </div>
            </div>
            <FeatureCard />
          </div>
          <div className='col-span-9'>
            <ShopNav
              searchText={searchText}
              setSearchText={setSearchText}
              handleView={handleView}
              sort={sort}
              setSort={setSort}
            />
            <div
              className={`grid md:grid-cols-${view} grid-cols-1  gap-5 mb-20`}
            >
              {matchedProducts.map((product, i) => (
                <div
                  key={product.id}
                  className={`${
                    view === 1 ? "grid grid-cols-2 items-center" : ""
                  }`}
                >
                  <ProductCard
                    key={product.id}
                    product={product}
                    {...product}
                  />
                  {view === 1 ? (
                    <div className='w-full md:pl-6 mt-7'>
                      <h2 className='text-xl font-semibold mb-2'>
                        {product.title}
                      </h2>
                      <p className='text-gray-700 text-sm mt-1'>
                        {product.description}
                      </p>
                      <div className='flex items-center justify-between'>
                        <span className='text-md text-blacks'>
                          $ {product.price}
                        </span>
                      </div>

                      <div className='mt-3'>
                        <p className='text-sm font-semibold'>Review (3)</p>
                        <div className='flex items-center gap-3 mt-1'>
                          <span className='flex text-gray-700'>
                            <FaRegStar size={14} className='text-yellow-400' />
                            <FaRegStar size={14} className='text-yellow-400' />
                            <FaRegStar size={14} className='text-yellow-400' />
                            <FaRegStar size={14} className='text-gray-400' />
                            <FaRegStar size={14} className='text-gray-400' />
                          </span>
                        </div>
                      </div>
                      <div className='grid grid-cols-12 gap-5 mt-5'>
                        <div className='col-span-4 flex gap-1.5'>
                          <button className='h-[40px] border border-black text-black px-3 py-2'>
                            <CiHeart size={20} />
                          </button>
                          <button className='h-[40px] border border-black text-black px-3 py-2'>
                            <IoIosGitCompare size={20} />
                          </button>
                        </div>
                        <button className='col-span-8 h-[40px] bg-black text-white hover:bg-gray-700 transition-colors px-5 py-2'>
                          View Details
                        </button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Page layout end here */}
    </div>
  );
};

export default Shop;
