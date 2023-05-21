const AddToys = () => {
  
  const handleAddCoffe = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const coffeeInfo = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    //   fetch(
    //     "https://cofee-house-server-nuruddinmd509-gmailcom.vercel.app/coffee",
    //     {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify(coffeeInfo),
    //     }
    //   )
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.insertedId) {
    //         alert("Coffee added successfully!");
    //       }
    //       form.reset();
    //       navigate("/coffee");
    //     });
    // };

    return (
      <div className='flex flex-col space-y-5 items-center justify-center h-screen'>
        <div>
          <h1 className='text-3xl font-bold my-2 uppercase text-blue-500'>
            Add Toys
          </h1>
        </div>
        <form
          // onSubmit={handleAddCoffe}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <div className='grid grid-cols-2 gap-5'>
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='name'
              >
                Name
              </label>
              <input
                className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                name='name'
                type='text'
                placeholder='Enter coffee name'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='quantity'
              >
                Quantity
              </label>
              <input
                className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='quantity'
                name='quantity'
                type='text'
                placeholder='Enter coffee chef'
                required
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='supplier'
              >
                Supplier
              </label>
              <input
                className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='supplier'
                name='supplier'
                type='text'
                placeholder='Enter coffee supplier'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='taste'
              >
                Taste
              </label>
              <input
                className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='taste'
                name='taste'
                type='text'
                placeholder='Enter coffee taste'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='category'
              >
                Category
              </label>
              <input
                className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='category'
                name='category'
                type='text'
                placeholder='Enter coffee cagegory'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='details'
              >
                Details
              </label>
              <input
                className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='details'
                name='details'
                type='text'
                placeholder='Enter coffee details'
                required
              />
            </div>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='photo'
            >
              Photo
            </label>
            <input
              className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='photo'
              name='photo'
              type='text'
              placeholder='Enter photo url'
              required
            />
          </div>
          {/* Submit button */}
          <div className='flex items-center justify-between '>
            <button
              className='bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };
};

export default AddToys;
