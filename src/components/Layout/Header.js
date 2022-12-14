import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>QualiumSystems</h1>
      </Link>
      <Link to="/cart">
        <HeaderCartButton />
      </Link>
    </header>
  );
};

export default Header;
