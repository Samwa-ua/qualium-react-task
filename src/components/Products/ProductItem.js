import React from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Cards";

import styles from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <Card className={styles.product}>
      <h3>{props.title}</h3>
      <div className={styles.price}>{props.price}</div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.product__button_wrapper}>
        <button className={styles.button}>
          <Link to="/edit/:id">Edit</Link>
        </button>
        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
        <button className={styles.button}>Add to cart</button>
      </div>
    </Card>
  );
};

export default ProductItem;
