import React, { useContext } from "react";

import CartContext from "../../context/CartContext";

import styles from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = () => {
  const { items } = useContext(CartContext);
  console.log(items);
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
