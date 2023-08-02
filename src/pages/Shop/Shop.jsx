import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductCategorys from "../../components/ProductCategorys/ProductCategorys";
import ShopNav from "../../components/ShopNav/ShopNav";

const Shop = () => {
  const { products } = useContext(AuthContext);
  const [view, setView] = useState(4);
  const [searchText, setSearchText] = useState("");

  const matchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleView = (view) => {
    if (view === "listview") {
      setView(1);
    } else if (view === "gridview") {
      setView(4);
    } else {
      alert("no view");
    }
  };

  return (
    <div>
      {/* banner */}
      <div className='mb-5 relative'>
        <img
          src='https://img.freepik.com/free-photo/baby-shoes-toy-camera-nursery-decorations_23-2147698717.jpg?w=1060&t=st=1689263351~exp=1689263951~hmac=e3bc754cce3818da66e4f25cf8d56415f03269aadbab44209928d23484019615'
          alt='cover-image'
          className='w-full object-cover h-56'
        />
        <div className='absolute inset-0 bg-gray-900 bg-opacity-40'></div>
        <div className='absolute inset-0 top-24 text-center'>
          <h1 className='text-5xl font-bold text-white'>Shop</h1>
          <span className='text-sm  font-medium text-white mt-2'>
            <Link to='/'>Home</Link> / <span>Shop</span>
          </span>
        </div>
      </div>

      {/* Page layout */}
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-12 gap-10'>
          <div className='col-span-3 md:block hidden'>
            <ProductCategorys></ProductCategorys>
            <div className='mt-5'>
              <div className='rounded-lg border'>
                <div className='bg-[#F3F3F3] p-5  w-full rounded-t-lg font-bold text-xl '>
                  Filter
                </div>
                <div className='py-2 mt-4 mx-3'>
                  <PriceSlider />
                </div>
              </div>
            </div>
            <FeatureCard></FeatureCard>
          </div>
          {/* Shop Products */}
          <div className='col-span-9'>
            <ShopNav
              searchText={searchText}
              setSearchText={setSearchText}
              handleView={handleView}
            ></ShopNav>
            <div className={`grid md:grid-cols-${view} grid-cols-1  gap-7`}>
              {matchedProducts?.slice(0, 16).map((product) => (
                <div
                  className={`${
                    view === 1 ? "grid grid-cols-2 items-center" : ""
                  }`}
                >
                  <ProductCard
                    key={product.id}
                    product={product}
                    {...product}
                  />{" "}
                  {view === 1 ? (
                    <div className='text-center space-y-2 bg-[#f5f5f5] p-5 rounded'>
                      <h1 className='font-bold text-lg'>{product.title}</h1>
                      <h1 className='text-md'>{product.description}</h1>
                      <span className='text-lg font-bold mt-2'>
                        Price: ${product.discount_price || product.price}
                      </span>
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

/*** Price Slider */

const PriceSlider = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevState) => ({
      ...prevState,
      [name]: parseInt(value),
    }));
  };

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <span className='text-gray-600'>Price Range:</span>
        <span className='font-bold'>
          ${priceRange.min} - ${priceRange.max}
        </span>
      </div>
      <input
        type='range'
        name='min'
        min='0'
        max='100'
        value={priceRange.min}
        onChange={handlePriceChange}
        className='w-full appearance-none h-1 bg-gray-200 rounded-full focus:outline-none'
      />
      <input
        type='range'
        name='max'
        min='0'
        max='100'
        value={priceRange.max}
        onChange={handlePriceChange}
        className='w-full appearance-none h-1 bg-gray-200 rounded-full focus:outline-none mt-4  '
      />
    </div>
  );
};

export default Shop;
