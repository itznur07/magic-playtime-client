import React, { useContext, useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../Providers/AuthProviders";
import Card from "./Card";

const ShopByCategory = () => {
  const { loading } = useContext(AuthContext);

  const [carData, setCarData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [dollData, setDollData] = useState([]);

  useEffect(() => {
    fetch("https://toy-marketplace-server-six.vercel.app/cartoys")
      .then((res) => res.json())
      .then((data) => {
        setCarData(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://toy-marketplace-server-six.vercel.app/sportstoys")
      .then((res) => res.json())
      .then((data) => {
        setSportsData(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://toy-marketplace-server-six.vercel.app/dolltoys")
      .then((res) => res.json())
      .then((data) => {
        setDollData(data);
      });
  }, []);

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
      <h1 className='text-3xl font-bold text-center mb-6 mt-5'>Shop By Category</h1>
      <div className='my-5 flex items-center justify-center'>
        <Tabs>
          <TabList>
            <Tab>Car Toys</Tab>
            <Tab>Sports Toys</Tab>
            <Tab>Doll Toys</Tab>
          </TabList>

          <TabPanel>
            {/* Render toys for Car category */}
            <div className=''>
              <div className='toy grid grid-cols-3  gap-4'>
                {carData?.map((toy) => (
                  <Card className='toy' key={toy._id} toy={toy} />
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            {/* Render toys for Sports category */}
            <div className=''>
              <div className='toy grid grid-cols-3  gap-4'>
                {sportsData?.map((toy) => (
                  <Card className='toy' key={toy._id} toy={toy} />
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            {/* Render toys for Doll category */}
            <div className=''>
              <div className='toy grid grid-cols-3  gap-4'>
                {dollData?.map((toy) => (
                  <Card className='toy' key={toy._id} toy={toy} />
                ))}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ShopByCategory;
