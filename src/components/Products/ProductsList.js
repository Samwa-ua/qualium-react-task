import useFetch from "../../hooks/useFetch";

import styles from "./ProductsList.module.css";

import ProductItem from "./ProductItem";
import LoadingSpinner from "../UI/LoadingSpinner";

const ProductsList = () => {
  const { data: products, isPending } = useFetch(
    "http://localhost:3001/products"
  );

  const productsList = products.map((product) => (
    <ProductItem
      key={product.id}
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
