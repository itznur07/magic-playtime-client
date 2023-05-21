import React from "react";

const reviews = [
  {
    id: 1,
    author: "John Doe",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    text: "The toys I purchased from this website were of excellent quality and my kids absolutely love them! Highly recommended.",
  },
  {
    id: 2,
    author: "Jane Smith",
    img: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1212&q=80",
    text: "I had a great shopping experience on this website. The toys arrived on time and were exactly as described. Will definitely buy from here again",
  },
  {
    id: 3,
    author: "David Williams",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    text: "I'm impressed with the wide variety of toys available on this website. It's a one-stop shop for all my children's toy needs.",
  },
  {
    id: 4,
    author: "Emily Johnson",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    text: "The customer service of this toy website is top-notch. They were quick to respond to my queries and provided helpful assistance",
  },
  {
    id: 5,
    author: "Michael Brown",
    img: "https://images.unsplash.com/photo-1519336555923-59661f41bb45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    text: "The prices are competitive, and the quality of the toys is excellent. I have recommended this website to all my friends and family.'",
  },
];

const Review = () => {
  return (
    <div className='p-4 md:mx-14'>
      <h1 className='text-center pt-10 text-3xl font-bold'>Top Reviews</h1>
      <div className='flex flex-col md:flex-row items-center md:space-x-5 md:justify-between mt-10'>
        {reviews.map((review) => (
          <div key={review.id} className='mt-5 w-full md:w-auto'>
            <div className='bg-white rounded shadow-md p-4 md:p-8'>
              <div className='flex flex-col text-center items-center space-x-4'>
                <img
                  className='w-14 h-14 rounded-full'
                  src={review.img}
                  alt='reviewer-not-found'
                />
                <div className="mt-4">
                  <p className='text-gray-500'>{review.author}</p>
                  <p className='text-gray-700'>{review.text.slice(0, 78)}...</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
