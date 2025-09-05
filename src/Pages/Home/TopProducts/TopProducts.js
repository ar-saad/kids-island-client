import React from "react";
import { useState, useEffect } from "react";
import SingleProduct from "../../Shop/SingleProduct";

const TopProducts = () => {
  const [homeProducts, setHomeProducts] = useState([]);
  const backendURL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetch(`${backendURL}/home/products`)
      .then((res) => res.json())
      .then((data) => {
        setHomeProducts(data);
      });
  }, [backendURL]);

  return (
    <div className="container mx-auto my-24">
      <h1 className="text-5xl text-center font-bold my-20">Top Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {homeProducts.map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
