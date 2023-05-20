import React, { useEffect, useState } from "react";
import { FaRegHeart, FaShareAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
  const params = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://toy-marketplace-server-six.vercel.app/cartoys/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-six.vercel.app/sportstoys/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  useEffect(() => {
    fetch(`https://toy-marketplace-server-six.vercel.app/dolltoys/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className='flex items-center justify-between md:mx-24 my-10 mt-8'>
      {/* image */}
      <div className='w-full md:w-1/2 p-4'>
        <div className='flex justify-center'>
          <div className='relative'>
            <img
              src={data?.picture}
              alt='Product'
              className='max-w-full h-auto rounded'
            />
          </div>
        </div>
      </div>
      {/* details */}
      <div className='w-full md:w-1/2 p-4'>
        <h2 className='text-3xl font-semibold mb-4'>{data?.name}</h2>
        <h2 className='text-xl font-semibold mb-4'>Price: ${data?.price}</h2>
        <div className='flex items-center mb-4'>
          <span className='text-yellow-500 mr-2'>
            &#9733; &#9733; &#9733; &#9733; &#9734;
          </span>
          <span className='text-gray-600 text-sm'>{data?.rating}</span>
        </div>
        <p className='text-gray-600 mb-4'>
          Our toys are carefully curated to ensure they meet the highest safety{" "}
          <br />
          standards, so you can shop with confidence knowing that your child's{" "}
          <br />
          well-being is our top priority. Whether you're looking for classic{" "}
          <br />
          toys that evoke nostalgia or the latest innovative gadgets, we have it{" "}
          <br />
          all.
        </p>
        <div className='flex items-center mt-4'>
          <span className='text-gray-500 mr-4'>Share:</span>
          <FaShareAlt className='text-gray-500 hover:text-gray-600 cursor-pointer mr-2' />
          <FaRegHeart className='text-gray-500 hover:text-red-500 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
