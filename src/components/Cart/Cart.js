import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

import styles from "./Cart.module.css";

import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const totalValue = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.price;
  }, 0);

  const cartItems = (
    <ul className={styles["cart-wrapper"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
      <div className={styles.total}>
        <h3>Total: $ {totalValue}</h3>
      </div>
    </ul>
  );
  return <section className={styles.products}>{cartItems}</section>;
};

export default Cart;
