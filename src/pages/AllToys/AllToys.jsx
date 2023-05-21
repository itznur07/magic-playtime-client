import React, { useContext, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProviders";

const AllToys = () => {

  useTitle('All Toys')

  const { user } = useContext(AuthContext);

  const [toys, setToys] = useState([
    {
      id: 1,
      seller: "John Doe",
      name: "Super Robot",
      subcategory: "Action Figures",
      price: "$29.99",
      quantity: 10,
    },
    {
      id: 2,
      seller: "Emily Smith",
      name: "Magic Wand",
      subcategory: "Role Play",
      price: "$12.99",
      quantity: 5,
    },
    {
      id: 3,
      seller: "David Johnson",
      name: "Puzzle Game",
      subcategory: "Educational",
      price: "$19.99",
      quantity: 8,
    },
    {
      id: 4,
      seller: "Sarah Wilson",
      name: "Remote Control Car",
      subcategory: "Vehicles",
      price: "$34.99",
      quantity: 3,
    },
    {
      id: 5,
      seller: "Michael Brown",
      name: "Stuffed Teddy Bear",
      subcategory: "Plush Toys",
      price: "$9.99",
      quantity: 12,
    },
    // Add more toy objects as needed
    {
      id: 6,
      seller: "Amy Thompson",
      name: "Building Blocks",
      subcategory: "Construction",
      price: "$14.99",
      quantity: 7,
    },
    {
      id: 7,
      seller: "Robert Davis",
      name: "Art Set",
      subcategory: "Arts & Crafts",
      price: "$24.99",
      quantity: 2,
    },
    {
      id: 8,
      seller: "Olivia Johnson",
      name: "Musical Keyboard",
      subcategory: "Musical Instruments",
      price: "$39.99",
      quantity: 6,
    },
    {
      id: 9,
      seller: "William Anderson",
      name: "Dollhouse",
      subcategory: "Dolls & Accessories",
      price: "$49.99",
      quantity: 1,
    },
    {
      id: 10,
      seller: "Emma Wilson",
      name: "Outdoor Swing",
      subcategory: "Outdoor Play",
      price: "$59.99",
      quantity: 9,
    },
    {
      id: 11,
      seller: "Daniel Smith",
      name: "Board Game Set",
      subcategory: "Family Games",
      price: "$22.99",
      quantity: 4,
    },
    {
      id: 12,
      seller: "Sophia Davis",
      name: "Sports Ball Set",
      subcategory: "Sports & Outdoor",
      price: "$16.99",
      quantity: 11,
    },
    {
      id: 13,
      seller: "Liam Thompson",
      name: "Robot Dog",
      subcategory: "Electronic Pets",
      price: "$32.99",
      quantity: 7,
    },
    {
      id: 14,
      seller: "Ava Wilson",
      name: "Kitchen Playset",
      subcategory: "Pretend Play",
      price: "$27.99",
      quantity: 3,
    },
    {
      id: 15,
      seller: "Jackson Anderson",
      name: "Science Experiment Kit",
      subcategory: "STEM Toys",
      price: "$18.99",
      quantity: 10,
    },
    {
      id: 16,
      seller: "Mia Brown",
      name: "Dinosaur Figures",
      subcategory: "Animals & Dinosaurs",
      price: "$11.99",
      quantity: 15,
    },
    {
      id: 17,
      seller: "Ethan Wilson",
      name: "Water Balloon Set",
      subcategory: "Outdoor Water Toys",
      price: "$8.99",
      quantity: 20,
    },
    {
      id: 18,
      seller: "Charlotte Johnson",
      name: "Toy Train Set",
      subcategory: "Vehicles",
      price: "$24.99",
      quantity: 6,
    },
    {
      id: 19,
      seller: "Noah Thompson",
      name: "Coloring Book",
      subcategory: "Arts & Crafts",
      price: "$6.99",
      quantity: 18,
    },
    {
      id: 20,
      seller: "Sophia Davis",
      name: "Teddy Bear",
      subcategory: "Plush Toys",
      price: "$12.99",
      quantity: 9,
    },
  ]);

  // const [searchTerm, setSearchTerm] = useState("");
  // const history = useHistory();

  // // Update the 'toys' state with the fetched data

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleViewDetails = (toyId) => {
  //   if (user?.email) {
  //     // Redirect to toy details page
  //     history.push(`/toys/${toyId}`);
  //   } else {
  //     // Redirect to login page
  //     history.push("/login");
  //   }
  // };

  // const filteredToys = toys?.filter((toy) =>
  //   toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className='md:mx-24 py-10'>
      <h2 className='text-3xl font-bold mb-6'>All Toys</h2>

      <div className='mb-4'>
        <input
          type='text'
          placeholder='Search by Toy Name'
          className='w-full p-2 border border-gray-300 rounded'
          // value={searchTerm}
          // onChange={handleSearch}
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
          {toys?.slice(0, 20).map((toy) => (
            <tr key={toy?.id}>
              <td className='p-2'>{toy?.seller}</td>
              <td className='p-2'>{toy?.name}</td>
              <td className='p-2'>{toy?.subcategory}</td>
              <td className='p-2'>{toy?.price}</td>
              <td className='p-2'>{toy?.quantity}</td>
              <td className='p-2'>
                <button
                  className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
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
