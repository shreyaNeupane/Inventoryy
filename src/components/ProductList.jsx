import React, { useEffect, useState } from "react";

import Product from "./Product";
import { Input } from "./ui/input";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [searchText, setSearchText] = useState("");

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      setLoading(false);
      setProducts(json);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <>loading</>;
  }
  if (error) {
    return <>{error.message}</>;
  }
  return (
    <>
      <Input type={"text"} placeholder="Search"></Input>

      {products.map((product) => (
        <Product product={product} />
      ))}
    </>
  );
};

export default ProductList;
