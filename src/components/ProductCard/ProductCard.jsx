import React from "react";

function ProductCard({ images }) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-blue-100'>
      <div className='relative'>
        <img className='w-full' src={images[2]} alt='Toy airplane' />
        <span className='absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase'>
          Hot
        </span>
        <span className='absolute top-0 right-0 ml-2 bg-yellow-500 text-white px-2 py-1 text-xs font-bold uppercase'>
          Sale
        </span>
      </div>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>Rattles Blue Baby Toy</div>
      </div>
      <div className='px-6 pt-4 pb-2 flex justify-between items-center'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          $80.00
        </span>
        <span className='inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          Save $20.00
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
