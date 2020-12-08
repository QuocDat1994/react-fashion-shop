import React from "react";
import { Typography } from "antd";

import { IBasicProps } from "../../interfaces/IBasicProps";

import "./ProductPrice.less";

interface IProps extends IBasicProps {
  price: number;
}

export const ProductPrice = (props: IProps) => {
  const { className = "" } = props;
  const { Text } = Typography;

  return (
    <Text className={`product-price ${className}`} strong>
      $3<span className="product-price__minor">.99</span>
    </Text>
  );
};
