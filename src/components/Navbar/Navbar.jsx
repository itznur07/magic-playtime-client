import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className='bg-white relative z-50'>
        <nav className='md:flex md:flex-row flex flex-col items-center justify-between flex-wrap  py-6 md:mx-24'>
          {/* logo here */}
          <div className='flex items-center flex-shrink-0 text-gray-500 mr-6'>
            <Link to='/'>
              <div className='flex items-center space-x-2 text-2xl'>
                <img src={logo} className='w-16' alt='logo' />
                <span>Magic Playtime</span>
              </div>
            </Link>
          </div>
          {/* navigation link here */}
          <div className='md:flex md:flex-row flex flex-col items-center'>
            <Link
              to='/'
              className='inline-block text-md px-4 py-2 leading-none   text-gray-800   hover:text-blue-500 hover:bg-white mt-4 lg:mt-0'
            >
              Home
            </Link>
            <Link
              to='/alltoys'
              className='relative inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              All Toys
            </Link>
            <Link
              to='/addtoys'
              className='relative inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              All Toys
            </Link>
            <Link
              to='/mytoys'
              className='inline-block text-md px-4 py-2 leading-none  text-gray-800  hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              My Toys
            </Link>
            <Link
              to='/blogs'
              className='relative inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              Blogs
            </Link>
            <Link
              to='/contact'
              className='inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              Contact
            </Link>
          </div>
          {/* login & cart & wish icon here */}
          <div>
            <div className='flex items-center md:space-x-6'>
              {/* 
                <button
                  onClick={handleLogOut}
                  className='px-4 py-2.5 rounded bg-[#FF3811] text-white font-semibold'
                >
                  Log out
                </button> */}

              <Link to='/login'>
                <button className='px-4 py-2.5 rounded bg-[#FF3811] text-white font-semibold'>
                  Log in
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
