import React, { useContext, useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProviders";

const AllToys = () => {
  useTitle("All Toys");

  const { user } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [toys, setToys] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    fetch(`https://toy-marketplace-server-six.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  // Update the 'toys' state with the fetched data
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewDetails = (toyId) => {
    if (user?.email) {
      // Redirect to toy details page
      history.push(`/toys/${toyId}`);
    } else {
      // Redirect to login page
      history.push("/login");
    }
  };

  const filteredToys = toys?.filter((toy) =>
    toy.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='md:mx-24 py-10'>
      <h2 className='text-3xl font-bold mb-6 text-center'>All Products</h2>

      <div className='mb-4'>
        <input
          type='text'
          placeholder='Search by Toy Name'
          className='w-full p-2 border border-gray-300 rounded'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <table className='w-full border border-gray-300'>
        <thead>
          <tr className='mt-3'>
            <th className='p-2'>No</th>
            <th className='p-2'>Product Image</th>
            <th className='p-2'>Product Name</th>
            <th className='p-2'>Price</th>
            <th className='p-2'>Offer Price</th>
            <th className='p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredToys?.slice(0, 20).map((toy, i) => (
            <tr key={toy?.id}>
              <td className='p-2 text-center'>{i + 1}</td>
              <td className='p-2 flex justify-center'>
                <img
                  className='w-14 h-14 rounded border object-cover'
                  src={toy?.images[0]}
                  alt='image'
                />
              </td>
              <td className='p-2 text-center'>{toy?.title}</td>
              <td className='p-2 text-center'>${toy?.price}</td>
              <td className='p-2 text-center'>${toy?.discount_price || 0}</td>
              <td className='p-2 flex justify-center'>
                <button
                  className='px-4 py-2 bg-[#e52165] text-white rounded hover:bg-[#0d1137]'
                  onClick={() => handleViewDetails(toy?.id)}
                >
                  View Details
                </button>
                <button
                  className='px-4 mx-1 py-2 bg-[#e52165] text-white rounded hover:bg-[#0d1137]'
                  onClick={() => handleViewDetails(toy?.id)}
                >
                  <FaWindowClose></FaWindowClose>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
