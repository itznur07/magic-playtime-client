import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProviders";

const AllToys = () => {
  useTitle("All Toys");

  const { user } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [toys, setToys] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    fetch(`https://toy-marketplace-server-six.vercel.app/alltoys`)
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
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='md:mx-24 py-10'>
      <h2 className='text-3xl font-bold mb-6'>All Toys</h2>

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
          <tr>
            <th className='p-2'>Seller</th>
            <th className='p-2'>Toy Name</th>
            <th className='p-2'>Sub-category</th>
            <th className='p-2'>Price</th>
            <th className='p-2'>Available Quantity</th>
          </tr>
        </thead>
        <tbody>
          {filteredToys?.slice(0, 20).map((toy) => (
            <tr key={toy?.id}>
              <td className='p-2'>{toy?.seller}</td>
              <td className='p-2'>{toy?.name}</td>
              <td className='p-2'>{toy?.subcategory}</td>
              <td className='p-2'>{toy?.price}</td>
              <td className='p-2'>{toy?.quantity}</td>
              <td className='p-2'>
                <button
                  className='px-4 py-2 bg-[#e52165] text-white rounded hover:bg-[#0d1137]'
                  onClick={() => handleViewDetails(toy?.id)}
                >
                  View Details
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
