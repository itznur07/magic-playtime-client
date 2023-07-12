import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";

const Carts = () => {
  const { user, carts } = useContext(AuthContext);
//   const [quantity, setQuantity] = useState(0);

  /** Filterd function */

  const filterdCarts = carts?.filter((cart) => cart?.email === user?.email);

  /** Quantity Inc and Dec Function */
//   const handleQty = (inc) => {
//     if (inc) {
//       setQuantity(quantity + 1);
//     } else {
//       setQuantity(quantity - 1);
//     }
//   };

  return (
    <div>
      {/* Tableuer Cart Content here */}
      <div className='max-w-7xl mx-auto  text-sm font-medium'>
        {filterdCarts?.length === 0 ? (
          <p className='text-gray-500'>Your cart is empty.</p>
        ) : (
          <table className='min-w-full bg-white border border-gray-300'>
            <thead className='bg-[#1fd1a5] h-14'>
              <tr className='text-white font-medium text-lg'>
                <th className='py-2 px-4 border-b'>No.</th>
                <th className='py-2 px-4 border-b'>Image</th>
                <th className='py-2 px-4 border-b'>Name</th>
                <th className='py-2 px-4 border-b'>Price</th>
                {/* <th className='py-2 px-4 border-b'>Qty</th> */}
                <th className='py-2 px-4 border-b'>Action</th>
              </tr>
            </thead>
            <tbody>
              {filterdCarts?.map((selectedClass, index) => (
                <tr key={index} className='text-center'>
                  <td className='py-4 px-4 border-b'>{index + 1}</td>
                  <td className='py-4 px-4 flex justify-center border-b'>
                    <img
                      src={selectedClass?.images[0]}
                      alt={selectedClass?.className}
                      className='w-16 h-16 object-cover'
                    />
                  </td>
                  <td className='py-4 px-4 border-b'>{selectedClass?.title}</td>
                  <td className='py-4 px-4 border-b'>
                    ${selectedClass?.price}
                  </td>
                  {/* <td className='py-4 px-4 border-b'>
                    <div className='flex justify-center items-center'>
                      <button className='flex items-center space-x-5 rounded border p-2 text-md font-medium'>
                        <span className='hover:text-black font-bold'>
                          <FaMinus onClick={() => handleQty()}></FaMinus>
                        </span>
                        <span>{quantity}</span>
                        <span className='hover:text-black font-bold'>
                          <FaPlus
                            onClick={() => handleQty({ inc: true })}
                          ></FaPlus>
                        </span>
                      </button>
                    </div>
                  </td> */}
                  <td className='py-6 px-4 border-b '>
                    <div className='flex justify-center items-center space-x-3'>
                      <button
                        className='text-[#1fd1a5] hover:text-red-700'
                        onClick={() => removeFromCart(selectedClass?._id)}
                      >
                        <FaTrash></FaTrash>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Carts;
