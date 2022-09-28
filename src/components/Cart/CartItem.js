import Button from "../UI/Button";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={styles["cart-item"]}>
      <li>
        <div>
          <h2>{props.title}</h2>
          <h3>{props.description}</h3>
          <div>
            <span className={styles.price}>${props.price}</span>
          </div>
        </div>
        <div className={styles.actions}>
          <Button>−1</Button>
          <Button>+1</Button>
          <Button>delete</Button>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
