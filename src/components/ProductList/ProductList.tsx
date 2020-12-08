import { Col, Row } from "antd";
import React from "react";

import { IBasicProps } from "../../interfaces/IBasicProps";
import { IProduct } from "../../interfaces/IProduct";
import { ProductCard } from "../ProductCard/ProductCard";

import "./ProductList.less";

interface IProps extends IBasicProps {}

export const ProductList = (props: IProps) => {
  const list = [1, 2, 3, 4, 5, 6];

  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias tempore odio, consectetur dolorem quam ut. Quibusdam, distinctio quae praesentium alias, nihil porro eius quam itaque voluptatem accusamus deserunt pariatur sint?";

  const product: IProduct = {
    id: (Math.random() * 100).toString(),
    image:
      "https://preview.colorlib.com/theme/littlecloset/images/product_7.jpg",
    name: "Cool Clothing with Brown Stripes",
    category: "Woman",
    rating: 4.5,
    review: 412,
    price: 3.99,
    size: ["S", "M", "L", "XL"],
    desc: desc,
  };

  return (
    <div style={{ paddingTop: 8 }}>
      <Row gutter={[24, 24]} justify="center">
        {list.map((i) => (
          <Col key={i} xs={24} sm={18} md={12} lg={8}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
