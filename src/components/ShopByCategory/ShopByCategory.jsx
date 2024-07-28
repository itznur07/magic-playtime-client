import React, { useContext, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../Providers/AuthProviders";
import ProductCard from "../ProductCard/ProductCard";

const ShopByCategory = () => {
  const { loading, products } = useContext(AuthContext);

  const all = products;
  const car = products.filter((product) => product.categories[1] === "car");
  const truck = products.filter((product) => product.categories[1] === "truck");
  const bus = products.filter((product) => product.categories[1] === "bus");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleViewDetails = () => {
    if (!isLoggedIn) {
      alert("You have to log in first to view details");
      // Redirect to the login page
    } else {
      // Proceed with viewing details
    }
  };

  return (
    <>
      <div className='my-5 flex items-center justify-center mt-16'>
        <Tabs type=''>
          {/* Tab List */}
          <div className='flex items-center justify-between mb-10'>
            <TabList className='flex gap-7'>
              <Tab className='text-xl font-bold border-b-2 border-black outline-none cursor-pointer'>
                New Arrivals
              </Tab>
              <Tab className='text-xl font-bold hover:border-b-2 border-black outline-none cursor-pointer'>
                Best Sellers
              </Tab>
              <Tab className='text-xl font-bold hover:border-b-2 outline-none border-black cursor-pointer'>
                Sale Items
              </Tab>
            </TabList>
            <div className='text-xl font-bold'>View All</div>
          </div>

          <TabPanel>
            {/* Render toys for Car category */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
              {all?.slice(0, 8).map((product) => (
                <ProductCard
                  className='toy'
                  key={product._id}
                  product={product}
                  {...product}
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            {/* Render toys for Car category */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
              {car?.map((toy) => (
                <ProductCard className='toy' key={toy._id} {...toy} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            {/* Render toys for Sports category */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
              {truck?.map((toy) => (
                <ProductCard className='toy' key={toy._id} {...toy} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            {/* Render toys for Doll category */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
              {bus?.map((toy) => (
                <ProductCard className='toy' key={toy._id} {...toy} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ShopByCategory;
