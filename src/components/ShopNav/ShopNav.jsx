import React from "react";
import { CiCircleList, CiGrid42 } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const ShopNav = ({ handleView, searchText, setSearchText, sort, setSort }) => {
  const handleSortChange = (value) => {
    console.log(`Selected sort option: ${value}`);
  };

  return (
    <div className='mb-8 mt-1'>
      <div className='flex items-center justify-between'>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search items'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className='relative w-[500px]  p-2 border border-gray-300 outline-none'
          />
          <IoSearchOutline
            className='absolute right-3 top-2.5 text-gray-400'
            size={24}
          />
        </div>

        <div className='flex items-center gap-7'>
          <div className='flex items-center gap-5 text-xl text-slate-500 cursor-pointer'>
            <span onClick={() => handleView("listview")}>
              <CiCircleList size={24} />
            </span>
            <span onClick={() => handleView("gridview")}>
              <CiGrid42 size={24} />
            </span>
          </div>
          <div>
            <select
              defaultValue='default'
              className='w-40 border outline-none py-2.5 px-1 rounded'
              onChange={handleSortChange}
              suffixIcon={<FaArrowDown />}
            >
              <option value='default' disabled>
                Sort by
              </option>
              <option
                onClick={() => setSort(() => b - a)}
                value='priceHighToLow'
              >
                Price: High to Low
              </option>
              <option
                onClick={() => setSort(() => a - b)}
                value='priceLowToHigh'
              >
                Price: Low to High
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNav;
