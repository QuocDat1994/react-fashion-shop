import React from "react";
import { Typography } from "antd";
import { IBasicProps } from "../../interfaces/IBasicProps";
import "./ProductPrice.less";
import { getClassName } from "../../utils";

interface IProps extends IBasicProps {
  size?: "" | "large";
  price: number;
}

export const ProductPrice = (props: IProps) => {
  const { className = "", size = "" } = props;
  const { Text } = Typography;

  return (
    <Text
      className={`product-price ${className} 
      ${getClassName("product-price", size)}`}
      strong
    >
      $3<span className="product-price__minor">.99</span>
    </Text>
  );
};
