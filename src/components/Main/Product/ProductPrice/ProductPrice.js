import React from "react";

import styles from "./ProductPrice.module.css";

const ProductPrice = props => (
  <div
    className={`${styles.price} ${props.style == "large" ? styles.large : ""}`}
  >
    <span>$</span>
    <span>{Math.floor(props.price)}</span>
    <span>.{props.price.toString().split(".")[1]}</span>
    <br />
  </div>
);

export default ProductPrice;
