import React from "react";

const PriceSlider = ({ priceRange, setPriceRange }) => {
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevState) => ({
      ...prevState,
      [name]: parseInt(value),
    }));
  };

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <span className='text-gray-600'>Price Range:</span>
        <span className='font-bold'>
          ${priceRange.min} - ${priceRange.max}
        </span>
      </div>
      <input
        type='range'
        name='min'
        min='0'
        max='1000'
        value={priceRange.min}
        onChange={handlePriceChange}
        className='slider'
      />
      <input
        type='range'
        name='max'
        min='0'
        max='1000'
        value={priceRange.max}
        onChange={handlePriceChange}
        className='slider '
      />
    </div>
  );
};

export default PriceSlider;
