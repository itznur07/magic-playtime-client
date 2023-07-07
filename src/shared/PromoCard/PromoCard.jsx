import React from "react";

const PromoCard = () => {
  return (
    <div className='rounded-lg relative md:h-72 mt-5 border'>
      <img
        src='https://img.freepik.com/free-photo/charming-little-girl-pink-dress-looks-lovely-while-she-sleeps-floor_8353-7205.jpg?w=1060&t=st=1688696525~exp=1688697125~hmac=d416fd271c1c763ad006f9585059ec0ff8ae438dd7396e4554efa1d3162a41e7'
        alt='Shoes'
        className='w-full h-full max-h-full object-cover rounded-lg'
      />
      <div className='absolute top-8 left-5'>
        <span className='bg-[#e52165] p-1.5 rounded-lg text-xs font-medium  text-white'>
          soft toys
        </span>
        <br />
        <span className='text-4xl text-white font-bold uppercase '>60% off</span>
      </div>
      <div className='absolute bottom-5 left-10'>
        <button className='bg-white px-3 text-slate-600 py-1 rounded-lg text-sm font-bold'>
          Shop now
        </button>
      </div>
    </div>
  );
};

export default PromoCard;
