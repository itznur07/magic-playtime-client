import React, { useContext, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProviders";

const Blogs = () => {
  useTitle("Blogs");
  const { blogs } = useContext(AuthContext);
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  const handleShowMore = () => {
    setVisibleBlogs((prev) => prev + 3);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBlogs = blogs
    .filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((blog) => (selectedTag ? blog.tag === selectedTag : true));

  const recentBlogs = blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const uniqueTags = [...new Set(blogs.map((blog) => blog.tag))];

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div className='grid grid-cols-12 gap-10'>
        {/* Sidebar */}
        <div className='col-span-4'>
          {/* Search Bar */}
          <div className='mb-5'>
            <h3 className='text-lg font-bold mb-2'>Search</h3>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search blog'
                value={searchTerm}
                onChange={handleSearch}
                className='w-full p-2.5 border border-gray-300  focus:outline-none '
              />
              <IoSearchOutline
                className='absolute text-gray-400 right-5 top-3'
                size={20}
              />
            </div>
          </div>

          {/* Tag Sorting */}
          <div className='mb-5'>
            <h3 className='text-lg font-bold mb-2'>Tags</h3>
            <ul className='grid grid-cols-2  gap-3 '>
              <li className='bg-gray-100 px-2 py-1 text-sm font-medium'>
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`${
                    selectedTag === null ? "text-blue-500" : "text-black"
                  }`}
                >
                  All Blogs
                </button>
              </li>
              {uniqueTags.map((tag) => (
                <li
                  className='bg-gray-100 px-2 py-1.5 text-sm font-medium'
                  key={tag}
                >
                  <button
                    onClick={() => setSelectedTag(tag)}
                    className={`${
                      selectedTag === tag ? "text-blue-500" : "text-black"
                    }`}
                  >
                    {tag}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Blogs */}
          <div className=''>
            <h3 className='text-lg font-bold mb-2'>Recent Blogs</h3>
            {recentBlogs.map((blog) => (
              <Link
                to={`/blog/${blog.id}`}
                key={blog.id}
                className='block mb-3'
              >
                <div className='flex items-center space-x-3'>
                  <img
                    loading='lazy'
                    src={blog.image}
                    alt={blog.title}
                    className='w-16 h-16 object-cover '
                  />
                  <div>
                    <h4 className='text-sm font-semibold'>{blog.title}</h4>
                    <p className=' text-sm text-gray-500'>
                      by <span className='text-xs'>{blog.author}</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Blogs Post */}
        <div className='col-span-8'>
          <div className='grid grid-cols-2 gap-x-6 gap-y-8'>
            {filteredBlogs.slice(0, visibleBlogs).map((blog) => (
              <div key={blog.id} className='relative group'>
                <Link to={`/blog/${blog.id}`}>
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
              </div>
            ))}
          </div>
          {visibleBlogs < filteredBlogs.length && (
            <div className='text-center mt-8'>
              <button
                onClick={handleShowMore}
                className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
