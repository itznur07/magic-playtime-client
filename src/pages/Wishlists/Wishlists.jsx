import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";

const Wishlists = () => {
  const { user, wishlists} = useContext(AuthContext);
  //   const [quantity, setQuantity] = useState(0);

  /** Filterd function */
  const filterdCarts = wishlists?.filter((item) => item?.email === user?.email);

  
  /** add to cart */
  const handleAddToCart = (product) => {

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
          location.reload();
        }
      });
  };

  /** remove form cart */
  const removeFromCart = (id) => {
    fetch(`https://toy-marketplace-server-six.vercel.app/wishlists/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "item deleted to wishlists!",
            text: "item deleted successfully!",
            icon: "success",
            confirmButtonText: "ok",
            confirmButtonColor: "green",
          });
          location.reload();
        }
      });
  };

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
      {/* banner */}
      <div className='mb-5 relative'>
        <img
          src='https://img.freepik.com/free-photo/baby-shoes-toy-camera-nursery-decorations_23-2147698717.jpg?w=1060&t=st=1689263351~exp=1689263951~hmac=e3bc754cce3818da66e4f25cf8d56415f03269aadbab44209928d23484019615'
          alt='cover-image'
          className='w-full object-cover h-56'
        />
        <div className='absolute inset-0 bg-gray-900 bg-opacity-40'></div>
        <div className='absolute inset-0 top-24 text-center'>
          <h1 className='text-5xl font-bold text-white'>Wishlists</h1>
          <span className='text-sm font-medium text-white mt-2'>
            <Link to='/'>Home</Link> / <span>wishlist</span>
          </span>
        </div>
      </div>
      {/* Tableuer Cart Content here */}
      <div className='max-w-7xl mx-auto mb-10 text-sm font-medium'>
        {filterdCarts?.length === 0 ? (
          <p className='text-gray-500'>Your wishlists is empty.</p>
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
                    ${selectedClass?.discount_price}
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
                    <div className='flex justify-center items-center space-x-5'>
                      <button
                        className='text-[#1fd1a5] hover:text-red-700'
                        onClick={() => removeFromCart(selectedClass?._id)}
                      >
                        <FaTrash></FaTrash>
                      </button>
                      <button
                        onClick={() => handleAddToCart(selectedClass)}
                        className='rounded bg-black hover:bg-[#e52165] text-white border-2 p-2  text-md font-medium'
                      >
                        Add To Cart
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

export default Wishlists;
