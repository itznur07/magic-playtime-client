import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateToys = () => {
  const loadedData = useLoaderData();

  const navigate = useNavigate();

  const handleUpdate = (e) => {
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

    // Data Update usign api
    fetch(
      `https://toy-marketplace-server-six.vercel.app/mytoys/${loadedData._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(toyData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Toy updated successfully!");
          navigate("/mytoys");
        }
      });
  };

  return (
    <div className='flex flex-col space-y-5 items-center justify-center h-screen'>
      <div>
        <h1 className='text-3xl font-bold my-2 uppercase text-blue-500'>
          Update Toys
        </h1>
      </div>
      <form onSubmit={handleUpdate} className='md:mx-52 '>
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
              defaultValue={loadedData?.pictureUrl}
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
              defaultValue={loadedData?.name}
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
              defaultValue={loadedData?.sellerName}
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
              defaultValue={loadedData?.sellerEmail}
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
              defaultValue={loadedData?.subcategory}
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
              defaultValue={loadedData?.price}
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
              defaultValue={loadedData?.rating}
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
              defaultValue={loadedData?.quantity}
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
              defaultValue={loadedData?.description}
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

export default UpdateToys;
