import styles from "./EditView.module.css";

import Input from "../../components/UI/Input";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";

const EditView = () => {
  return (
    <div className={styles.edit}>
      <Card>
        <form>
          <Input id="Title" label="Title" type="text" />
          <Input id="Price" label="Price" type="number" min="0" />
          <p>Description</p>
          <textarea
            className={styles.textarea}
            name="Description"
            id="Description"
            cols="30"
            rows="10"
          ></textarea>
          <Button type="submit">Save</Button>
          <Link to="/">
            <Button className={styles.btn}>Cancel</Button>
          </Link>
        </form>
      </Card>
    </div>
  );
};

export default EditView;
