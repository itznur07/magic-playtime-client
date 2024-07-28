import React, { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart, FaRegStar, FaShoppingBag, FaUser } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import ReactImageMagnify from "react-image-magnify";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import logo from "../../assets/KhelaGor.svg";

const Navbar = () => {
  const { user, logOut, carts, wishlists, products } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupImageIndex, setPopupImageIndex] = useState(0);
  const navigate = useNavigate();
  const filteredCarts = carts?.filter((cart) => cart?.email === user?.email);
  const filteredWishlists = wishlists?.filter(
    (product) => product?.email === user?.email
  );

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim()) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleLogout = () => {
    logOut()
      .then(() => alert("Logout successfully!"))
      .catch((error) => console.log(error));
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);

    setIsPopupVisible(true);
  };

  return (
    <div className='max-w-7xl mx-auto bg-white relative z-50'>
      <nav className='md:flex md:flex-row flex flex-col items-center justify-between flex-wrap py-6'>
        {/* Logo */}
        <div className='flex items-center text-gray-500'>
          <Link to='/'>
            <div className='flex items-center space-x-2 text-black'>
              {<h1 className='text-3xl font-bold'>Shopzip</h1> || (
                <img src={logo} alt='logo' className='w-44' />
              )}
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className='md:flex md:flex-row md:text-md flex flex-col items-center gap-10 font-medium'>
          {["Home", "Shop", "Blogs", "Contact Us"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(" ", "")}`}
              className='relative inline-block text-md py-2 leading-none text-gray-800 hover:border-b-2 border-black rounded-sm mt-4 lg:mt-0'
            >
              {item}
            </Link>
          ))}
        </div>

        {/* User Actions */}
        <div className='flex items-center gap-3'>
          {/* Search Icon */}
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label='Open Search'
          >
            <IoSearchOutline className='text-black' size={24} />
          </button>

          {/* Conditional Rendering for User or Login Links */}
          {user ? (
            <>
              <Link to='/wishlists'>
                <button className='relative px-3.5 py-3.5 text-black font-semibold'>
                  <FaRegHeart size={24} />
                  <span className='absolute text-sm top-0.5 font-medium right-0.5 bg-black px-1.5 rounded-full text-white'>
                    {filteredWishlists.length}
                  </span>
                </button>
              </Link>
              <Link to='/carts'>
                <button className='relative px-3.5 py-3.5 text-black font-semibold'>
                  <FaShoppingBag size={24} />
                  <span className='absolute text-sm top-0.5 font-medium right-0.5 bg-black text-white px-1.5 rounded-full'>
                    {filteredCarts.length}
                  </span>
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className='px-4 py-2 bg-black text-white font-medium'
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to='/login'>
                <button className='relative px-3.5 py-3.5 text-black font-semibold'>
                  <FaRegHeart size={24} />
                  <span className='absolute text-sm top-0.5 font-medium right-0.5 bg-black px-1.5 rounded-full text-white'>
                    {filteredWishlists.length}
                  </span>
                </button>
              </Link>
              <Link to='/login'>
                <button className='relative px-3.5 py-3.5 text-black font-semibold'>
                  <FaShoppingBag size={24} />
                  <span className='absolute text-sm top-0.5 font-medium right-0.5 bg-black text-white px-1.5 rounded-full'>
                    {filteredCarts.length}
                  </span>
                </button>
              </Link>
              <Link to='/login'>
                <button>
                  <FaUser size={24} />
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Search Dropdown */}
        {isSearchOpen && (
          <div className='fixed inset-0 -top-10 bg-gray-900 bg-opacity-50 flex justify-center items-start z-50'>
            <div className='bg-white w-full md:w-1/1 h-auto p-4 mt-10 shadow-lg'>
              <div className='w-[700px] mx-auto'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-medium'>Search</h2>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    aria-label='Close Search'
                  >
                    <IoCloseOutline size={24} />
                  </button>
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    placeholder='Search for products...'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className='relative w-full mt-4 p-2 border border-gray-300 outline-none'
                  />
                  <IoSearchOutline
                    className='absolute right-3 top-6 text-gray-400'
                    size={24}
                  />
                </div>
                {filteredProducts.length > 0 ? (
                  <ul className='mt-4'>
                    {filteredProducts.map((product, index) => (
                      <li
                        key={product.id}
                        className='flex items-center p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-100'
                        onClick={() => {
                          handleProductClick(product);

                          setIsSearchOpen(false);
                        }}
                        // onClick={() => setSelectedProduct(product)}
                      >
                        <span className='mr-4'>{index + 1}</span>
                        <img
                          loading='lazy'
                          src={product.images[0]}
                          alt={product.title}
                          className='w-16 h-16 mr-4'
                        />
                        <div>
                          <h3 className='font-medium'>{product.title}</h3>
                          <p className='text-gray-600'>${product.price}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <h1
                    className={`${
                      searchQuery.length > 0
                        ? "text-center text-xl font-medium mt-5"
                        : "hidden"
                    }`}
                  >
                    No Item!
                  </h1>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Product Details Modal */}
        {isPopupVisible && selectedProduct && (
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
                          alt: selectedProduct?.title,

                          isFluidWidth: true,

                          src: selectedProduct?.images[popupImageIndex],
                          onError: () => setPopupImageIndex(0),
                          style: { borderRadius: "8px" },
                        },
                        largeImage: {
                          src: selectedProduct?.images[popupImageIndex],
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
                      {selectedProduct?.images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          className={`w-16 h-16 object-cover cursor-pointer ${
                            index === popupImageIndex
                              ? "border border-black"
                              : ""
                          }`}
                          loading='lazy'
                          onClick={() => setPopupImageIndex(index)}
                          alt={`Thumbnail ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 md:pl-6 mt-7'>
                    <h2 className='text-xl font-semibold mb-2'>
                      {selectedProduct?.title}
                    </h2>
                    <div className='flex items-center justify-between'>
                      <span className='text-md text-blacks'>
                        TK {selectedProduct?.price}
                      </span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='mt-3'>
                        <p className='text-sm font-semibold'>Quantity</p>
                        <div className='w-[120px] h-[36px] flex items-center justify-center gap-5 border border-black mt-1.5 px-3 py-1'>
                          <button onClick={() => handleQuantityChange(false)}>
                            <AiOutlineMinus />
                          </button>
                          <span>{selectedProduct?.quantity}</span>
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
                      <p className='text-gray-700 text-sm mt-1'>
                        {selectedProduct?.description}
                      </p>
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
                        onClick={() =>
                          handleAddToCartAndWishList(selectedProduct, true)
                        }
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
      </nav>
    </div>
  );
};

export default Navbar;
