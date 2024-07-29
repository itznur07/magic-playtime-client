import React, { useState } from "react";

const ProductCategorys = ({ setSelectedCategory }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const categories = [
    { name: "Electronics" },
    { name: "Shoes" },
    { name: "Backpack" },
    { name: "Cloth" },
    { name: "Books" },
    { name: "Soft Toys" },
    { name: "New Arrivals" },
    { name: "Children" },
    { name: "Decor" },
    { name: "Activity Toys" },
  ];

  return (
    <div className='bg-gray-100 md:mx-0 mx-5 min-h-[450px] h-auto'>
      <div className='bg-black p-5 w-full font-bold text-xl text-white '>
        Product Categories
      </div>
      <ul className='flex flex-col gap-4 text-sm font-semibold p-5'>
        {categories.map((category, index) => (
          <div key={index + 1} className='flex flex-col'>
            <div
              className='collapse-header flex items-center justify-between cursor-pointer hover:text-[#1fd1a5]'
              onClick={() => setSelectedCategory(category?.name)}
            >
              <span>{category.name}</span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategorys;
