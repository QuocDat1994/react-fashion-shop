import React from "react";
import styles from "./ButtonGroup.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ButtonGroup = props => (
  <div className={styles.group}>
    <div className={styles.button}>
      <FontAwesomeIcon icon={faHeart} />
    </div>
    <div className={styles.button}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  </div>
);

export default ButtonGroup;
