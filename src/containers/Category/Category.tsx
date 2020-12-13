import React from "react";
import { CategoryMenu } from "../../components/CategoryMenu/CategoryMenu";
import { CategorySorting } from "../../components/CategorySorting/CategorySorting";
import { Container } from "../../components/Container/Container";
import { PageHeading } from "../../components/PageHeading/PageHeading";
import { ProductList } from "../../components/ProductList/ProductList";

import "./Category.less";

export const Category = () => {
  return (
    <section className="category">
      <PageHeading
        type="section"
        title="Category Page"
        menu={["Home", "Woman", "New Products"]}
      />
      <Container className="category__controls">
        <CategoryMenu />
        <CategorySorting />
      </Container>

      <Container>
        <ProductList />
      </Container>
    </section>
  );
};
