import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const imgSrc = [
    "https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686884.jpg?w=1060&t=st=1688345830~exp=1688346430~hmac=c849651665ae22fdc66ac760fda599350c617eccf74774d8f71da0453892396b",
    "https://img.freepik.com/free-photo/easter-car-with-white-egg-pink-ribbon_23-2149301315.jpg?w=1060&t=st=1688360476~exp=1688361076~hmac=bf5d678ba655b717053411cfefd0fbca7aaf537befb9ee9c8d42946b7c94eda7",
    "https://img.freepik.com/free-photo/warm-blankets-plush-toy_23-2147698733.jpg?w=1060&t=st=1688345980~exp=1688346580~hmac=1cf89df5880d131545ff6ae73e4f291a1f6c4b31d2b56877aa29bb8d920ca1bb",
  ];

  return (
    <div className='grid grid-cols-9 gap-5 md:mx-0 mx-5'>
      <div className='md:col-span-7 col-span-9'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 2000 }}
          speed={2000}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div className='relative h-64 md:h-96 overflow-hidden rounded-lg'>
              <img
                src={imgSrc[0]}
                alt='Banner 1'
                className='w-full h-full max-h-full object-cover rounded-lg'
              />
              <div className='absolute top-5 left-10'>
                <button className='ml-5 mb-1 p-2  text-white font-medium text-xs border border-white rounded-full'>
                  Super Hit Doll Collectoins
                </button>
                <div className='text-4xl font-bold text-white'>
                  Dolls & Toys
                </div>
              </div>
              <div className='absolute top-4 right-5'>
                <button className='ml-5 mb-1 p-2 bg-[#F6C952] text-white font-medium text-xs rounded-lg'>
                  Explore now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative h-64 md:h-96 rounded-lg'>
              <img
                src={imgSrc[1]}
                alt='Banner 2'
                className='w-full h-full object-cover  rounded-lg'
              />
              <div className='absolute top-5 left-10'>
                <button className='ml-5 mb-1 p-2  text-white font-medium text-xs border border-white rounded-full'>
                  Super Hit Cars Collectoins
                </button>
                <div className='text-4xl font-bold text-white'>Cars & Toys</div>
              </div>
              <div className='absolute top-4 right-5'>
                <button className='ml-5 mb-1 p-2 bg-[#F7B9A2] text-white font-medium text-xs rounded-lg'>
                  Explore now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative h-64 md:h-96 rounded-lg'>
              <img
                src={imgSrc[2]}
                alt='Banner 3'
                className='w-full h-full object-cover rounded-lg'
              />
              <div className='absolute top-10 right-10'>
                <button className='ml-5 mb-1 p-2  text-white font-medium text-xs border border-white rounded-full'>
                  Super Hit Cloth Collectoins
                </button>
                <div className='text-4xl font-bold text-white'>
                  Cloth & Toys
                </div>
              </div>
              <div className='absolute top-36 right-28'>
                <button className='ml-5 mb-1 p-2 bg-[#F6C952] text-white font-medium text-xs rounded-lg'>
                  Explore now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='col-span-2 md:block hidden'>
        <div className='rounded-lg relative md:h-96'>
          <img
            src='https://img.freepik.com/free-photo/charming-boy-with-reindeer-horns_1187-140.jpg?w=740&t=st=1688351565~exp=1688352165~hmac=65974c91282a86b16effc5165df51444b278ef65dd8c21f9b21bc5526a6d4621'
            alt='Shoes'
            className='full h-full max-h-full object-cover rounded-lg'
          />
          <div className='absolute top-8 left-5'>
            <span className='bg-[#d91c19] p-1.5 rounded-lg text-xs font-medium  text-white'>
              Kids best store
            </span>
            <br />
            <span className='text-4xl text-white font-bold uppercase '>
              store
            </span>
          </div>
          <div className='absolute bottom-5 left-10'>
            <button className='bg-white px-3 text-slate-600 py-1 rounded-lg text-sm font-bold'>
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
