import React, { useContext, useState } from "react";
import { FaRegHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import logo from "../../assets/KhelaGor.svg";
const Navbar = () => {
  const { user, logOut, loading, carts, wishlists } = useContext(AuthContext);

  /** filtered carts and wishlists */
  const filterdCarts = carts?.filter((cart) => cart?.email === user?.email);
  const filterdWishlists = wishlists?.filter(
    (product) => product?.email === user?.email
  );

  // user profle photo hover
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logout successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className='max-w-7xl mx-auto bg-white relative z-50'>
        <nav className='md:flex md:flex-row flex flex-col items-center justify-between flex-wrap  py-6'>
          {/* logo here */}
          <div className='flex items-center  text-gray-500'>
            <Link to='/'>
              <div className='flex items-center space-x-2 text-black'>
                {<h1 className='text-3xl font-bold'>Shopzip</h1> || (
                  <img src={logo} alt='logo' className='w-44' />
                )}
              </div>
            </Link>
          </div>
          {/* navigation link here */}
          <div className='md:flex md:flex-row md:text-md flex flex-col items-center gap-10 font-medium'>
            <Link
              to='/'
              className='relative inline-block text-md  py-2 leading-none  text-gray-800  hover:border-b-2 border-black rounded-sm mt-4 lg:mt-0'
            >
              Home
            </Link>

            <Link
              className='relative inline-block text-md  py-2 leading-none  text-gray-800  hover:border-b-2 border-black rounded-sm mt-4 lg:mt-0'
              to='/shop'
            >
              Shop
            </Link>

            <Link
              to='/blogs'
              className='relative inline-block text-md  py-2 leading-none  text-gray-800  hover:border-b-2 border-black rounded-sm mt-4 lg:mt-0'
            >
              Blogs
            </Link>
            <Link
              to='/contact'
              className='relative inline-block text-md  py-2 leading-none  text-gray-800  hover:border-b-2 border-black rounded-sm mt-4 lg:mt-0'
            >
              Contact Us
            </Link>
          </div>
          {/* login & cart & wish icon here */}
          <div>
            <div className='flex items-center gap-3'>
              {user ? (
                <>
                  <Link to='/search'>
                    <IoSearchOutline className='text-black' size={24} />
                  </Link>
                  <Link to='/wishlists'>
                    <button className='relative px-3.5 py-3.5  text-black font-semibold'>
                      <FaRegHeart size={24}></FaRegHeart>
                      <span className='absolute text-sm top-0.5 font-medium right-0.5 bg-black px-1.5 rounded-full text-white'>
                        {filterdWishlists.length}
                      </span>
                    </button>
                  </Link>
                  <Link to='/carts'>
                    <button className='relative px-3.5 py-3.5  text-black font-semibold'>
                      <FaShoppingBag size={24}></FaShoppingBag>
                      <span className='absolute text-sm top-0.5 font-medium right-0.5 bg-black text-white px-1.5 rounded-full'>
                        {filterdCarts.length}
                      </span>
                    </button>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className='px-4 py-2  bg-black  text-white font-medium'
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link to='/search'>
                    <IoSearchOutline size={24} />
                  </Link>
                  <Link to='/login'>
                    <button className='relative px-3.5 py-3.5  text-black font-semibold'>
                      <FaRegHeart size={24}></FaRegHeart>
                      <span className='absolute text-sm top-0.5 font-medium right-0.5 bg-black px-1.5 rounded-full text-white'>
                        {filterdWishlists.length}
                      </span>
                    </button>
                  </Link>
                  <Link to='/login'>
                    <button className='relative px-3.5 py-3.5  text-black font-semibold'>
                      <FaShoppingBag size={24}></FaShoppingBag>
                      <span className='absolute text-sm top-0.5 font-medium right-0.5 bg-black text-white px-1.5 rounded-full'>
                        {filterdCarts.length}
                      </span>
                    </button>
                  </Link>
                  <Link to='/login'>
                    <button className=''>
                      <FaUser size={24}></FaUser>
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
