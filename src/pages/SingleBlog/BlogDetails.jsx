import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const BlogDetails = () => {
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [0]);
  const { blogs } = useContext(AuthContext);

  const filteredBlog = blogs.find((blog) => blog._id === params.id);

  const relatedBlogs = blogs.filter((blog) => blog.tag === filteredBlog.tag);

  console.log(relatedBlogs.length);

  return (
    <>
      {/* Banner */}
      <div className='mb-1 relative h-44'>
        <div className='absolute inset-0 bg-gray-100 bg-opacity-40'></div>
        <div className='absolute inset-0 top-1/3 text-center text-black'>
          <h1 className='text-5xl font-bold text-black'>Single Details</h1>
          <span className='text-sm  font-medium text-gray-600 mt-3'>
            <Link to='/blogs'>blogs</Link> /{" "}
            <span className='text-blue-400'>details</span>
          </span>
        </div>
      </div>
      <div className='max-w-7xl mx-auto my-10'>
        {/* Heading */}

        <div className='relative'>
          <img src={filteredBlog.image} alt='cover' className='' />
          <h1 className='absolute bottom-7 right-7 border border-white text-3xl font-semibold mt-5 bg-black text-white w-[100px] p-3 text-center'>
            {filteredBlog.date.slice(5, filteredBlog.date.length)}
          </h1>
          <h1 className='absolute top-7 left-7 border border-white text-3xl font-semibold mt-5 bg-black text-white min-w-[190px] w-auto p-3 text-center'>
            {filteredBlog.tag}
          </h1>
        </div>
        <p className='mt-3'>
          by <span className='text-sm'>{filteredBlog.author}</span>
        </p>

        <h1 className='text-3xl font-semibold mt-5'>{filteredBlog.title}</h1>

        <p className='text-xl font-medium mt-2'>{filteredBlog.subtitle}</p>

        <p>{filteredBlog.description}</p>
      </div>

      {/* related blogs */}
      <div className='max-w-7xl mx-auto grid grid-cols-4 gap-7 mt-24 mb-24'>
        {/* Heading  */}
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold'>Related blogs</h1>
          <Link to='/blogs'>
            <button className='bg-black text-white font-semibold px-5 py-2 mt-3'>
              View All
            </button>
          </Link>
        </div>
        {relatedBlogs.slice(0, 3).map((blog) => (
          <Link
            className='relative group'
            key={blog.id}
            to={`/blogs/${blog._id}`}
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
    </>
  );
};

export default BlogDetails;
