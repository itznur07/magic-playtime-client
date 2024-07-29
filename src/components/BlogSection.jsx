import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const BlogSection = () => {
  const { blogs } = useContext(AuthContext);

  return (
    <div className='mt-24'>
      {/* Heading  */}
      <div className=''>
        <h1 className='text-3xl font-bold'>Blogs & Offer</h1>
      </div>

      <div className='grid grid-cols-3 mt-7 gap-16'>
        {blogs.slice(0, 3).map((blog) => (
          <Link
            className='relative group'
            key={blog.id}
            to={`/blog/${blog.id}`}
          >
            <div className='relative overflow-hidden'>
              <img
                loading='lazy'
                className='w-full h-72 object-cover transform transition-transform duration-300 group-hover:scale-105'
                src={blog.image}
                alt={blog.title}
              />
              <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-5 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                Read More
              </button>
              {/* Tag */}
              <div className='absolute top-3 left-5 text-sm text-black bg-white px-3 font-medium'>
                <p>{blog.tag}</p>
              </div>
            </div>

            {/* Details */}
            <div className='mt-3'>
              <h2 className='text-lg font-semibold'>{blog.title}</h2>
              <p className='text-sm text-gray-500'>
                by <span className='font-medium'>{blog.author}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
