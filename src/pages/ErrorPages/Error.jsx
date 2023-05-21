import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    
    <div className='flex flex-col items-center justify-center h-screen'>
      <img
        src='https://media2.giphy.com/media/aYpmlCXgX9dc09dbpl/giphy.gif?cid=ecf05e473eyeu6qextpcno641ebn52n77v98d8flyaln9atn&ep=v1_gifs_related&rid=giphy.gif&ct=g'
        alt='404 Page Not Found'
        className='max-w-full'
      />
      <Link
        to='/'
        className='border border-[#434142] px-4 py-2 rounded-sm mt-8 text-gray-800 hover:text-slate-500'
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
