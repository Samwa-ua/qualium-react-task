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
          <Button onClick={props.onRemove}>−1</Button>
          <p className={styles.amount}>{props.amount}</p>
          <Button onClick={props.onAdd}>+1</Button>
          <Button warning={true} onClick={props.onDelete}>
            delete
          </Button>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
