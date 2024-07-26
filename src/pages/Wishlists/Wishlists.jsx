import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import image3 from "../../assets/landscape-img-crd5.webp";
import image1 from "../../assets/OurService2.webp";
import image2 from "../../assets/two.webp";
import { AuthContext } from "../../Providers/AuthProviders";

const Wishlists = () => {
  const { user, wishlists } = useContext(AuthContext);
  //   const [quantity, setQuantity] = useState(0);

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

  /** Filterd function */
  const filterdCarts =
    wishlists?.length > 0
      ? wishlists
      : dummyProducts?.filter((item) => item?.email === user?.email);

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
          <div className='grid grid-cols-4 gap-5 mt-16'>
            {filterdCarts?.map((selectedClass, index) => (
              <div key={index} className='relative w-[300px] border'>
                <img
                  src={selectedClass?.images[0]}
                  alt={selectedClass?.className}
                  className='w-full h-[200px] object-cover'
                />
                <FaHeart className='absolute top-3  right-3 text-red-500 text-[20px]' />
                <div className='p-5'>
                  <p className='text-lg font-medium'>{selectedClass?.title}</p>
                  <p className='text-base text-slate-700'>
                    TK: {selectedClass?.price}/-
                  </p>
                  <div className='flex mt-3 justify-between items-center'>
                    <button
                      className=' bg-black hover:bg-[#e52165] text-white  p-2 px-5  text-md font-medium'
                      onClick={() => removeFromCart(selectedClass?._id)}
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => handleAddToCart(selectedClass)}
                      className=' bg-black hover:bg-[#e52165] text-white  p-2 px-5  text-md font-medium'
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlists;
