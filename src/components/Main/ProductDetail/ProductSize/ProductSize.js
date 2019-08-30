import React from "react";

import styles from "./ProductSize.module.css";
import Size from "./Size";

const ProductSize = props => (
  <section className={styles.container}>
    <p>Select Size</p>
    <Size></Size>
    <Size></Size>
    <Size></Size>
    <Size></Size>
    <Size></Size>
    <Size></Size>
  </section>
);

export default ProductSize;
