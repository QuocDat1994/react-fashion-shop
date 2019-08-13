import React from "react";
import styles from "./Main.module.css";

import Home from "./Home/Home";
import Category from "./Category/Category";
import { Route } from "react-router-dom";

const Main = () => {
  return (
    <main className={styles.main}>
      <Route exact path="/" component={Home} />
      <Route path="/category" component={Category} />
    </main>
  );
};

export default Main;
