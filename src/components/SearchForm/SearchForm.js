import React from "react";

import styles from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <div className={styles.form_wrapper}>
      <form className={styles["input-group"]}>
        <input type="search" className={styles.input} placeholder="Search" />
        <button type="submit" className={styles["search-button"]}>
          search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
