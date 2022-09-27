import React from "react";
import { Link } from "react-router-dom";

import styles from "./ProductItem.module.css";

import Card from "../UI/Card";

const ProductItem = (props) => {
  return (
    <Card className={styles.product}>
      <h3>{props.title}</h3>
      <div className={styles.price}>{props.price}</div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.product__button_wrapper}>
        <Link to={`/edit/${props.id}`}>
          <button className={styles.button}>Edit</button>
        </Link>
        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
        <button className={styles.button}>Add to cart</button>
      </div>
    </Card>
  );
};

export default ProductItem;
