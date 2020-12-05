import React from 'react';
import {Menu} from 'antd'
import {Link} from "react-router-dom";

import { Layout } from 'antd';

import "./AppHeader.less";

export const AppHeader = () => {
  const { Header} = Layout;

  return (
    <Header className="app-header">
      <Menu mode="horizontal">
        <Menu.Item key="app">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="app">
        <Link to="/cart">Cart</Link>
        </Menu.Item>
        <Menu.Item key="app">
        <Link to="/category">Category</Link>
        </Menu.Item>
        <Menu.Item key="app">
        <Link to="/product">Product</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}
