import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.centered}>
      <p className={styles.title}>Page not found!</p>
      <Link to="/">
        <button className={styles.button}>Back to the main</button>
      </Link>
    </div>
  );
};

export default NotFound;
