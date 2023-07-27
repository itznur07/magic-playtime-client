import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import ProductCard from "../ProductCard/ProductCard";

const HankPick = () => {
  const { products } = useContext(AuthContext);

  return (
    <div className='md:mt-10'>
      <h1 className='text-3xl font-bold md:text-start text-center md:mt-0 mt-10'>Hand Pick Pieces</h1>
      <div className='grid md:grid-cols-4 grid-cols-1 justify-center  gap-7 mt-10 md:mx-0 mx-5'>
        {products?.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} {...product} />
        ))}
      </div>
    </div>
  );
};

export default HankPick;
