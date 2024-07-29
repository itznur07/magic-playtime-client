import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Compares = () => {
  const { compares } = useContext(AuthContext);

  return (
    <>
      {/* Banner */}
      <div className='mb-5 relative h-44'>
        <div className='absolute inset-0 bg-gray-100 bg-opacity-40'></div>
        <div className='absolute inset-0 top-1/3 text-center text-black'>
          <h1 className='text-5xl font-bold text-black'>Compares</h1>
          <span className='text-sm  font-medium text-gray-600 mt-2'>
            <Link to='/'>Home</Link> /{" "}
            <span className='text-blue-400'>compares</span>
          </span>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {compares.map((product, index) => (
            <div key={index} className=' p-6 bg-gray-100'>
              <img
                src={product.images[0]}
                alt={product.title}
                className='w-full h-48 object-cover mb-4'
              />
              <h2 className='text-lg font-semibold mt-3'>{product.title}</h2>
              <div className='text-lg mb-2'>
                <span className='font-bold'>Price:</span> ${product.price}
              </div>
              <div className='text-md mb-4'>
                <span className='font-bold'>Description:</span>{" "}
                {product.description}
              </div>
              <div className='text-md mb-4'>
                <span className='font-bold'>Category:</span> {product.category}
              </div>
              <div className='text-md mb-4'>
                <span className='font-bold'>Rating:</span> {product.rating} / 5
              </div>
              <button className='mt-4 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Compares;
