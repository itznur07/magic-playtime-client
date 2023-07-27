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
        <Tabs>
          <TabList className='flex flex-col md:justify-normal justify-center md:flex-row md:mb-5'>
            <Tab className='mr-4  md:w-auto w-full mb-4 md:mb-0 bg-gradient-to-r from-[#26f7aa] to-[#4cfdbc] px-4 py-2 border outline-none rounded-sm cursor-pointer text-white font-medium hover:shadow-lg'>
              {" "}
              All Toys
            </Tab>
            <Tab className='mr-4 mb-4  md:w-auto w-full md:mb-0 bg-gradient-to-r from-[#26f7aa] to-[#4cfdbc] px-4 py-2 border outline-none  rounded-sm cursor-pointer text-white font-medium hover:shadow-lg'>
              {" "}
              Car Toys
            </Tab>
            <Tab className='mr-4 mb-4  md:w-auto w-full md:mb-0 bg-gradient-to-r from-[#26f7aa] to-[#4cfdbc] px-4 p-2 border outline-none rounded-sm  cursor-pointer text-white font-medium hover:shadow-lg'>
              {" "}
              Truck
            </Tab>
            <Tab className='mr-4 mb-4 md:w-auto w-full md:mb-0 bg-gradient-to-r from-[#26f7aa] to-[#4cfdbc] px-4 py-2 border outline-none rounded-sm cursor-pointer text-white font-medium hover:shadow-lg'>
              {" "}
              Bus
            </Tab>
          </TabList>

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
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
              {car?.map((toy) => (
                <ProductCard className='toy' key={toy._id} {...toy} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            {/* Render toys for Sports category */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
              {truck?.map((toy) => (
                <ProductCard className='toy' key={toy._id} {...toy} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            {/* Render toys for Doll category */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
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
