import React from "react";

import SearchForm from "../../components/SearchForm/SearchForm";
import ProductsList from "../../components/Products/ProductsList";
import Pagination from "../../components/Pagination/Pagination";

const MainView = () => {
  return (
    <>
      <SearchForm />
      <ProductsList />
      <Pagination />
    </>
  );
};

export default MainView;
