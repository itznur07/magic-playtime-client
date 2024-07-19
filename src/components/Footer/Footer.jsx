import {
  FaArrowRight,
  FaCaretRight,
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='max-lg:mt-16'>
      <div className='w-full max-xl:h-full h-[550.60px] p-14 bg-gray-100 max-lg:p-5  flex-col justify-start items-center gap-8 flex'>
        <div className='self-stretch justify-center items-start gap-32 max-lg:gap-10  max-xl:flex-col flex'>
          <div className='grow shrink basis-0 flex-col justify-center  items-start gap-8 inline-flex'>
            <div className='self-stretch h-[156px] flex-col justify-center items-start gap-6 flex'>
              <div className='w-[162.57px] h-[52px] relative'>
                <div className=' text-white w-[162.58px] h-[52px] left-[-0px] top-[-0px] absolute'>
                  <Link
                    to='/'
                    id='logo'
                    className='text-3xl flex items-center font-bold font-butler text-black'
                  >
                    Hakikat
                  </Link>
                </div>
              </div>
              <div className='self-stretch text-black text-xs font-medium font-lato capitalize leading-tight'>
                Our activities in the oil and petrochemical sector, engineering,
                construction, and production of lubricants date back to 25 years
                ago An activity that continues to grow and develop through the
                design and implementation of various projects
              </div>
            </div>
            <div
              role='button'
              className='self-stretch justify-between items-end  max-xl:flex-wrap   flex'
            >
              <div className='p-[18px] rounded-[10px] border border-black justify-start items-start gap-2.5 flex'>
                <div className='w-[30px] h-[30px] pb-[0.11px] justify-center  text-3xl items-center flex'>
                  <FaFacebook />
                </div>
              </div>

              <div className='p-[18px] rounded-[10px] border border-black justify-start items-start gap-2.5 flex'>
                <div className='w-[30px] h-[30px] pb-[0.11px] justify-center text-primary-color text-3xl items-center flex'>
                  <FaInstagram />
                </div>
              </div>

              <div className='p-[18px] rounded-[10px] border border-black justify-start items-start gap-2.5 flex'>
                <a
                  href='https://t.me/msipromot'
                  target='_blank'
                  className='w-[30px] h-[30px] pb-[0.11px] justify-center text-primary-color text-3xl items-center flex'
                >
                  <FaTelegramPlane />
                </a>
              </div>
              <div className='p-[18px] rounded-[10px] border border-black justify-start items-start gap-2.5 flex'>
                <a
                  href='https://t.me/msipromot'
                  target='_blank'
                  className='w-[30px] h-[30px] pb-[0.11px] justify-center text-primary-color text-3xl items-center flex'
                >
                  <FaThreads />
                </a>
              </div>

              <div className='p-[18px] rounded-[10px] border border-black justify-start items-start gap-2.5 flex'>
                <a
                  href='https://x.com/MsiPromot'
                  target='_blank'
                  className='w-[30px] h-[30px] pb-[0.11px] justify-center  text-3xl items-center flex'
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
          <div
            className='w-[700px] max-xl:w-full flex-col justify-center items-start gap-12 
           inline-flex'
          >
            <div className='justify-start items-start gap-6 inline-flex max-lg:w-full max-lg:flex-col'>
              <div className='justify-start items-center gap-[19px] flex'>
                <div className='w-[52px] h-[52px] p-3 bg-primary-color/25 rounded-lg shadow justify-center items-center gap-2.5 flex'>
                  <div className='w-8 h-8 text-2xl text-black justify-center items-center flex'>
                    <HiOutlineMail />
                  </div>
                </div>
                <div className='flex-col justify-start items-start gap-1 inline-flex'>
                  <div className='text-black text-2xl font-semibold font-butler capitalize leading-tight'>
                    Enter Your Email
                  </div>
                  <div className='text-black text-sm font-normal font-lato capitalize leading-tight'>
                    Our colleagues will contact you soon
                  </div>
                </div>
              </div>
              <div className='h-[52px] max-lg:w-full justify-start items-start gap-3  flex'>
                <div className='grow shrink basis-0 h-[52px]  py-4 rounded-md border border-black justify-start items-center gap-2.5 flex'>
                  <input
                    type='email'
                    placeholder='Enter Email *'
                    className='w-full px-5 focus:outline-none rounded-lg bg-transparent  text-primary-color caret-primary-color h-[50px]'
                  />
                </div>
                <div className='w-[50px] px-4 bg-gray-100 rounded-md justify-center h-full items-center gap-2 flex'>
                  <div className='w-[18px] h-[18px] justify-center items-center flex'>
                    <FaArrowRight className='text-black' />
                  </div>
                </div>
              </div>
            </div>
            <div className='self-stretch justify-between items-start max-lg:flex-col gap-y-10 flex'>
              <div className='flex-col justify-start items-start gap-8 inline-flex'>
                <div className='justify-center items-center gap-2 inline-flex'>
                  <div className='w-[15px] h-1 bg-primary-color rounded-[100px] shadow' />
                  <div className='text-black text-lg font-semibold font-lato capitalize leading-tight'>
                    Services
                  </div>
                </div>
                <div className='flex-col justify-start items-start gap-[18px] flex'>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 text-primary-color h-3 justify-center items-center flex'>
                      <FaCaretRight />
                    </div>
                    <div className='text-black text-sm font-normal font-lato capitalize leading-tight'>
                      Search engine optimization
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 text-primary-color h-3 justify-center items-center flex'>
                      <FaCaretRight />
                    </div>
                    <div className='text-black text-sm font-normal font-lato capitalize leading-tight'>
                      Pay-per-click advertising
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 text-primary-color h-3 justify-center items-center flex'>
                      <FaCaretRight />
                    </div>
                    <div className='text-black text-sm font-normal font-lato capitalize leading-tight'>
                      Social Media Marketing
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 text-primary-color h-3 justify-center items-center flex'>
                      <FaCaretRight />
                    </div>
                    <div className='text-black text-sm font-normal font-lato capitalize leading-tight'>
                      Digital Marketing
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 text-primary-color h-3 justify-center items-center flex'>
                      <FaCaretRight />
                    </div>
                    <div className='text-black text-sm font-normal font-lato capitalize leading-tight'>
                      Crypto Services
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 text-primary-color h-3 justify-center items-center flex'>
                      <FaCaretRight />
                    </div>
                    <div className='text-black text-sm font-normal font-lato capitalize leading-tight'>
                      Web & Mobile Application
                    </div>
                  </div>

                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 text-primary-color h-3 justify-center items-center flex'>
                      <FaCaretRight />
                    </div>
                    <Link
                      href='/DashBoard'
                      className='text-black text-sm font-normal font-lato capitalize leading-tight'
                    >
                      More ...
                    </Link>
                  </div>
                </div>
              </div>
              <div className='flex-col justify-start items-start gap-8 inline-flex'>
                <div className='justify-center items-center gap-2 inline-flex'>
                  <div className='w-[15px] h-1 bg-primary-color rounded-[100px] shadow' />
                  <div className='text-black text-lg font-semibold font-lato capitalize leading-tight'>
                    Useful links
                  </div>
                </div>
                <div className='flex-col justify-start items-start gap-[18px] flex'>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 text-primary-color h-3 justify-center items-center flex'>
                      <FaCaretRight />
                    </div>
                    <div className='text-black text-sm font-normal font-lato capitalize leading-tight'>
                      home
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 text-primary-color h-3 justify-center items-center flex'>
                      <FaCaretRight />
                    </div>
                    <div className='text-black text-sm font-normal font-lato capitalize leading-tight'>
                      Products & Shop
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 text-primary-color h-3 justify-center items-center flex'>
                      <FaCaretRight />
                    </div>
                    <div className='text-black text-sm font-normal font-lato capitalize leading-tight'>
                      Pictures & Stories
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 text-primary-color h-3 justify-center items-center flex'>
                      <FaCaretRight />
                    </div>
                    <div className='text-black text-sm font-normal font-lato capitalize leading-tight'>
                      Contact us & Support
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 text-primary-color h-3 justify-center items-center flex'>
                      <FaCaretRight />
                    </div>
                    <div className='text-black text-sm font-normal font-lato capitalize leading-tight'>
                      Blog Page
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-60 flex-col justify-start items-start gap-8 max-lg:w-full inline-flex'>
                <div className='justify-center items-center gap-2 inline-flex'>
                  <div className='w-[15px] h-1 bg-primary-color rounded-[100px] shadow' />
                  <div className='text-black text-lg font-semibold font-lato capitalize leading-tight'>
                    Contact Us
                  </div>
                </div>
                <div className='self-stretch h-[188px] flex-col justify-start items-start gap-3 flex'>
                  <div className='self-stretch h-[88px] flex-col justify-start items-start gap-2 flex'>
                    <div className='justify-center items-center gap-1.5 inline-flex'>
                      <div className='w-1.5 h-1.5 bg-primary-color rounded-[100px] shadow' />
                      <div className='text-black text-sm font-medium font-lato capitalize leading-tight'>
                        Dubai Address
                      </div>
                    </div>
                    <div className='self-stretch h-[60px] flex-col justify-start items-start gap-3.5 flex'>
                      <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                        <div className='w-px self-stretch opacity-30 bg-black rounded-[5px]' />
                        <div className='grow shrink basis-0 text-black text-xs font-normal font-lato capitalize leading-tight'>
                          Churchill Executive Tower, Business Bay, Dubai, UAE
                          P.O.Box: 28824 Dubai.UAE
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='self-stretch h-[88px] flex-col justify-start items-start gap-2 flex'>
                    <div className='justify-center items-center gap-1.5 inline-flex'>
                      <div className='w-1.5 h-1.5 bg-primary-color rounded-[100px] shadow' />
                      <div className='text-black text-sm font-medium font-lato capitalize leading-tight'>
                        Istanbul
                      </div>
                    </div>
                    <div className='self-stretch h-[60px] flex-col justify-start items-start gap-3.5 flex'>
                      <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                        <div className='w-px self-stretch opacity-30 bg-neutral-100 rounded-[5px]' />
                        <div className='grow shrink basis-0 text-black text-xs font-normal font-lato capitalize leading-tight'>
                          University neighborhood, Civan Alley, No:1, Allure
                          tower, unit:384 Avcilar/Istanbul
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='self-stretch justify-center items-center gap-6 inline-flex'>
          <div className=' flex-grow h-px opacity-30 bg-primary-color/70 rounded-[5px]'></div>
          <div className='text-black text-lg font-normal font-lato max-md:text-xs leading-7'>
            © 2024 | All Rights Reserved | Powered by Hakikatsareebitan
          </div>
          <div className=' flex-grow h-px opacity-30 bg-primary-color/70 rounded-[5px]'></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
