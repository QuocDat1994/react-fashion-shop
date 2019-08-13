import React from "react";
import styles from "./ToggleButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const ToggleButton = props => (
  <div className={styles.toggleBtn} onClick={props.onClick}>
    <FontAwesomeIcon icon={faBars} />
  </div>
);

export default ToggleButton;
