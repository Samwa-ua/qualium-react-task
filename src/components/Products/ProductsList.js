import useFetch from "../../hooks/useFetch";

import styles from "./ProductsList.module.css";

import ProductItem from "./ProductItem";
import LoadingSpinner from "../UI/LoadingSpinner";

const ProductsList = (props) => {
  const { data: products, isPending } = useFetch(
    `http://localhost:3001/products?_page=${props.page}&_limit=10`
  );

  const productsList = products.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
    ></ProductItem>
  ));
  return (
    <section className={styles.products}>
      {isPending && <LoadingSpinner />}
      {productsList}
    </section>
  );
};

export default ProductsList;
