import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./MainView.module.css";

import SearchForm from "../../components/SearchForm/SearchForm";
import ProductsList from "../../components/Products/ProductsList";
import Pagination from "../../components/Pagination/Pagination";
import Button from "../../components/UI/Button";

const MainView = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePage = (pageNumber) => {
    setPageNumber(pageNumber);
  };
  return (
    <>
      <SearchForm />
      <section className={styles["content-main"]}>
        <div className={styles["content-header"]}>
          <h2>Products</h2>
          <Link to="/create">
            <Button>Create</Button>
          </Link>
          <select className={styles.select}>
            <option>Sort ⬆</option>
            <option>Sort ⬇</option>
          </select>
        </div>
      </section>
      <ProductsList page={pageNumber} />
      <Pagination onChangePage={handlePage} />
    </>
  );
};

export default MainView;
