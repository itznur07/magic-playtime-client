import React from "react";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const AddToys = () => {
  useTitle("Add Toy");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const images = [
      form.pictureUrl.value,
      form.image2.value,
      form.image3.value,
    ];
    const title = form.name.value;
    const price = form.price.value;
    const discount_price = form.discount_price.value;
    const description = form.description.value;
    const categry = form.categories.value;
    const categories = categry.split(",");

    const productsData = {
      images,
      title,
      price,
      discount_price,
      categories,
      quantity: 0,
      description,
      hot: true,
      sale: false,
      reviews: [],
    };

    fetch(`https://toy-marketplace-server-six.vercel.app/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productsData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Product Publish",
            text: "Product successfully published!",
            icon: "success",
            confirmButtonText: "ok",
            confirmButtonColor: "green",
          });
          form.reset();
        }
      });
  };

  return (
    <div className='p-6'>
      <h2 className='text-3xl font-bold text-center my-5 '>Publish Products</h2>
      <form onSubmit={handleSubmit} className='md:mx-52 '>
        <div className='grid grid-cols-2 gap-5'>
          <div>
            <label
              htmlFor='pictureUrl'
              className='block text-gray-700 font-medium mb-2'
            >
              Image URL
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
              Title
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
              htmlFor='Discout Price'
              className='block text-gray-700 font-medium mb-2'
            >
              Discount Price
            </label>
            <input
              type='discount_price'
              id='discount_price'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e52165]'
              name='discount_price'
              required
            />
          </div>
          <div>
            <label
              htmlFor='image2'
              className='block text-gray-700 font-medium mb-2'
            >
              Image URL(2)
            </label>
            <input
              type='text'
              id='image2'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e52165]'
              name='image2'
              required
            />
          </div>
          <div>
            <label
              htmlFor='image3'
              className='block text-gray-700 font-medium mb-2'
            >
              Image URL (3)
            </label>
            <input
              type='text'
              id='image3'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e52165]'
              name='image3'
              required
            />
          </div>
          <div>
            <label
              htmlFor='categories'
              className='block text-gray-700 font-medium mb-2'
            >
              Categories(, , ,)
            </label>
            <input
              type='text'
              id='categories'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e52165]'
              name='categories'
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
            <input
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
            Publish Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToys;
