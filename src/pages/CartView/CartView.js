import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./CartView.module.css";

import Cart from "../../components/Cart/Cart";
import Button from "../../components/UI/Button";

import CartContext from "../../context/CartContext";

const CartView = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={styles.container}>
      <>
        {cartCtx.items.length === 0 ? (
          <div className={styles.cart}>
            <p>Your cart is empty</p>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        ) : (
          <>
            <Cart />
            <div className={styles.cart}>
              <Link to="/">
                <Button>Return Home</Button>
              </Link>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default CartView;
