import React from "react";
import styles from "./Main.module.css";

import Home from "./Home/Home";
import Category from "./Category/Category";
import Product from "./Product/Product";
import { Route } from "react-router-dom";

const Main = () => {
  return (
    <main className={styles.main}>
      <Route exact path="/" component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/product" component={Product} />
    </main>
  );
};

export default Main;
