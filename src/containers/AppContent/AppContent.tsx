import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import { Home } from "../Home/Home";
import { Cart } from "../Cart/Cart";
import { Category } from "../Category/Category";
import { Product } from "../Product/Product";
import { Checkout } from "../Checkout/Checkout";

import "./AppContent.less";

export const AppContent = () => {
  const { Content } = Layout;

  return (
    <Content className="app-content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Content>
  );
};
