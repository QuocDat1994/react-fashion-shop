import React from "react";
import styles from "./CartButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartButton = props => (
  <button className={styles.button}>
    <span>Your Cart</span>
    <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
    <div className={styles.notification}>99</div>
  </button>
);

export default CartButton;
