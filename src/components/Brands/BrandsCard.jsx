import React from "react";

const CompanyCard = ({ img, name }) => {
  return (
    <div>
      <img
        className='w-32 rounded-full border cursor-pointer '
        src={img}
        alt='product-1'
      />
      <h1 className='text-center my-2 font-medium'>{name}</h1>
    </div>
  );
};

export default CompanyCard;
