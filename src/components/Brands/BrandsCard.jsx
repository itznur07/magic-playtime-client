import React from "react";
import Marquee from "react-fast-marquee";

const CompanyCard = ({ img, name }) => {
  return (
    <Marquee>
      <div>
        <img
          className='w-32 rounded-full cursor-pointer '
          src={img}
          alt='product-1'
        />
        <h1 className='text-center my-2 font-medium'>{name}</h1>
      </div>
    </Marquee>
  );
};

export default CompanyCard;
