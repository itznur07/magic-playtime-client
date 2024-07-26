import React, { useContext, useState } from "react";
import { FaMinus, FaPlus, FaRegHeart, FaWindowClose } from "react-icons/fa";
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
  const [quantity, setQuantity] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupImageIndex, setPopupImageIndex] = useState(0);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToCartAndWishList = (product, cart) => {
    if (user) {
      const productData = {
        ...product,
        email: user?.email,
      };

      const url = cart
        ? "https://toy-marketplace-server-six.vercel.app/carts"
        : "https://toy-marketplace-server-six.vercel.app/wishlists";

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              title: `Added to ${cart ? "cart" : "wishlists"}!`,
              text: `Product successfully added to ${
                cart ? "cart" : "wishlists"
              }!`,
              icon: "success",
              confirmButtonText: "OK",
              confirmButtonColor: "green",
            });
            location.reload();
          }
        });
    } else {
      navigate("/login");
    }
  };

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(1, prev + (increment ? 1 : -1)));
  };

  return (
    <div className='border bg-white rounded-lg shadow-lg overflow-hidden'>
      <div className='relative'>
        <img
          onMouseOver={() => setImageIndex(1)}
          onMouseLeave={() => setImageIndex(0)}
          className='w-full h-64 object-cover transition-transform duration-300'
          src={images[imageIndex]}
          alt={title}
        />
        <button
          onClick={() => handleAddToCartAndWishList(product, false)}
          className='absolute top-2 right-2 text-white bg-red-600 p-2 rounded-full'
        >
          <FaRegHeart className='text-xl' />
        </button>
      </div>
      <div className='p-4'>
        <h2 className='text-lg font-semibold mb-2'>{title}</h2>
        <p className='text-gray-700 mb-2'>{description.slice(0, 80)}...</p>
        <div className='flex items-center justify-between'>
          <span className='text-lg font-bold text-red-600'>
            ${discount_price || price}
          </span>
          {discount_price && (
            <span className='text-sm line-through text-gray-500'>${price}</span>
          )}
          <button
            onClick={() => setIsPopupVisible(true)}
            className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors'
          >
            View Details
          </button>
        </div>
      </div>

      {isPopupVisible && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full'>
            <button
              onClick={() => setIsPopupVisible(false)}
              className='absolute top-4 right-4 text-gray-600 hover:text-red-600'
            >
              <FaWindowClose size={20} />
            </button>
            <div className='p-6'>
              <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2'>
                  <img
                    src={images[popupImageIndex]}
                    className='w-full h-auto object-cover rounded-lg mb-4'
                    alt={title}
                  />
                  <div className='flex space-x-2 overflow-x-auto'>
                    {images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${
                          index === popupImageIndex
                            ? "border-2 border-red-600"
                            : ""
                        }`}
                        onClick={() => setPopupImageIndex(index)}
                        alt={`Thumbnail ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div className='w-full md:w-1/2 md:pl-6'>
                  <h2 className='text-2xl font-semibold mb-2'>{title}</h2>
                  <p className='text-gray-700 mb-4'>{description}</p>
                  <div className='flex items-center mb-4'>
                    <span className='text-lg font-bold text-red-600'>
                      ${discount_price || price}
                    </span>
                    {discount_price && (
                      <span className='text-sm line-through text-gray-500 ml-2'>
                        ${price}
                      </span>
                    )}
                  </div>
                  <div className='flex items-center mb-4'>
                    <button
                      onClick={() => handleQuantityChange(false)}
                      className='bg-gray-200 p-2 rounded-l-md'
                    >
                      <FaMinus />
                    </button>
                    <span className='px-4 py-2 bg-gray-100'>{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(true)}
                      className='bg-gray-200 p-2 rounded-r-md'
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    onClick={() => handleAddToCartAndWishList(product, true)}
                    className='w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors'
                  >
                    Add to Cart
                  </button>
                  <div className='mt-4'>
                    <span className='font-bold'>Categories:</span>{" "}
                    {categories.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
