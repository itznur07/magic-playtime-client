import React from "react";
import {
  FaAddressCard,
  FaBabyCarriage,
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='md:mx-24'>
      <div className='flex items-center justify-between flex-wrap'>
        <div className='w-full md:w-1/4 text-start py-2 text-black'>
          <Link to='/'>
            <div className='flex items-center text-3xl space-x-2 text-[#e52165]'>
              <FaBabyCarriage />
              <span className='font-bold'>Magic Playtime</span>
            </div>
          </Link>
          <p className='text-nd mt-2'>
            Welcome to Toyland, your ultimate destination for all things play!
            We offer a vast selection of toys, games
          </p>
          <p className='text-nd mt-2'>
            classic favorites to the latest trends, our curated collection
            ensures endless hours of fun and imaginative play.
          </p>
          <div className='flex text-md  space-x-4 mt-4 cursor-pointer'>
            <span className='bg-[#e52165] text-white px-3 py-2 rounded'>
              <FaFacebook />
            </span>
            <span className='bg-[#e52165] text-white px-3 py-2 rounded'>
              <FaTwitter />
            </span>
            <span className='bg-[#e52165] text-white px-3 py-2 rounded'>
              <FaInstagram />
            </span>
          </div>
        </div>
        <div className='w-full md:w-1/4 text-start px-4 py-2 text-black'>
          <h2 className='text-xl font-semibold'>Information</h2>
          <div className='text-md text-gray-600 cursor-pointer mt-3 space-y-4'>
            <p className='hover:text-[#e52165]'>&rarr; About babydo</p>
            <p className='hover:text-[#e52165]'>&rarr; Career </p>
            <p className='hover:text-[#e52165]'>&rarr; Delivery Time</p>
            <p className='hover:text-[#e52165]'>&rarr; Help dask</p>
            <p className='hover:text-[#e52165]'>&rarr; Tarms & Condition</p>
          </div>
        </div>
        <div className='w-full md:w-1/4 text-start text-black px-4 py-2'>
          <h2 className='text-xl font-semibold'>Shipping & Return</h2>
          <div className='text-md text-gray-600 cursor-pointer mt-3 space-y-4 '>
            <p className='hover:text-[#e52165]'>&rarr; Track Order</p>
            <p className='hover:text-[#e52165]'>&rarr; Shipping info</p>
            <p className='hover:text-[#e52165]'>&rarr; Tracking location</p>
            <p className='hover:text-[#e52165]'>&rarr; Store pickup</p>
            <p className='hover:text-[#e52165]'>&rarr; Delivery Information</p>
          </div>
        </div>
        <div className='w-full md:w-1/4 text-start text-black px-4 py-2'>
          <h2 className='text-xl font-semibold'>Have a Questions?</h2>
          <div className='text-md text-gray-600 cursor-pointer mt-3 space-y-4'>
            <div className='flex  space-x-3'>
              <span className='text-[#e52165]'>
                <FaAddressCard />{" "}
              </span>{" "}
              <p>
                {" "}
                203 Fake St. Mountain View, <br /> San Francisco, <br />{" "}
                California, USA
              </p>
            </div>
            <p className='flex space-x-3'>
              <span className='text-[#e52165]'>
                <FaPhone />
              </span>{" "}
              <span>+2 392 3929 210</span>
            </p>
            <div className='flex  space-x-3'>
              {" "}
              <span className='text-[#e52165]'>
                <FaTelegram />
              </span>{" "}
              <p>magicplaytime@gmail.com</p>
            </div>
            <div className='flex  space-x-3'>
              {" "}
              <span className='text-[#e52165]'>
                <FaCopyright />
              </span>{" "}
              <p>@copyright by magic playtime</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
