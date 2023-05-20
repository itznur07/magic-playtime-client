import CategoryCard from "./CategoryCard";

const Category = () => {
  const babyToyImages = [
    "https://img.freepik.com/premium-photo/composition-various-sport-equipment-fitness-games_93675-82046.jpg?w=1060",
    "https://img.freepik.com/free-photo/still-life-small-decorative-objects-with-vivid-colors_23-2149732873.jpg?w=1060&t=st=1684603776~exp=1684604376~hmac=e953cb5e6e0f18fc3ef26a85925a337abc57da76fec9b77f8b9d59a66485ab32",
    "https://img.freepik.com/free-photo/top-view-basketball-with-ping-pong-tennis-balls_23-2148796955.jpg?w=1060&t=st=1684603744~exp=1684604344~hmac=2ec4d723e175627a644fb7df48965e455c70acb924d030961aba5e2beb9a4979",
    "https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686884.jpg?w=1060&t=st=1684603645~exp=1684604245~hmac=d2c51b515bbaf9e0ad92a781b67ba012f0f1a26776814d10a3afd49d81af1239",
    "https://img.freepik.com/free-photo/small-red-car-toy-kid-child-playing-with-it_114579-7239.jpg?w=1060&t=st=1684603705~exp=1684604305~hmac=039db814ec4aa3a4a18843ed5aff3f963d103ddfd8595d3d63838fa439d39ad5",
    "https://img.freepik.com/free-photo/modern-sport-composition-with-gym-elements_23-2148000108.jpg?w=1060&t=st=1684603724~exp=1684604324~hmac=75a4ee2442141a2abf48e651d2214b95c61a05c38c3b6f47e07ae140efa17c0b",
  ];

  return (
    <>
      <div className='flex items-center justify-between md:mx-24 my-16'>
        {babyToyImages.map((product) => (
          <CategoryCard img={product} />
        ))}
      </div>
    </>
  );
};

export default Category;
