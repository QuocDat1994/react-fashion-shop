import React from "react";
import styles from "./Overlay.module.css";

const Overlay = props => {
  const { isToggle, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={isToggle ? styles.overlay + " " + styles.open : styles.overlay}
    />
  );
};

export default Overlay;
