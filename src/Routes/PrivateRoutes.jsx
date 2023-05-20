import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user?.email) {
    return children;
  }

  if (loading) {
    return (
      <div className='flex justify-center items-center h-96'>
        <div className='animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-[#e52165]'></div>
      </div>
    );
  }

  return <Navigate state={{ from: location }} to='/login' replace></Navigate>;
};

export default PrivateRoutes;
