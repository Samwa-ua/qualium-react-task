import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

import styles from "./Cart.module.css";

import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemDeleteHandler = (id) => {
    console.log(cartCtx.items);
    cartCtx.deleteItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-wrapper"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          onDelete={cartItemDeleteHandler.bind(null, item.id)}
        />
      ))}
      <div className={styles.total}>
        <h3>Total: $ {cartCtx.totalAmount}</h3>
      </div>
    </ul>
  );
  return <section className={styles.products}>{cartItems}</section>;
};

export default Cart;
