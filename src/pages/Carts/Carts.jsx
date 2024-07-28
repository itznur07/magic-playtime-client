import React, { useContext, useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import image3 from "../../assets/landscape-img-crd5.webp";
import image1 from "../../assets/OurService2.webp";
import image2 from "../../assets/two.webp";
import { AuthContext } from "../../Providers/AuthProviders";

const Carts = () => {
  const { user, carts } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState(carts || []);

  const dummyProducts = [
    {
      id: 1,
      title: "Pure AC cotton 3 pis",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 2000,
      discount_price: 1650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 2,
      title: "Pure cotton sharee for women",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image2, image1, image3],
      price: 3000,
      discount_price: 2350,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 3,
      title: "Lehenga saree bundle pack ",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image3, image1, image2],
      price: 9000,
      discount_price: 8650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 4,
      title: "Pure AC cotton 3 pis",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image3, image1, image2],
      price: 2000,
      discount_price: 1650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 5,
      title: "Pure cotton sharee for women",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image2, image1, image3],
      price: 3000,
      discount_price: 2350,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 6,
      title: "Lehenga saree bundle pack ",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 9000,
      discount_price: 8650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 7,
      title: "Pure AC cotton 3 pis",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 2000,
      discount_price: 1650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 8,
      title: "Pure cotton sharee for women",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 3000,
      discount_price: 2350,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 9,
      title: "Lehenga saree bundle pack ",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 9000,
      discount_price: 8650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 10,
      title: "Pure AC cotton 3 pis",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 2000,
      discount_price: 1650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 11,
      title: "Pure cotton sharee for women",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 3000,
      discount_price: 2350,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 12,
      title: "Lehenga saree bundle pack ",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 9000,
      discount_price: 8650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
  ];

  const filteredCarts =
    cartItems.length > 0
      ? cartItems
      : dummyProducts.filter((cart) => cart.email === user?.email);

  const total = filteredCarts.reduce((total, cart) => {
    const price = parseFloat(cart.discount_price);
    const quantity = parseInt(cart.quantity, 10);
    return total + price * quantity;
  }, 0);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    Swal.fire({
      title: "Item removed!",
      text: "Item removed from cart successfully!",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "green",
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
    <div className='container mx-auto p-5'>
      {/* Banner */}
      <div className='relative mb-5'>
        <img
          src='https://img.freepik.com/free-photo/baby-shoes-toy-camera-nursery-decorations_23-2147698717.jpg?w=1060&t=st=1689263351~exp=1689263951~hmac=e3bc754cce3818da66e4f25cf8d56415f03269aadbab44209928d23484019615'
          alt='cover'
          className='w-full h-56 object-cover rounded-lg shadow-md'
        />
        <div className='absolute inset-0 bg-gray-900 bg-opacity-40 rounded-lg'></div>
        <div className='absolute inset-0 top-24 text-center'>
          <h1 className='text-5xl font-bold text-white'>Cart</h1>
          <span className='text-sm font-medium text-white mt-2'>
            <Link to='/'>Home</Link> / <span>Cart</span>
          </span>
        </div>
      </div>

      {/* Cart Content */}
      <div className='bg-white shadow-lg rounded-lg p-5'>
        {filteredCarts.length === 0 ? (
          <p className='text-gray-500'>Your cart is empty.</p>
        ) : (
          <table className='w-full text-left'>
            <thead className='bg-[#1fd1a5] text-white'>
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
                      className='w-16 h-16 object-cover rounded'
                    />
                  </td>
                  <td className='py-4 px-4'>{item.title}</td>
                  <td className='py-4 px-4'>${item.discount_price}</td>
                  <td className='py-4 px-4'>
                    <div className='flex items-center justify-center'>
                      <button
                        className='p-2 rounded-lg border bg-gray-100 text-gray-700'
                        onClick={() => handleQty(item.id, false)}
                      >
                        <FaMinus />
                      </button>
                      <span className='mx-3'>{item.quantity}</span>
                      <button
                        className='p-2 rounded-lg border bg-gray-100 text-gray-700'
                        onClick={() => handleQty(item.id, true)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </td>
                  <td className='py-4 px-4'>
                    <button
                      className='text-red-600 hover:text-red-800'
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Total */}
        <div className='flex justify-end mt-5'>
          <span className='text-xl font-bold border-t-2 pt-2'>
            Total: ${total.toFixed(2)}
          </span>
        </div>
        <Link
          to='/checkout'
          className='bg-[#1fd1a5] text-white py-2 px-4 rounded-lg hover:bg-[#17a589] transition-colors duration-300'
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Carts;
