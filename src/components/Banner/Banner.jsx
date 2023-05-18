import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  /** Slider settings */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const imgSrc = [
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1140&q=80",
    "https://images.unsplash.com/photo-1578349035260-9f3d4042f1f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1517881837958-1c0d1819dbd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
  ];

  return (
    <>
      <Slider {...settings}>
        <div className='relative h-96 '>
          <img
            src={imgSrc[0]}
            alt='Banner 1'
            className='w-full h-full object-cover'
          />
          <div className='absolute top-28 left-36'>
            <div>
              <span className='text-3xl font-bold my-3'>
                Discover Endless Fun and Adventure <br /> with Our Amazing Toys
              </span>{" "}
              <br />
              <span className='text-md capitalize mt-4 font-medium'>
                Welcome to ToyLand, the ultimate destination for all your toy{" "}
                <br />
                needs. Dive into a world of imagination and play with our <br />
                extensive collection of toys, games, and playsets. <br />
              </span>
              <br />
              <button className='uppercase bg-[#e52165] px-5 py-2.5 rounded text-white'>
                Shop now
              </button>
            </div>
          </div>
        </div>
        <div className='relative h-96'>
          <img
            src={imgSrc[1]}
            alt='Banner 2'
            className='w-full h-full object-cover '
          />
          <div className='absolute top-32 left-36'>
            <div>
              <span className='text-3xl font-bold mb-2'>
                Toys Galore: Unleash the Fun and Excitement!
              </span>{" "}
              <br />
              <span className='text-md capitalize mt-4 font-medium'>
                Step into a world filled with laughter, joy, and boundless
                imagination. <br /> Our extensive collection of toys is a
                treasure trove of endless possibilities.
              </span>
              <br />
              <button className='uppercase bg-[#e52165] mt-3 px-5 py-2.5 rounded text-white'>
                Shop now
              </button>
            </div>
          </div>
        </div>
        <div className='relative h-96 '>
          <img
            src={imgSrc[2]}
            alt='Banner 3'
            className='w-full h-full object-cover'
          />
          <div className='absolute top-28 left-36'>
            <div>
              <span className='text-3xl font-bold mb-2'>
                Elevate Playtime to Extraordinary Heights with <br /> Our
                Incredible Toy Collection!
              </span>{" "}
              <br />
              <span className='text-md capitalize mt-4 font-medium'>
                Dive into a world of imagination, where every toy has a story to{" "}
                <br />
                tell. Discover a captivating array of toys that inspire
                laughter, learning, and endless fun
              </span>{" "}
              <br />
              <button className='uppercase bg-[#e52165] mt-3 px-5 py-2.5 rounded text-white'>
                Shop now
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Banner;
