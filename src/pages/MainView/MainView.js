import React from "react";
import { Link } from "react-router-dom";

import styles from "./MainView.module.css";

import SearchForm from "../../components/SearchForm/SearchForm";
import ProductsList from "../../components/Products/ProductsList";
import Pagination from "../../components/Pagination/Pagination";
import Button from "../../components/UI/Button";

const MainView = () => {
  return (
    <>
      <SearchForm />
      <section className={styles["content-main"]}>
        <div className={styles["content-header"]}>
          <h2>Products</h2>
          <Link to="/edit/:id">
            <Button>Create</Button>
          </Link>
          <select className={styles.select}>
            <option>Sort ⬆</option>
            <option>Sort ⬇</option>
          </select>
        </div>
      </section>
      <ProductsList />
      <Pagination />
    </>
  );
};

export default MainView;
