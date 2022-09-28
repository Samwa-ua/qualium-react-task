import React from "react";

import styles from "./Pagination.module.css";

const Pagination = (props) => {
  console.log(props);
  const handlePage = (e) => {
    props.onChangePage(+e.target.outerText);
    // console.log(e.target.outerText);
  };
  return (
    <nav>
      <ul className={styles.pagination}>
        <li className={styles.active_page} onClick={handlePage}>
          1
        </li>
        <li className={styles.page} onClick={handlePage}>
          2
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
