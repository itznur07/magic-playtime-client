import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import ProductCard from "../ProductCard/ProductCard";

const HankPick = () => {
  const { products } = useContext(AuthContext);
  console.log(products);

  return (
    <div className='md:mt-10'>
      <h1 className='text-3xl font-bold'>Hand Pick Pieces</h1>
      <div className='grid grid-cols-4 gap-7 mt-10'>
        {products?.slice(0, 4).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default HankPick;
