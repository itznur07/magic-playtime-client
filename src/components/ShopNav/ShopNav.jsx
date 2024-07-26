import React from "react";
import { FaArrowDown, FaColumns, FaList, FaSearch } from "react-icons/fa";

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
            className='border border-black p-2 px-4 w-[400px] outline-none'
          />
          <span className='absolute right-5 top-3 '>
            <FaSearch></FaSearch>
          </span>
        </div>

        <div className='flex items-center space-x-10'>
          <div className='flex items-center space-x-4 text-xl text-slate-500 cursor-pointer'>
            <span onClick={() => handleView("listview")}>
              <FaList />
            </span>
            <span onClick={() => handleView("gridview")}>
              <FaColumns></FaColumns>
            </span>
          </div>
          <div>
            {" "}
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
