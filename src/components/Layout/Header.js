import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>QualiumSystems</h1>
      <button>Cart</button>
    </header>
  );
};

export default Header;
