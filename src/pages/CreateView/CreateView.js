import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "./CreateView.module.css";

import Input from "../../components/UI/Input";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";

const CreateView = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(+e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { title, price, description };
    fetch(`http://localhost:3001/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    history.push("/");
  };

  return (
    <div className={styles.create}>
      <Card>
        <form onSubmit={handleSubmit}>
          <Input
            id="Title"
            label="Title"
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
          <Input
            id="Price"
            label="Price"
            type="number"
            min="0"
            value={price}
            onChange={handlePriceChange}
          />
          <p>Description</p>
          <textarea
            className={styles.textarea}
            name="Description"
            id="Description"
            cols="30"
            rows="5"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
          <Button type="submit">Create</Button>
          <Link to="/">
            <Button className={styles.btn}>Cancel</Button>
          </Link>
        </form>
      </Card>
    </div>
  );
};

export default CreateView;
