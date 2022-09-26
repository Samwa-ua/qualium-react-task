import React from "react";

import styles from "./MainView.module.css";

import SearchForm from "../../components/SearchForm/SearchForm";
import ProductsList from "../../components/Products/ProductsList";
import Pagination from "../../components/Pagination/Pagination";

const MainView = () => {
  return (
    <>
      <SearchForm />
      <section className={styles["content-main"]}>
        <div className={styles["content-header"]}>
          <h2 className="content-title">Products</h2>
          <div>
            <div className={styles.button}>Create</div>
          </div>
          <select className={styles.select}>
            <option>Sort ⬆ </option>
            <option>Sort ⬇ </option>
          </select>
        </div>
      </section>

      <ProductsList />
      <Pagination />
    </>
  );
};

export default MainView;
