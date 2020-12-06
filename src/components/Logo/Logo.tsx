import React from "react";
import { Row } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";

import "./Logo.less";

export const Logo = (props: any) => {
  const { className = "" } = props;

  return (
    <div className={`logo ${className}`}>
      <Row align="middle">
        <ShoppingOutlined className="logo__icon" />
        <div className="logo__text">Fashion Shop</div>
      </Row>
    </div>
  );
};
