import React from "react";
import { Button, Carousel, Col, Row, Typography } from "antd";

import "./HomeCarousel.less";
import { ProductCard } from "../ProductCard/ProductCard";
import { IProduct } from "../../interfaces/IProduct";
import { BlurBackground } from "../BlurBackground/BlurBackground";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const HomeCarousel = () => {
  const props = {
    autoplay: false,
    className: "home-carousel",
  };

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
    desc: "dasasa",
  };

  const carousel: any = React.useRef(null);

  const CarouselItem = () => {
    const { Title } = Typography;

    const nextItem = () => {
      carousel.current.next();
    };
    const prevItem = () => {
      carousel.current.next();
    };

    return (
      <div className="home-carouse__item">
        <Button
          className="item__button item__button--left"
          icon={<LeftOutlined />}
          onClick={prevItem}
        />
        <Button
          className="item__button item__button--right"
          icon={<RightOutlined />}
          onClick={nextItem}
        />
        <BlurBackground image={product.image} />
        <Row justify="center">
          <Col span={24}>
            <Title className="item__heading">Trendsetters</Title>
            <Title className="item__sub-heading" level={2}>
              Summer Wear
            </Title>
          </Col>
        </Row>
        <Row align="middle" gutter={24} justify="center">
          <Col xs={0} sm={0} md={6} lg={5}>
            <img className="item-image" src={product.image} alt="" />
          </Col>
          <Col xs={20} sm={12} md={8} lg={8} xl={6}>
            <ProductCard product={product} />
          </Col>
          <Col xs={0} sm={0} md={6} lg={5}>
            <img className="item-image" src={product.image} alt="" />
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <Carousel {...props} ref={carousel}>
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </Carousel>
  );
};
