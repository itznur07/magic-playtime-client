import React from "react";
import { FaTimes } from "react-icons/fa";

const CheckoutModal = ({ onClose }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white rounded-lg sshadow-lg w-full max-w-md p-5'>
        <div className='flex justify-between items-center border-b pb-3'>
          <h3 className='text-xl font-bold'>Checkout</h3>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'
          >
            <FaTimes />
          </button>
        </div>
        <div className='mt-4'>
          {/* Add checkout form or details here */}
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <input type='text' className='w-full border rounded-lg p-2 mt-1' />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input type='email' className='w-full border rounded-lg p-2 mt-1' />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Address
            </label>
            <textarea className='w-full border rounded-lg p-2 mt-1'></textarea>
          </div>
        </div>
        <div className='mt-4 flex justify-end'>
          <button
            onClick={onClose}
            className='bg-gray-300 text-gray-700 py-2 px-4 rounded-lg mr-2 hover:bg-gray-400 transition-colors duration-300'
          >
            Cancel
          </button>
          <button className='bg-[#1fd1a5] text-white py-2 px-4 rounded-lg hover:bg-[#17a589] transition-colors duration-300'>
            Confirm Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
