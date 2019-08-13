import React from "react";

import styles from "./ProductRating.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";

const ProductRating = props => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const diff = props.rating - i;

    if (diff > 1) {
      stars.push(<FontAwesomeIcon icon={faStar} />);
    } else if (diff >= 0.5) {
      stars.push(<FontAwesomeIcon icon={faStarHalfAlt} />);
    } else {
      stars.push(<FontAwesomeIcon icon={faEmptyStar} />);
    }
  }

  return <div className={styles.rating}>{stars.map(star => star)}</div>;
};

export default ProductRating;
