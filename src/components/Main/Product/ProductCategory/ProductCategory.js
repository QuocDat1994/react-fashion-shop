import React from "react";
import styles from "./ProductCategory.module.css";

export const ProductCategory = props => (
  <div className={styles.category}>
    <span>In </span>
    <a href="#">Category</a>
  </div>
);

export default ProductCategory;
