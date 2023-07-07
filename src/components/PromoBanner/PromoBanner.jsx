import React from "react";

const PromoBanner = () => {
  return (
    <div className='grid grid-cols-9 md:gap-5 md:mt-10'>
      <div className='relative col-span-3 order-last'>
        <img
          src='https://img.freepik.com/free-photo/cute-fluffy-monkey-toys_23-2149642406.jpg?w=360&t=st=1688696133~exp=1688696733~hmac=338fe24fe73d8d51ac4fbec7a9163d9cab755ff05d647602466f03c185f764b1'
          alt='Bunny and dog'
          className='h-80 w-full object-cover rounded-lg'
        />
        <div className="absolute top-3 left-4 text-lg font-medium">
            <span className="text-white">15% OFF</span><br />
                <span className="text-[#000]">Special Offer</span>
        </div>
      </div>
      <div className='relative col-span-6 overflow-hidden rounded-lg'>
        <img
          src='https://img.freepik.com/free-photo/cute-plush-toys-arrangement_23-2150312314.jpg?w=1060&t=st=1688620150~exp=1688620750~hmac=3699e965521b97886897d3c4088072a48c30d9bd6946eb119df0bd8d7d226fdc'
          alt='Price tag'
          className='h-80 w-full object-cover rounded-lg cursor-pointer hover:scale-105 transition-all ease-linear duration-300 delay-75 '
        />
        <div className='absolute bottom-5 left-4 text-4xl font-bold mt-5'>
          <button className='bg-[#e52165] p-2 text-white rounded-lg'>
            Kids
          </button>{" "}
          <button className='text-[#ffffff]'>Toys</button>
        </div>
        <div className='absolute md:rotate-90 top-14 -left-7'>
          <h1 className='text-3xl font-bold text-[#e52165]'>Hurry...!</h1>
          <span className='text-lg font-medium mt-1 text-white'>
            Limited Edition
          </span>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
