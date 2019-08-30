import React from "react";
import styles from "./Category.module.css";

import ProductList from "../ProductList/ProductList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const Category = props => (
  <div className={styles.category}>
    <div className={styles.heading}>
      <h1>Category Page</h1>
      <h2>Women</h2>
    </div>
    <div className={styles.container}>
      <section className={styles.toolbar}>
        <div className={styles.filter}>
          <ul>
            <li>All</li>
            <li>Hot Products</li>
            <li>New Products</li>
          </ul>
        </div>
        <div className={styles.sort}>
          <p>
            <span>Name</span>
            <FontAwesomeIcon icon={faCaretDown} className={styles.icon}/>
          </p>
          <ul>
            <li>Name</li>
            <li>Price</li>
            <li>Rating</li>
          </ul>
        </div>
      </section>
      <ProductList />
    </div>
  </div>
);

export default Category;
