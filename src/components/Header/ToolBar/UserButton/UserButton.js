import React from "react";
import styles from "./UserButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const UserButton = props => (
  <button className={styles.button}>
    <FontAwesomeIcon icon={faUser} className={styles.icon} />
  </button>
);

export default UserButton;
