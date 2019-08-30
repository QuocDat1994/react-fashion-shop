import React from "react";
import styles from "./Main.module.css";

import Home from "./Home/Home";
import Category from "./Category/Category";
import ProductDetail from "./ProductDetail/ProductDetail";
import Cart from "./Cart/Cart";

import { Route } from "react-router-dom";

const Main = () => {
  return (
    <main className={styles.main}>
      <Route exact path="/" component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/product" component={ProductDetail} />
      <Route path="/cart" component={Cart} />
    </main>
  );
};

export default Main;
