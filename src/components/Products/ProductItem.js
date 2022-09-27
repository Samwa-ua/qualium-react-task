import React from "react";
import { Link } from "react-router-dom";

import styles from "./ProductItem.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";

const ProductItem = (props) => {
  const handleDelete = () => {
    fetch("http://localhost:3001/products/" + props.id, {
      method: "DELETE",
    });
  };
  return (
    <Card className={styles.product}>
      <h3>{props.title}</h3>
      <div className={styles.price}>{props.price}</div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.product__button_wrapper}>
        <Link to={`/edit/${props.id}`}>
          <Button>Edit</Button>
        </Link>
        <Button className={styles.button} onClick={handleDelete}>
          Delete
        </Button>
        <Button>Add to cart</Button>
      </div>
    </Card>
  );
};

export default ProductItem;
