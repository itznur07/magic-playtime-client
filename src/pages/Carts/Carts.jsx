import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { LuMinus, LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Carts = () => {
  const { user, carts } = useContext(AuthContext);

  const filteredCarts = carts.filter((cart) => cart.email === user?.email);

  const total = filteredCarts.reduce((total, cart) => {
    const price = parseFloat(cart.discount_price);
    const quantity = parseInt(cart.quantity, 10);
    return total + price * quantity;
  }, 0);

  const removeFromCart = (id) => {
    console.log(id);
    fetch(`https://toy-marketplace-server-six.vercel.app/carts/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "item deleted to carts!",
            text: "item deleted successfully!",
            icon: "success",
            confirmButtonText: "ok",
            confirmButtonColor: "green",
          });
          location.reload();
        }
      });
  };

  const handleQty = (id, inc) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: Math.max(0, item.quantity + (inc ? 1 : -1)),
        };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  return (
    <>
      {/* Banner */}
      <div className='mb-1 relative h-44'>
        <div className='absolute inset-0 bg-gray-100 bg-opacity-40'></div>
        <div className='absolute inset-0 top-1/3 text-center text-black'>
          <h1 className='text-5xl font-bold text-black'>Carts</h1>
          <span className='text-sm  font-medium text-gray-600 mt-3'>
            <Link to='/'>Home</Link> /{" "}
            <span className='text-blue-400'>carts</span>
          </span>
        </div>
      </div>
      <div className='max-w-7xl mx-auto mb-14'>
        {/* Cart Content */}
        <div className='bg-white '>
          {filteredCarts.length === 0 ? (
            <p className='text-gray-500'>Your cart is empty.</p>
          ) : (
            <table className='w-full text-center mt-5'>
              <thead className='bg-black text-white text-center font-medium '>
                <tr>
                  <th className='py-3 px-4'>No.</th>
                  <th className='py-3 px-4'>Image</th>
                  <th className='py-3 px-4'>Name</th>
                  <th className='py-3 px-4'>Price</th>
                  <th className='py-3 px-4'>Quantity</th>
                  <th className='py-3 px-4'>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCarts.map((item, index) => (
                  <tr key={index} className='border-b'>
                    <td className='py-4 px-4'>{index + 1}</td>
                    <td className='py-4 px-4'>
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className='w-16 h-16 object-cover '
                      />
                    </td>
                    <td className='py-4 px-4 font-medium'>{item.title}</td>
                    <td className='py-4 px-4'>${item.discount_price}</td>
                    <td className='py-4 px-4'>
                      <div className='flex items-center justify-center'>
                        <button
                          className='p-2  bg-black text-white'
                          onClick={() => handleQty(item.id, false)}
                        >
                          <LuMinus />
                        </button>
                        <span className='mx-3'>{item.quantity}</span>
                        <button
                          className='p-2  bg-black text-white'
                          onClick={() => handleQty(item.id, true)}
                        >
                          <LuPlus />
                        </button>
                      </div>
                    </td>
                    <td className='py-4 px-4'>
                      <button
                        className='text-black'
                        onClick={() => removeFromCart(item._id)}
                      >
                        <IoMdClose size={24} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Total */}
          <div
            className={`${
              carts?.length > 0 ? "flex justify-end mt-5" : "hidden"
            }`}
          >
            <span className='text-xl font-medium border-t-2 pt-2'>
              Total: ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
