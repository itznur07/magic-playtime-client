import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const images = [
    "https://images.unsplash.com/photo-1536846511313-4b07b637bff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    "https://images.unsplash.com/photo-1588090644556-14707d0e886a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    "https://img.freepik.com/free-photo/top-view-composition-with-neatly-arranged-organized-sport-items_23-2150275276.jpg?w=1060&t=st=1684635090~exp=1684635690~hmac=96c9af200f1435bbd51ad8b05b83290cdaa9e191f369fcf22d230dace1f78205",
    "https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80FF",
  ];

  return (
    <div className='gallery-section py-10 md:mx-24'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-6'>Toys Gallery</h2>
        <div className='grid grid-cols-3 gap-4'>
          {images?.map((image, index) => (
            <div
              onClick={() => handleImageClick(image)}
              key={index}
              className='relative overflow-hidden'
            >
              <img
                src={image}
                className='w-full rounded h-full object-cover transition-transform duration-300 transform hover:scale-105 cursor-pointer'
              />
            </div>
          ))}
        </div>
      </div>
      {/* Image Popup Modal */}
      {selectedImage && (
        <div className='fixed inset-0 flex items-center justify-center z-10'>
          <div className='absolute inset-0 bg-black opacity-75'></div>
          <div className='relative'>
            <img
              src={selectedImage}
              alt='Selected Image'
              className='max-w-md max-h-md'
            />
            <button
              className='absolute top-4 right-4 text-white font-bold text-lg focus:outline-none'
              onClick={handleCloseModal}
            >
              <FaWindowClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
