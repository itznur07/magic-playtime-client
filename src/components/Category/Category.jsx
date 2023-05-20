import CategoryCard from "./CategoryCard";

const Category = () => {
  const babyToyImages = [
    "https://example.com/images/baby-rattle.jpg",
    "https://example.com/images/stacking-rings.jpg",
    "https://example.com/images/soft-plush-toy.jpg",
    "https://example.com/images/musical-mobile.jpg",
    "https://example.com/images/teething-toy.jpg",
    "https://example.com/images/activity-gym.jpg",
  ];

  return (
    <>
      <div className='md:mx-24 my-10 md:grid md:grid-cols-6 justify-center grid items-center' >
          {babyToyImages.map((product) => (
            <CategoryCard
              img={product.image}
            />
          ))}
      </div>
    </>
  );
};

export default Category;
