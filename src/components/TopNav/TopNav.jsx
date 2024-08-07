import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className='py-2.5 bg-[#1fd1a5] md:block hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-5 text-sm text-white font-medium'>
            <p>Enjoy 10% off everything with code GIFT2023</p>
            <Link to='/shop'>
              <button className='bg-white hover:bg-[#e52165] text-black hover:text-white font-medium py-1 px-3 rounded-lg '>
                Shop Now
              </button>
            </Link>
          </div>
          <div className='text-sm font-medium text-white flex items-center space-x-4'>
            <Link to='/shop'>
              <button className='text-white font-bold w-full'>Get Offer</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
