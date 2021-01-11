import React from "react";
import { Col, Row, Image, Space } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { Container } from "../../components/Container/Container";
import { PageHeading } from "../../components/PageHeading/PageHeading";
import { ProductPrice } from "../../components/ProductPrice/ProductPrice";
import { ProductRating } from "../../components/ProductRating/ProductRating";
import { ProductSize } from "../../components/ProductSize/ProductSize";
import { ProductButton } from "../../components/ProductButton/ProductButton";
import { ProductName } from "../../components/ProductName/ProductName";
import { FeatureCard } from "../../components/FeatureCard/FeatureCard";

import "./Product.less";

export const Product = () => {
  const handleClick = () => {};

  return (
    <section className="product">
      <PageHeading
        type="section"
        title="Product Page"
        menu={["Home", "Woman", "New Products"]}
      />
      <Container>
        <Space direction="vertical" size="large">
          <Row justify="center" gutter={[24, 24]}>
            <Col xs={24} md={12} lg={9}>
              <Image src="https://preview.colorlib.com/theme/littlecloset/images/product_image_1.jpg" />
            </Col>
            <Col xs={24} md={12} lg={9}>
              <Space direction="vertical" size="large">
                <ProductName
                  name="Clothing with Brown Stripes"
                  category={"Woman"}
                />

                <Space size="large">
                  <ProductRating className="product__rating" rating={3} />
                  <div className="product__review">
                    4.7 out of (3514) Reviews
                  </div>
                </Space>

                <ProductPrice
                  className="product__price"
                  price={12}
                  size="large"
                />

                <ProductSize sizes={["S", "M", "L"]} />

                <p className="product__description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Excepturi qui ullam perspiciatis repudiandae cumque a at eaque
                  eum, voluptatem ut culpa. Accusamus libero doloremque animi
                  vero velit alias nihil eum?
                </p>

                <Row className="product__btn-group">
                  <Col className="product__btn" span={12}>
                    <ProductButton
                      icon={<HeartOutlined />}
                      onClick={handleClick}
                    />
                  </Col>
                  <Col className="product__btn" span={12}>
                    <ProductButton
                      icon={<ShoppingCartOutlined />}
                      onClick={handleClick}
                    />
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>
          <Row justify="center" gutter={[24, 24]}>
            <Col xs={24} lg={9}>
              <FeatureCard
                icon="https://preview.colorlib.com/theme/littlecloset/images/boxes_1.png"
                title="Size Guide"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </Col>
            <Col xs={24} lg={9}>
              <FeatureCard
                icon="https://preview.colorlib.com/theme/littlecloset/images/icon_3.svg"
                title="Shipping"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </Col>
          </Row>
        </Space>
      </Container>
    </section>
  );
};
