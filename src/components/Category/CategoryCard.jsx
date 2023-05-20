import React from "react";

const CategoryCard = ({ img, h1 }) => {
  return (
    <div>
      <img
        className='w-32 rounded-full border cursor-pointer p-2 border-[#e52165] hover:border-none bg-[#ffffff]'
        src={img}
        alt='product-1'
      />
      {/* <h1 className='text-center my-2 font-medium'>Name</h1> */}
    </div>
  );
};

export default CategoryCard;
