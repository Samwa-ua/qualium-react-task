import React, { useEffect, useState } from "react";

import styles from "./ProductsList.module.css";

import ProductItem from "./ProductItem";
import LoadingSpinner from "../UI/LoadingSpinner";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3001/products");
      const json = await data.json();
      setProducts(json);
      setIsPending(false);
    };
    fetchData().catch(console.error);
  }, []);

  const productsList = products.map((product) => (
    <ProductItem
      key={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
    ></ProductItem>
  ));
  return (
    <section className={styles.products}>
      {isPending && <LoadingSpinner />}
      {productsList}
    </section>
  );
};

export default ProductsList;
