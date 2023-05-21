import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");

  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`https://toy-marketplace-server-six.vercel.app/mytoys`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  // Delete toy

  const handleDeleted = (_id) => {
    const proceed = confirm("Are you sure you wanna deleted?");

    if (proceed) {
      fetch(`https://toy-marketplace-server-six.vercel.app/mytoys/${_id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Toys Deleted successfully!");
            location.reload();
          }
        });
    }
  };

  return (
    <div className='md:mx-24 py-10'>
      <h2 className='text-3xl font-bold mb-6'>My Toys</h2>
      <table className='w-full border border-gray-300'>
        <thead>
          <tr>
            <th className='p-2'>Picture</th>
            <th className='p-2'>Toy Name</th>
            <th className='p-2'>Seller Name </th>
            <th className='p-2'>Price</th>
            <th className='p-2'>Available Quantity</th>
            <th className='p-2'></th>
            <th className='p-2'></th>
          </tr>
        </thead>
        <tbody>
          {myToys?.map((toy) => (
            <tr key={toy?.id}>
              <td className='p-2'>
                <img
                  className='w-16 h-16 rounded-sm'
                  src={toy?.pictureUrl}
                  alt={toy?.name}
                />
              </td>
              <td className='p-2'>{toy?.name}</td>
              <td className='p-2'>{toy?.sellerName}</td>
              <td className='p-2'>${toy?.price}</td>
              <td className='p-2'>{toy?.quantity}</td>
              <td>
                <Link to={`/updateToy/${toy?._id}`}>
                  <span className='cursor-pointer text-red-500'>
                    <FaEdit />
                  </span>
                </Link>
              </td>
              <td>
                <button
                  className='px-4 py-2 bg-[#e52165] text-white rounded hover:bg-[#0d1137]'
                  onClick={() => handleDeleted(toy?._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
