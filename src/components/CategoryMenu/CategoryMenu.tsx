import React from "react";
import { Menu } from "antd";
import { IBasicProps } from "../../interfaces/IBasicProps";

import "./CategoryMenu.less";

interface IProps extends IBasicProps {}

export const CategoryMenu = (props: IProps) => {
  return (
    <div className="category-menu">
      <Menu mode="horizontal">
        <Menu.Item>All</Menu.Item>
        <Menu.Item>Hot Products</Menu.Item>
        <Menu.Item>Sale Products</Menu.Item>
      </Menu>
    </div>
  );
};
