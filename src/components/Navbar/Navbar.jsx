import React, { useContext } from "react";
import { FaBabyCarriage } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
      <div className='bg-white relative z-50'>
        <nav className='md:flex md:flex-row flex flex-col items-center justify-between flex-wrap  py-6 md:mx-24'>
          {/* logo here */}
          <div className='flex items-center  text-gray-500'>
            <Link to='/'>
              <div className='flex items-center text-3xl space-x-2 text-[#e52165]'>
                <FaBabyCarriage />
                <span className='font-bold'>Magic Playtime</span>
              </div>
            </Link>
          </div>
          {/* navigation link here */}
          <div className='md:flex md:flex-row md:text-md flex flex-col items-center space-x-5'>
            <Link
              to='/'
              className='inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 lg:mt-0'
            >
              Home
            </Link>
            <Link
              to='/alltoys'
              className='relative inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 lg:mt-0 '
            >
              All Toys
            </Link>
            <Link
              to='/addtoys'
              className='relative inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 lg:mt-0 '
            >
              Add Toys
            </Link>
            <Link
              to='/mytoys'
              className='inline-block text-md px-4 py-2 leading-none  text-gray-800  hover:text-blue-500 hover:bg-slate-100 rounded-sm  mt-4 lg:mt-0 '
            >
              My Toys
            </Link>
            <Link
              to='/blogs'
              className='relative inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-slate-100 rounded-sm mt-4 lg:mt-0'
            >
              Blogs
            </Link>
          </div>
          {/* login & cart & wish icon here */}
          <div>
            <div className='flex items-center md:space-x-6'>
              {user ? (
                <>
                  <img
                    className='w-14 h-14 mx-3 rounded-full border-2 border-[#e52165]'
                    src={user?.photoURL}
                    alt='profile-pic'
                  />

                  <button
                    onClick={handleLogout}
                    className='px-4 py-2.5 rounded bg-[#e52165] hover:bg-[#0d1137]  text-white font-semibold'
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <Link to='/login'>
                    <button className='px-4 py-2.5 rounded bg-[#e52165] hover:bg-[#0d1137] text-white font-semibold'>
                      Log in
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
