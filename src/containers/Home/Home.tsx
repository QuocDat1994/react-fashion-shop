import React from "react";
import { Container } from "../../components/Container/Container";
import { HomeCarousel } from "../../components/HomeCarousel/HomeCarousel";
import { HomeCollections } from "../../components/HomeCollections/HomeCollections";
import { HomeFeatures } from "../../components/HomeFeatures/HomeFeatures";
import { PageHeading } from "../../components/PageHeading/PageHeading";
import { ProductList } from "../../components/ProductList/ProductList";

import "./Home.less";

export const Home = () => {
  return (
    <section className="home">
      <HomeCarousel />
      <Container className="home__heading-container">
        <PageHeading
          title="Popular on Fashion Shop"
          menu={["Women", "Men", "Kids", "Home Deco"]}
        />
      </Container>
      <Container>
        <ProductList />
      </Container>
      <Container fluid>
        <HomeCollections />
      </Container>
      <Container>
        <HomeFeatures />
      </Container>
    </section>
  );
};
