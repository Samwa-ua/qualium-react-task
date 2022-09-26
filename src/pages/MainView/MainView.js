import React from "react";

import ProductsList from "../../components/Products/ProductsList";
import SearchForm from "../../components/SearchForm/SearchForm";

const MainView = () => {
  return (
    <>
      <SearchForm />
      <ProductsList />
    </>
  );
};

export default MainView;
