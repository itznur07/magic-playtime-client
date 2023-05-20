import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyData = useLoaderData();
  console.log("====================================");
  console.log(toyData);
  console.log("====================================");
  return <div>ToyDetails</div>;
};

export default ToyDetails;
