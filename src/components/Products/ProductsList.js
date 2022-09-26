import React from "react";
// import Card from "../UI/Cards";
import ProductItem from "./ProductItem";

import styles from "./ProductsList.module.css";

const DUMMY_DATA = [
  {
    id: "bix27468fjc",
    title: "Audi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, qui?",
    price: 100,
    inCart: true,
  },
  {
    id: "BMW",
    title: "iphone 5c",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, qui?",
    price: 150,
    inCart: false,
  },
  {
    id: "ox98i1f5idg",
    title: "Citroen",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, qui?",
    price: 200,
    inCart: false,
  },
  {
    id: "adv62bxeq9i",
    title: "Lexus",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, qui?",
    price: 250,
    inCart: false,
  },
  {
    id: "yp5hqdyqh9b",
    title: "Mazda",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, qui?",
    price: 300,
    inCart: false,
  },
];

const ProductsList = () => {
  const productsList = DUMMY_DATA.map((product) => (
    <ProductItem
      key={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
    ></ProductItem>
  ));
  return <section className={styles.products}>{productsList}</section>;
};

export default ProductsList;
