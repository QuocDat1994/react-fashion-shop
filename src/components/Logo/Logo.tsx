import React from "react";
import { Row } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";

import { IBasicProps } from "../../interfaces";

import "./Logo.less";

interface IProps extends IBasicProps {}

export const Logo = (props: IProps) => {
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
