import React from "react";
import styles from "./ProductList.module.css";

import Product from "../Product/Product";

const ProductList = props => {
  return (
    <div className={styles.container}>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ProductList;
