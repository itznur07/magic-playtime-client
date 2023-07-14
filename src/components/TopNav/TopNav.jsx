import React from "react";
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <div className='py-2.5 bg-[#1fd1a5]'>
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
            <p>Currency</p>
            <select className='p-1 rounded-sm text-black h-auto outline-none w-full'>
              <option>USD-$</option>
              <option>BDT-TK</option>
              <option>IND-RS</option>
              <option>UK-$</option>
              <option>PK-RS</option>
            </select>
            <span className=' w-0.5 h-6 bg-slate-300'></span>
            <Link to="/shop" ><button className='text-white font-bold w-full'>Get Offer</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
