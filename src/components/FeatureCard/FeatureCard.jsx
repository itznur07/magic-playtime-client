import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeatureCard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://toy-marketplace-server-six.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className='my-5 md:mx-0 mx-5'>
      <div className='bg-gray-100 p-5  w-full font-bold text-xl text-black'>
        Featured Products
      </div>
      {posts?.slice(0, 6).map((post) => (
        <div className='flex items-center space-x-5 py-3 mx-3'>
          <img
            className='w-24 rounded border'
            src={post.images[0]}
            alt='w-12'
          />
          <div>
            <span className='text-sm text-slate-400'>
              ${post.discount_price || post.price}
            </span>
            <Link to='/shop'>
              <div>
                <h1 className='font-medium'>{post.title.slice(0, 30)}</h1>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
