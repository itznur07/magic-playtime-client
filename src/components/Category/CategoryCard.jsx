import React from "react";

const CategoryCard = ({ img }) => {
  return (
    <div>
      <img
        className='w-32 rounded-full bg-[#ffffff] hover:bg-[#c3c3c3]'
        src={img}
        alt='product-1'
      />
    </div>
  );
};

export default CategoryCard;
