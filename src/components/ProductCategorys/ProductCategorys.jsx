import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductCategorys = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='shadow-lg rounded-lg '>
      <div className='bg-[#1fd1a5] p-5  w-full rounded-t-lg font-bold text-xl text-white'>
        Product Categories
      </div>
      <ul className='flex flex-col md:space-y-5 text-sm font-semibold p-5'>
        <li className='cursor-pointer hover:text-[#1fd1a5]'>Accessories</li>
        <li className='cursor-pointer hover:text-[#1fd1a5]'>Backpack</li>
        <li className='cursor-pointer hover:text-[#1fd1a5]'>Cloth</li>
        <li className='cursor-pointer hover:text-[#1fd1a5]'>Books</li>
        {/* collapse here */}
        <div className='flex flex-col'>
          <div className='collapse-header flex items-center justify-between'>
            <span>Soft Toys</span>
            {isOpen ? (
              <button
                type='button'
                className='text-xl font-medium'
                onClick={() => setIsOpen(false)}
              >
                <FaMinus size={14}></FaMinus>
              </button>
            ) : (
              <button
                type='button'
                className='text-xl font-medium'
                onClick={() => setIsOpen(true)}
              >
                <FaPlus size={14}></FaPlus>
              </button>
            )}
          </div>
          <div className={isOpen ? "collapse-content" : "hidden"}>
            <ul className='ml-5 mt-3 md:space-y-3 '>
              <li className=' cursor-pointer hover:text-[#1fd1a5]'>
                Mathmatical Toys
              </li>
              <li className=' cursor-pointer hover:text-[#1fd1a5]'>
                Sports Toys
              </li>
              <li className=' cursor-pointer hover:text-[#1fd1a5]'>Car Toys</li>
              <li className=' cursor-pointer hover:text-[#1fd1a5]'>Bus Toys</li>
              <li className=' cursor-pointer hover:text-[#1fd1a5]'>
                Doll Toys
              </li>
            </ul>
          </div>
        </div>
        {/* collapse ends here */}
        <li className='cursor-pointer hover:text-[#1fd1a5]'>New Arrivals</li>
        <li className='cursor-pointer hover:text-[#1fd1a5]'>Children</li>
        <li className='cursor-pointer hover:text-[#1fd1a5]'>Decor</li>
        <li className='cursor-pointer hover:text-[#1fd1a5]'>Activity Toys</li>
      </ul>
    </div>
  );
};

export default ProductCategorys;
