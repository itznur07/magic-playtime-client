import React from "react";
import { Link } from "react-router-dom";
import image3 from "../../assets/landscape-img-crd5.webp";
import image1 from "../../assets/OurService2.webp";
import image2 from "../../assets/two.webp";
import ProductCard from "../ProductCard/ProductCard";

const HankPick = ({ products }) => {
  const dummyProducts = [
    {
      id: 1,
      title: "Pure AC cotton 3 pis",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 2000,
      discount_price: 1650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 2,
      title: "Pure cotton sharee for women",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image2, image1, image3],
      price: 3000,
      discount_price: 2350,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 3,
      title: "Lehenga saree bundle pack ",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image3, image1, image2],
      price: 9000,
      discount_price: 8650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 4,
      title: "Pure AC cotton 3 pis",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image3, image1, image2],
      price: 2000,
      discount_price: 1650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 5,
      title: "Pure cotton sharee for women",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image2, image1, image3],
      price: 3000,
      discount_price: 2350,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 6,
      title: "Lehenga saree bundle pack ",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 9000,
      discount_price: 8650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 7,
      title: "Pure AC cotton 3 pis",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 2000,
      discount_price: 1650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 8,
      title: "Pure cotton sharee for women",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 3000,
      discount_price: 2350,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 9,
      title: "Lehenga saree bundle pack ",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 9000,
      discount_price: 8650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 10,
      title: "Pure AC cotton 3 pis",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 2000,
      discount_price: 1650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 11,
      title: "Pure cotton sharee for women",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 3000,
      discount_price: 2350,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
    {
      id: 12,
      title: "Lehenga saree bundle pack ",
      description:
        "Pure AC inductive product with optional price option for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with purchase options for customers with",
      categories: ["3pis", "Sharee", "2pis", "Party saree"],
      images: [image1, image2, image3],
      price: 9000,
      discount_price: 8650,
      quantity: 0,
      reviews: [
        {
          id: 1,
          author: "John",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
        {
          id: 2,
          author: "Mark",
          text: "Pure AC inductive product with optional price option for customers with purchase",
        },
      ],
    },
  ];

  return (
    <div className='md:mt-10'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold md:text-start text-center md:mt-0 mt-10'>
          Hand Pick Pieces
        </h1>
        <Link className='text-lg font-bold ' to='/shop'>
          View All
        </Link>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 justify-center  gap-3 mt-10 md:mx-0 mx-3'>
        {products?.length > 0
          ? products
              ?.slice(0, 6)
              .map((product) => (
                <ProductCard key={product.id} product={product} {...product} />
              ))
          : dummyProducts
              ?.slice(0, 6)
              .map((product) => (
                <ProductCard key={product.id} product={product} {...product} />
              ))}
      </div>
    </div>
  );
};

export default HankPick;
