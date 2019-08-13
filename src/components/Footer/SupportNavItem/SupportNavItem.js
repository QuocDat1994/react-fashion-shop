import React from "react";
import styles from "./SupportNavItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SupportNavItem = props => (
  <li className={styles.navItem}>
    <FontAwesomeIcon icon={faChevronRight} />
    <a href="#">{props.text}</a>
  </li>
);

export default SupportNavItem;
