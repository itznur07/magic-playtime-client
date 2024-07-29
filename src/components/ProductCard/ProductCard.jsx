import React, { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import ReactImageMagnify from "react-image-magnify";
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
              title: `Added to ${cart ? "cart" : "wishlist"}!`,
              text: `Product successfully added to ${
                cart ? "cart" : "wishlist"
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
    <div className='bg-white overflow-hidden cursor-pointer'>
      <div className='relative'>
        <img
          onClick={() => setIsPopupVisible(true)}
          onMouseOver={() => setImageIndex(1)}
          onMouseLeave={() => setImageIndex(0)}
          className='w-full h-[300px] object-cover transition-transform duration-300'
          src={images[imageIndex]}
          alt={title}
        />
        <button
          onClick={() => handleAddToCartAndWishList(product, false)}
          className='absolute top-2 right-2 text-black p-2 rounded-full'
        >
          <CiHeart size={24} className='text-gray-500' />
        </button>
      </div>
      <div onClick={() => setIsPopupVisible(true)} className='p-4'>
        <h2 className='text-md font-semibold'>{title}</h2>
        <div className='flex items-center justify-between'>
          <span className='text-sm font-medium text-gray-600'>
            ${discount_price}
            <span className='text-xs line-through text-gray-400 ml-1'>
              {price}
            </span>
          </span>
        </div>
      </div>

      {isPopupVisible && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
          <div className='relative bg-white overflow-hidden shadow-xl max-w-[750px] w-full'>
            <button
              onClick={() => setIsPopupVisible(false)}
              className='absolute top-4 right-4 text-gray-600 hover:text-black-600'
            >
              <AiOutlineClose size={20} />
            </button>
            <div className='p-6 mt-5'>
              <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2'>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: title,

                        isFluidWidth: true,

                        src: images[popupImageIndex],
                        onError: () => setPopupImageIndex(0),
                        style: { borderRadius: "8px" },
                      },
                      largeImage: {
                        src: images[popupImageIndex],
                        width: 800,
                        height: 1000,
                        style: { borderRadius: "8px" },
                      },
                      enlargedImageContainerClassName: "bg-white ",
                      fadeDurationInMs: 300,
                      hoverDelayInMs: 250,
                      hoverOffDelayInMs: 150,
                      isActivatedOnTouch: true,
                      pressDuration: 800,
                      pressMoveThreshold: 5,
                      enlargedImagePosition: "right",
                      shouldUsePositiveSpaceLens: true,
                    }}
                  />
                  <div className='flex space-x-2 mt-5'>
                    {images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        className={`w-16 h-16 object-cover cursor-pointer ${
                          index === popupImageIndex ? "border border-black" : ""
                        }`}
                        onClick={() => setPopupImageIndex(index)}
                        alt={`Thumbnail ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div className='w-full md:w-1/2 md:pl-6 mt-7'>
                  <h2 className='text-xl font-semibold mb-2'>{title}</h2>
                  <div className='flex items-center justify-between'>
                    <span className='text-md text-blacks'>TK {price}</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='mt-3'>
                      <p className='text-sm font-semibold'>Quantity</p>
                      <div className='w-[120px] h-[36px] flex items-center justify-center gap-5 border border-black mt-1.5 px-3 py-1'>
                        <button onClick={() => handleQuantityChange(false)}>
                          <AiOutlineMinus />
                        </button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(true)}>
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>
                    <div className='mt-3'>
                      <p className='text-sm font-semibold'>Size</p>
                      <div className='w-[120px] h-[36px] flex items-center justify-center gap-5 border border-black mt-1.5 px-3 py-1'>
                        <select className='text-sm outline-none' name='size'>
                          <option value=''>Choose a size</option>
                          <option value='S'>S</option>
                          <option value='L'>L</option>
                          <option value='XL'>XL</option>
                          <option value='XXL'>XXL</option>
                          <option value='3XL'>3XL</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <p className='text-sm font-semibold'>Description</p>
                    <p className='text-gray-700 text-sm mt-1'>{description}</p>
                  </div>
                  <div className='mt-3'>
                    <p className='text-sm font-semibold'>Review (3)</p>
                    <div className='flex items-center gap-3 mt-1'>
                      <span className='flex text-gray-700'>
                        <FaRegStar size={14} className='text-yellow-400' />
                        <FaRegStar size={14} className='text-yellow-400' />
                        <FaRegStar size={14} className='text-yellow-400' />
                        <FaRegStar size={14} className='text-gray-400' />
                        <FaRegStar size={14} className='text-gray-400' />
                      </span>
                    </div>
                  </div>
                  <div className='grid grid-cols-12 gap-5 mt-5'>
                    <div className='col-span-4 flex gap-1.5'>
                      <button className='h-[40px] border border-black text-black px-3 py-2'>
                        <CiHeart size={20} />
                      </button>
                      <button className='h-[40px] border border-black text-black px-3 py-2'>
                        <IoIosGitCompare size={20} />
                      </button>
                    </div>
                    <button
                      onClick={() => handleAddToCartAndWishList(product, true)}
                      className='col-span-8 h-[40px] bg-black text-white hover:bg-gray-700 transition-colors px-5 py-2'
                    >
                      Add to Cart
                    </button>
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
