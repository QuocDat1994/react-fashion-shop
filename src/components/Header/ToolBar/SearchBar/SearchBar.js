import React from "react";
import styles from "./SearchBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = props => (
  <div className={styles.searchBar}>
    <div className={styles.container}>
      <input type="text" placeholder="Search Item" />
      <button className={styles.icon}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  </div>
);

export default SearchBar;
