import React from "react";

function ProductCard({ images, title, price, discount_price }) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-blue-100'>
      <div className='relative'>
        <img
          className='w-full object-cover h-56'
          src={images[0]}
          alt='Toy airplane'
        />
        <span className='absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase'>
          Hot
        </span>
        <span className='absolute top-0 right-0 ml-2 bg-yellow-500 text-white px-2 py-1 text-xs font-bold uppercase'>
          Sale
        </span>
      </div>
      <div className='px-2 mt-5'>
        <div className='font-bold text-xl text-center'>
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
              ? "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 line-through"
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
