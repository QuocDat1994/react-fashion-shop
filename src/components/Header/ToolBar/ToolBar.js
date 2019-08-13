import React from "react";
import styles from "./ToolBar.module.css";

import NavBar from "./NavBar/NavBar";
import SearchBar from "./SearchBar/SearchBar";
import UserButton from "./UserButton/UserButton";
import CartButton from "./CartButton/CartButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const ToolBar = props => (
  <section
    className={
      props.isToggle ? styles.toolbar + " " + styles.open : styles.toolbar
    }
  >
    <NavBar />
    <SearchBar />
    {/* <UserButton /> */}
    <CartButton />
    {/* <FontAwesomeIcon icon={faPhoneVolume} />
    <span>+84 37 955 7887</span> */}
  </section>
);

export default ToolBar;
