import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import { IBasicProps } from "../../interfaces/IBasicProps";

import "./HeaderMenu.less";

interface IProps extends IBasicProps {
  mode?: "vertical" | "horizontal" | "inline";
}

export const HeaderMenu = (props: IProps) => {
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
