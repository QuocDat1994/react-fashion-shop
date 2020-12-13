import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { IBasicProps } from "../../interfaces/IBasicProps";

import "./CategorySorting.less";

interface IProps extends IBasicProps {}

export const CategorySorting = (props: IProps) => {
  const menu = (
    <Menu>
      <Menu.Item>Default</Menu.Item>
      <Menu.Item>Name</Menu.Item>
      <Menu.Item>Price</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown className="category-sorting" overlay={menu}>
      <div>
        Default Sorting <DownOutlined />
      </div>
    </Dropdown>
  );
};
