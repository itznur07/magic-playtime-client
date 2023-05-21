import React from "react";
import useTitle from "../../Hooks/useTitle";

const AddToys = () => {
  useTitle("Add Toy");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const toyData = {
      pictureUrl,
      name,
      sellerName,
      sellerEmail,
      subcategory,
      price,
      rating,
      quantity,
      description,
    };

    fetch(`https://toy-marketplace-server-six.vercel.app/mytoys`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Toy Data Add successfully!");
          form.reset();
        }
      });
  };
  
  return (
    <div className='p-6'>
      <h2 className='text-3xl font-bold text-center my-5 '>Add A Toy</h2>
      <form onSubmit={handleSubmit} className='md:mx-52 '>
        <div className='grid grid-cols-2 gap-5'>
          <div>
            <label
              htmlFor='pictureUrl'
              className='block text-gray-700 font-medium mb-2'
            >
              Picture URL
            </label>
            <input
              type='text'
              id='pictureUrl'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e52165]'
              name='pictureUrl'
              required
            />
          </div>
          <div>
            <label
              htmlFor='name'
              className='block text-gray-700 font-medium mb-2'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e52165]'
              name='name'
              required
            />
          </div>
          <div>
            <label
              htmlFor='sellerName'
              className='block text-gray-700 font-medium mb-2'
            >
              Seller Name
            </label>
            <input
              type='text'
              id='sellerName'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e52165]'
              name='sellerName'
              required
            />
          </div>
          <div>
            <label
              htmlFor='sellerEmail'
              className='block text-gray-700 font-medium mb-2'
            >
              Seller Email
            </label>
            <input
              type='email'
              id='sellerEmail'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e52165]'
              name='sellerEmail'
              required
            />
          </div>
          <div>
            <label
              htmlFor='subcategory'
              className='block text-gray-700 font-medium mb-2'
            >
              Sub-category
            </label>
            <input
              type='text'
              id='subcategory'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e52165]'
              name='subcategory'
              required
            />
          </div>
          <div>
            <label
              htmlFor='price'
              className='block text-gray-700 font-medium mb-2'
            >
              Price
            </label>
            <input
              type='text'
              id='price'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e52165]'
              name='price'
              required
            />
          </div>
          <div>
            <label
              htmlFor='rating'
              className='block text-gray-700 font-medium mb-2'
            >
              Rating
            </label>
            <input
              type='text'
              id='rating'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e52165]'
              name='rating'
              required
            />
          </div>
          <div>
            <label
              htmlFor='quantity'
              className='block text-gray-700 font-medium mb-2'
            >
              Available Quantity
            </label>
            <input
              type='text'
              id='quantity'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e52165]'
              name='quantity'
              required
            />
          </div>
          <div>
            <label
              htmlFor='description'
              className='block text-gray-700 font-medium mb-2'
            >
              Detail Description
            </label>
            <textarea
              id='description'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e52165]'
              name='description'
              required
            />
          </div>
        </div>
        <div>
          <button
            type='submit'
            className='w-full font-medium my-5 bg-[#e52165] text-white px-4 py-2.5 rounded-md hover:bg-[#0d1137] transition-colors'
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToys;
