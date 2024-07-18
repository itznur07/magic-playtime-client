import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://toy-marketplace-server-six.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className='my-5  md:mx-0 mx-5'>
      <div className='bg-gray-100  p-5  w-full  font-bold text-xl text-black'>
        Latest Post
      </div>
      {posts?.map((post) => (
        <div className='flex items-center space-x-5 py-3 mx-3'>
          <img className='w-24' src={post.image} alt='w-12' />
          <div>
            <span className='text-sm text-slate-400'>10,march,2023</span>
            <Link to='/blogs'>
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

export default PostList;
