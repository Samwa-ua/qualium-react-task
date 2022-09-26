import React from "react";

import styles from "./Pagination.module.css";

const Pagination = () => {
  return (
    <nav>
      <ul className={styles.pagination}>
        <li className={styles.active_page}>1</li>
        <li className={styles.page}>2</li>
      </ul>
    </nav>
  );
};

export default Pagination;
