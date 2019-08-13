import React from "react";
import styles from "./SocialIcon.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = props => (
  <div className={styles.socialIcon}>
    <a href={props.href}>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  </div>
);

export default SocialIcon;
