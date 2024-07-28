import React, { useState } from "react";
import CheckoutModal from "./CheckoutModal";

const Checkout = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='container mx-auto p-5'>
      <h2 className='text-2xl font-bold mb-4'>Checkout</h2>
      <div className='bg-white shadow-lg rounded-lg p-5'>
        {/* Add checkout summary details here */}
        <button
          onClick={handleOpenModal}
          className='bg-[#1fd1a5] text-white py-2 px-4 rounded-lg hover:bg-[#17a589] transition-colors duration-300'
        >
          Proceed to Checkout
        </button>
      </div>

      {showModal && <CheckoutModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Checkout;
