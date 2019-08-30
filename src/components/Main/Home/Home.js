import React from "react";

import styles from "./Home.module.css";

import Carousel from "./Carousel/Carousel";
import ProductList from "../ProductList/ProductList";

const Home = props => (
  <div>
    {/* <Carousel /> */}
    <div className={styles.container}>
      <h1 className={styles.heading}>Popular on Fashion Shop</h1>
      <ProductList />
    </div>
  </div>
);

export default Home;
