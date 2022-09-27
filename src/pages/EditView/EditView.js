import styles from "./EditView.module.css";

import Input from "../../components/UI/Input";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

const EditView = () => {
  const { id } = useParams();
  const { data: product, isPending } = useFetch(
    "http://localhost:3001/products/" + id
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.edit}>
      {isPending && <LoadingSpinner />}
      <Card>
        <form onSubmit={handleSubmit}>
          <Input id="Title" label="Title" type="text" value={product.title} />
          <Input
            id="Price"
            label="Price"
            type="number"
            min="0"
            value={product.price}
          />
          <p>Description</p>
          <textarea
            className={styles.textarea}
            name="Description"
            id="Description"
            cols="30"
            rows="5"
            value={product.description}
          ></textarea>
          <Button type="submit">Save</Button>
          <Link to="/">
            <Button className={styles.btn} type="submit">
              Cancel
            </Button>
          </Link>
        </form>
      </Card>
    </div>
  );
};

export default EditView;
