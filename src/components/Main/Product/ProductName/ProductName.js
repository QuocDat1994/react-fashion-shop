import React from "react";

import styles from "./ProductName.module.css";

export const ProductName = props => (
  <a
    href="#"
    className={`${styles.name} ${props.style == "large" ? styles.large : ""}`}
  >
    {props.name}
  </a>
);

export default ProductName;
