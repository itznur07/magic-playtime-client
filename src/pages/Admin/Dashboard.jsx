import { useContext, useState } from "react";
import { FaArrowRight, FaWindowClose } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);

  /** Sidebar Condition */
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex'>
      <div
        className={`bg-white shadow-lg text-slate-500 w-64 min-h-screen ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Sidebar Header */}
        <div className='p-4'>
          <h1>Logo</h1>
        </div>

        {/* Sidebar Navigation */}
        <nav className='px-4 md:mt-5'>
          <ul>
            <li>add project</li>
          </ul>
        </nav>
      </div>
      {/* Main Content */}
      <div className='flex-grow'>
        <button
          className='bg-[#ffffff] text-[#49BBBD] p-2'
          onClick={toggleSidebar}
        >
          {isOpen ? <FaWindowClose size={24} /> : <FaArrowRight size={24} />}
        </button>

        <Outlet />

        {/* Content */}
        <div className='p-4'>
          <h2 className='text-2xl font-bold'></h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
