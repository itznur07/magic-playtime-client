import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductCategorys = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const categories = [
    {
      name: "Accessories",
      subcategories: ["Hats", "Gloves", "Scarves"],
    },
    {
      name: "Backpack",
      subcategories: ["School Bags", "Travel Bags", "Hiking Bags"],
    },
    {
      name: "Cloth",
      subcategories: ["T-Shirts", "Jackets", "Pants"],
    },
    {
      name: "Books",
      subcategories: ["Fiction", "Non-Fiction", "Comics"],
    },
    {
      name: "Soft Toys",
      subcategories: [
        "Mathematical Toys",
        "Sports Toys",
        "Car Toys",
        "Bus Toys",
        "Doll Toys",
      ],
    },
    {
      name: "New Arrivals",
      subcategories: ["Latest Toys", "Trending Items", "New Brands"],
    },
    {
      name: "Children",
      subcategories: ["Games", "Learning Toys", "Puzzles"],
    },
    {
      name: "Decor",
      subcategories: ["Wall Art", "Vases", "Lamps"],
    },
    {
      name: "Activity Toys",
      subcategories: ["Outdoor Games", "Craft Kits", "Sports Equipment"],
    },
  ];

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className='bg-gray-100 md:mx-0 mx-5'>
      <div className='bg-green-600 p-5 w-full font-bold text-xl text-white'>
        Product Categories
      </div>
      <ul className='flex flex-col md:space-y-5 text-sm font-semibold p-5'>
        {categories.map((category, index) => (
          <div key={index} className='flex flex-col'>
            <div
              className='collapse-header flex items-center justify-between cursor-pointer hover:text-[#1fd1a5]'
              onClick={() => toggleCategory(index)}
            >
              <span>{category.name}</span>
              {openCategory === index ? (
                <FaMinus size={14} />
              ) : (
                <FaPlus size={14} />
              )}
            </div>
            <div
              className={`transition-max-height duration-300 ease-in-out ${
                openCategory === index ? "max-h-96" : "max-h-0"
              } overflow-hidden`}
            >
              <ul className='ml-5 mt-3 md:space-y-3'>
                {category.subcategories.slice(0, 4).map((subcat, subIndex) => (
                  <li
                    key={subIndex}
                    className='cursor-pointer hover:text-[#1fd1a5]'
                  >
                    {subcat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategorys;
