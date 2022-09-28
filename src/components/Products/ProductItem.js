import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./ProductItem.module.css";

import CartContext from "../../context/CartContext";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [disabled, setDisabled] = useState(false);
  const handleDelete = () => {
    fetch("http://localhost:3001/products/" + props.id, {
      method: "DELETE",
    });
  };

  const handleAddToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      price: props.price,
      description: props.description,
      amount: amount,
    });
    setDisabled(true);
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
        <Button className={styles.button} warning={true} onClick={handleDelete}>
          Delete
        </Button>
        <Button disabled={disabled} onClick={handleAddToCart}>
          Add to cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductItem;
