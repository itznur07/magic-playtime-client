import React from "react";
import { Link } from "react-router-dom";

const Card = ({ toy }) => {
  const handleViewDetails = (_id) => {};

  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden w-96 mt-5'>
      <img
        src={toy?.picture}
        alt={toy?.name}
        className='w-full h-56 object-cover'
      />
      <div className='p-4'>
        <h3 className='text-xl font-semibold mb-2'>{toy?.name}</h3>
        <p className='text-gray-600 mb-2'>Price: ${toy?.price}</p>
        <div className='flex items-center mb-2'>
          <span className='text-yellow-400 mr-1'>&#9733;</span>
          <span className='text-gray-600'>{toy?.rating}</span>
        </div>
        <Link to='/toy-details'>
          <button
            className='bg-[#e52165] hover:bg-[#0d1137] text-white px-4 py-2 rounded-md w-full'
            onClick={() => handleViewDetails(toy?._id)}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
