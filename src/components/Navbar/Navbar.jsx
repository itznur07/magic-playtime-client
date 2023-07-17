import React, { useContext, useState } from "react";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
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
              <div className='flex items-center space-x-2 text-[#e52165]'>
                <img src={logo} alt='logo' className='w-44' />
              </div>
            </Link>
          </div>
          {/* navigation link here */}
          <div className='md:flex md:flex-row md:text-md flex flex-col items-center space-x-5 font-medium'>
            <Link
              to='/'
              className='inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 lg:mt-0'
            >
              Home
            </Link>

            <Link to='/shop'>
              <li className='hover:text-[#1fd1a7] p-2'>
                <a>Shop</a>
              </li>
            </Link>

            <Link
              to='/alltoys'
              className='relative inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 lg:mt-0 '
            >
              All Products
            </Link>
            <Link
              to='/addtoys'
              className='relative inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 lg:mt-0 '
            >
              Add Product
            </Link>
            {user?.email ? (
              <Link
                to='/mytoys'
                className='inline-block text-md px-4 py-2 leading-none  text-gray-800  hover:text-blue-500 hover:bg-slate-100 rounded-sm  mt-4 lg:mt-0 '
              >
                My Toys
              </Link>
            ) : (
              ""
            )}
            <Link
              to='/blogs'
              className='relative inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 lg:mt-0'
            >
              Blogs
            </Link>
          </div>
          {/* login & cart & wish icon here */}
          <div>
            <div className='flex items-center md:space-x-3'>
              {user ? (
                <>
                  <Link to='/wishlists'>
                    <button className='relative px-3.5 py-3.5 rounded-xl bg-[#1FD1A7] hover:bg-[#0d1137] text-white font-semibold'>
                      <FaHeart size={18}></FaHeart>
                      <span className='absolute text-sm top-0.5 font-medium right-0.5 bg-[#E2355F] px-1.5 rounded-full'>
                        {filterdWishlists.length}
                      </span>
                    </button>
                  </Link>
                  <Link to='/carts'>
                    <button className='relative px-3.5 py-3.5 rounded-xl bg-[#1FD1A7] hover:bg-[#0d1137] text-white font-semibold'>
                      <FaShoppingCart size={18}></FaShoppingCart>
                      <span className='absolute text-sm top-0.5 font-medium right-0.5 bg-[#E2355F] px-1.5 rounded-full'>
                        {filterdCarts.length}
                      </span>
                    </button>
                  </Link>
                  <img
                    className='w-12 h-12 mx-3 cursor-pointer  rounded-full border-2 border-[#1FD1A7]'
                    src={user?.auth.currentUser.photoURL}
                    alt='profile-pic'
                  />
                  <button
                    onClick={handleLogout}
                    className='px-4 py-2.5 rounded bg-[#1FD1A7] hover:bg-[#0d1137]  text-white font-semibold'
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link to='/login'>
                    <button className='relative px-3.5 py-3.5 rounded-xl bg-[#1FD1A7] hover:bg-[#0d1137] text-white font-semibold'>
                      <FaHeart size={18}></FaHeart>
                      <span className='absolute text-sm top-0.5 font-medium right-0.5 bg-[#E2355F] px-1.5 rounded-full'>
                        {filterdWishlists.length}
                      </span>
                    </button>
                  </Link>
                  <Link to='/login'>
                    <button className='relative px-3.5 py-3.5 rounded-xl bg-[#1FD1A7] hover:bg-[#0d1137] text-white font-semibold'>
                      <FaShoppingCart size={18}></FaShoppingCart>
                      <span className='absolute text-sm top-0.5 font-medium right-0.5 bg-[#E2355F] px-1.5 rounded-full'>
                        {filterdCarts.length}
                      </span>
                    </button>
                  </Link>
                  <Link to='/login'>
                    <button className='px-3.5 py-3.5 rounded-xl bg-[#1FD1A7] hover:bg-[#0d1137] text-white font-semibold'>
                      <FaUser size={18}></FaUser>
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
