import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${props.className} ${
        props.disabled && styles.disabled
      } ${props.warning && styles.warning}`}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      warning={props.warning}
    >
      {props.children}
    </button>
  );
};

export default Button;
