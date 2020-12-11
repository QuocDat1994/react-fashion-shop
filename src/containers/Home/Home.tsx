import { Row } from "antd";
import React from "react";
import { HomeFeatures } from "../../components/HomeFeatures/HomeFeatures";
import { ProductList } from "../../components/ProductList/ProductList";

import "./Home.less";

export const Home = () => {
  return (
    <div>
      <Row>
        <ProductList />
      </Row>
      <Row justify="center">
        <HomeFeatures />
      </Row>
    </div>
  );
};
