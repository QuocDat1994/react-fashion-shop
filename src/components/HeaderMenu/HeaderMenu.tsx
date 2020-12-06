import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import "./HeaderMenu.less";

export const HeaderMenu = (props: any) => {
  const { mode = "horizontal" } = props;

  return (
    <div className="app-menu">
      <Menu mode={mode}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="cart">
          <Link to="/cart">Cart</Link>
        </Menu.Item>
        <Menu.Item key="category">
          <Link to="/category">Category</Link>
        </Menu.Item>
        <Menu.Item key="product">
          <Link to="/product">Product</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
