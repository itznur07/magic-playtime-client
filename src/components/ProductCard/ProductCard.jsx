import React, { useState } from "react";
import { FaEye, FaHeart, FaShoppingBag } from "react-icons/fa";

function ProductCard({ images, title, price, discount_price }) {
  const [image, hoverImage] = useState(0);

  return (
    <div className='max-w-sm border rounded overflow-hidden bg-[#F7F7F7]'>
      <div className='relative group'>
        <img
          onMouseOver={() => hoverImage(1)}
          onMouseLeave={() => hoverImage(0)}
          className={`w-full object-cover h-64`}
          src={images[image]}
          alt='Toy airplane'
        />
        <span className='absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase'>
          Hot
        </span>
        <span className='absolute top-0 right-0 ml-2 bg-yellow-500 text-white px-2 py-1 text-xs font-bold uppercase'>
          Sale
        </span>
        <div className='absolute top-20 right-0 hidden group-hover:block'>
          <ul className='md:space-y-5 cursor-pointer bg-[#fff] text-slate-600 p-2 py-4 shadow-lg rounded'>
            <li className='hover:shadow-inner hover:text-[#e52165]'>
              <FaShoppingBag></FaShoppingBag>
            </li>
            <li className='hover:shadow-inner hover:text-[#e52165]'>
              <FaHeart></FaHeart>{" "}
            </li>
            <li className='hover:shadow-inner hover:text-[#e52165]'>
              <FaEye></FaEye>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className='px-2 mt-5'>
        <div className='font-semibold text-lg text-center'>
          {title.slice(0, 16)}..
        </div>
      </div>
      <div
        className={`${
          discount_price
            ? "px-6 pt-4 pb-2 flex justify-between items-center"
            : "flex justify-center items-center text-center pt-4 pb-2 "
        }`}
      >
        <span
          className={`${
            discount_price
              ? "inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 line-through"
              : "bg-gray-200 rounded-full px-3 py-1 text-center text-sm font-semibold text-gray-700"
          }`}
        >
          ${price}
        </span>
        <span
          className={`inline-block ${
            discount_price ? "bg-green-200" : ""
          } rounded-full px-3 py-1 text-sm font-semibold  text-gray-700 `}
        >
          {discount_price ? `P: $${discount_price}` : null}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
