import React from "react";
import styles from "./ProductList.module.css";

import Product from "../Product/Product";
import fetchData from "../../../api/fetch";

const ProductList = props => {
  console.log(fetchData());

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
