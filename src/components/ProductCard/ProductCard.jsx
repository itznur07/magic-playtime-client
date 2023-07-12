import React, { useContext, useState } from "react";
import {
  FaEye,
  FaHeart,
  FaMinus,
  FaPlus,
  FaShoppingBag,
  FaWindowClose,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";

function ProductCard({
  images,
  title,
  price,
  discount_price,
  description,
  categories,
  product,
}) {
  const [image, hoverImage] = useState(0);
  const [show, setShow] = useState(false);
  const [popupImg, setPopupImg] = useState(0);

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const handleAddToCart = (product) => {
    if (user) {
      const {
        title,
        images,
        price,
        discount_price,
        description,
        categories,
        quantity,
        reviews,
      } = product;

      const productData = {
        title,
        images,
        price,
        discount_price,
        description,
        categories,
        quantity,
        reviews,
        email: user?.email,
      };

      fetch("https://toy-marketplace-server-six.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              title: "added to cart!",
              text: "Product successfully added to card!",
              icon: "success",
              confirmButtonText: "ok",
              confirmButtonColor: "green",
            });
          }
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className='max-w-sm border rounded overflow-hidden bg-[#F7F7F7]'>
      <div className='relative group'>
        <img
          onMouseOver={() => hoverImage(1)}
          onMouseLeave={() => hoverImage(0)}
          className={`w-full object-cover h-64`}
          src={images[image]}
          alt='Toy airplane'
        />
        <span className='absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase'>
          Hot
        </span>
        <span className='absolute top-0 right-0 ml-2 bg-yellow-500 text-white px-2 py-1 text-xs font-bold uppercase'>
          Sale
        </span>
        <div className='absolute top-20 right-0 hidden group-hover:block'>
          <ul className='md:space-y-5 cursor-pointer bg-[#fff] text-slate-600 p-2 py-4 shadow-lg rounded'>
            <li
              onClick={() => handleAddToCart(product)}
              className='hover:shadow-inner hover:text-[#e52165]'
            >
              <FaShoppingBag></FaShoppingBag>
            </li>
            <li className='hover:shadow-inner hover:text-[#e52165]'>
              <FaHeart></FaHeart>{" "}
            </li>
            <li
              onClick={() => setShow(!show)}
              className='hover:shadow-inner hover:text-[#e52165]'
            >
              <FaEye></FaEye>{" "}
            </li>
            {/* popup here */}
            {show ? (
              <div className='fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-80'>
                <div className='bg-[#F7F7F7] border-4 border-white p-4 rounded-md shadow-lg relative'>
                  <div>
                    <div className='flex space-x-3'>
                      <div className='flex flex-col items-center'>
                        <img
                          src={images[popupImg]}
                          className='max-w-sm h-auto rounded border-2 border-white shadow object-cover'
                          alt=''
                        />
                        <div className='flex space-x-2 mt-2'>
                          <img
                            src={images[1]}
                            className='w-28 rounded border-2 border-white shadow object-cover'
                            alt=''
                            onClick={() => setPopupImg(1)}
                          />
                          <img
                            src={images[2]}
                            className='w-28 rounded border-2 border-white shadow object-cover'
                            alt=''
                            onClick={() => setPopupImg(2)}
                          />
                          <img
                            src={images[0]}
                            className='w-28 rounded border-2 border-white shadow object-cover'
                            alt=''
                            onClick={() => setPopupImg(0)}
                          />
                        </div>
                      </div>
                      <div className='p-10'>
                        <h1 className='text-2xl font-semibold'>{title}</h1>
                        <div className='mt-3 font-semibold'>
                          Price: <span>${discount_price}</span>{" "}
                          <span className='line-through'>${price}</span>
                        </div>

                        <div className='max-w-sm mt-2'>
                          <p>{description}</p>
                        </div>

                        <div className='flex items-center space-x-3'>
                          <button className='flex items-center space-x-5 rounded border-2 p-2 mt-3 text-md font-medium'>
                            <span className='hover:text-black font-bold'>
                              <FaMinus></FaMinus>
                            </span>
                            <span>0</span>
                            <span className='hover:text-black font-bold'>
                              <FaPlus></FaPlus>
                            </span>
                          </button>
                          <button className='rounded bg-black hover:bg-[#e52165] text-white border-2 p-2 mt-3 text-md font-medium'>
                            Add To Cart
                          </button>
                        </div>
                        <div className='mt-5 font-medium'>
                          <span className='font-bold'>Categories:</span>{" "}
                          <span>{categories[0]}</span>,{" "}
                          <span>{categories[1]}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      type='button'
                      className='bg-[#fdfdfd] text-red-500 p-2 rounded-md absolute top-2 right-2'
                      onClick={() => setShow(!show)}
                    >
                      <FaWindowClose size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* popup ends here */}
          </ul>
        </div>
      </div>
      <div className='px-2 mt-5'>
        <div className='font-semibold text-lg text-center'>
          {title.slice(0, 16)}..
        </div>
      </div>
      <div
        className={`${
          discount_price
            ? "px-6 pt-4 pb-2 flex justify-between items-center"
            : "flex justify-center items-center text-center pt-4 pb-2 "
        }`}
      >
        <span
          className={`${
            discount_price
              ? "inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 line-through"
              : "bg-gray-200 rounded-full px-3 py-1 text-center text-sm font-semibold text-gray-700"
          }`}
        >
          ${price}
        </span>
        <span
          className={`inline-block ${
            discount_price ? "bg-green-200" : ""
          } rounded-full px-3 py-1 text-sm font-semibold  text-gray-700 `}
        >
          {discount_price ? `P: $${discount_price}` : null}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
