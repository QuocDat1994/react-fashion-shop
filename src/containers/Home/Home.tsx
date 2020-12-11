import React from "react";
import { Container } from "../../components/Container/Container";
import { HomeCollections } from "../../components/HomeCollections/HomeCollections";
import { HomeFeatures } from "../../components/HomeFeatures/HomeFeatures";
import { ProductList } from "../../components/ProductList/ProductList";

import "./Home.less";

export const Home = () => {
  return (
    <section className="home">
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
