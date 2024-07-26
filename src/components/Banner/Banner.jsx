import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const imgSrc = [
    "https://mobirise.com/extensions/commercem4/assets/images/gallery01.jpg",
    "https://mobirise.com/extensions/commercem4/assets/images/gallery04.jpg",
    "https://mobirise.com/extensions/commercem4/assets/images/gallery03.jpg",
  ];

  const banners = [
    {
      image: imgSrc[0],
      buttonText: "Super Hit Doll Collections",
      title: "Dolls & Toys",
      buttonPosition: "top-5 left-10",
      titlePosition: "top-20 left-10",
    },
    {
      image: imgSrc[1],
      buttonText: "Super Hit Cars Collections",
      title: "Cars & Toys",
      buttonPosition: "top-5 left-10",
      titlePosition: "top-20 left-10",
    },
    {
      image: imgSrc[2],
      buttonText: "Super Hit Cloth Collections",
      title: "Cloth & Toys",
      buttonPosition: "top-10 right-10",
      titlePosition: "top-20 right-10",
    },
  ];

  return (
    <div className='grid grid-cols-9 gap-5 mx-5 md:mx-0'>
      <div className='col-span-9'>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className='relative h-64 md:h-[500px]'>
                <img
                  src={banner.image}
                  alt={`Banner ${index + 1}`}
                  className='w-full h-full object-cover rounded-lg'
                />
                <div className={`absolute ${banner.buttonPosition}`}>
                  <button className='mb-2 p-2 text-white font-medium text-xs border border-white rounded-full'>
                    {banner.buttonText}
                  </button>
                </div>
                <div className={`absolute ${banner.titlePosition}`}>
                  <div className='text-4xl font-bold text-white'>
                    {banner.title}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
