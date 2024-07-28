import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

const Banner = () => {
  const imgSrc = [banner1, banner2, banner3];

  const banners = [
    {
      image: imgSrc[0],
      buttonText: "Buy Now",
      title: "Watch",
      description: "Amazing watch quality and performance",
    },
    {
      image: imgSrc[1],
      buttonText: "Buy Now",
      title: "Shoes",
      description: "Great for running, very comfortable!",
    },
    {
      image: imgSrc[2],
      buttonText: "Buy Now",
      title: "Cloth",
      description: "Men denim pent, very comfortable!",
    },
  ];

  return (
    <div className='mx-5 md:mx-0'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        speed={1500}
        loop={true}
        className='lg:h-[450px]'
        modules={[Pagination, Navigation, Autoplay]}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div>
              <img
                src={banner.image}
                alt={`Banner ${index + 1}`}
                className='relative w-full h-full object-cover '
              />

              {/* Banner Content */}
              <div className='absolute inset-0 top-1/3 left-10'>
                <h1 className='text-lg font-bold'>{banner.title}</h1>
                <p className='text-3xl font-bold w-[50%] mt-1'>
                  {banner.description}
                </p>
                <button className='mt-5 bg-black text-white px-4 py-2'>
                  <Link to='/shop'>{banner.buttonText}</Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
