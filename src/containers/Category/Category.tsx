import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

import { fetchProductsByCategory } from "../../store/slices/productsSlice";

import { CategoryMenu } from "../../components/CategoryMenu/CategoryMenu";
import { CategorySorting } from "../../components/CategorySorting/CategorySorting";
import { Container } from "../../components/Container/Container";
import { PageHeading } from "../../components/PageHeading/PageHeading";
import { ProductList } from "../../components/ProductList/ProductList";

import "./Category.less";

export const Category = () => {
  let { category } = useParams<{ category: string }>();

  const productList = useAppSelector((state) => state.products.productList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsByCategory(category));
  }, [category, dispatch]);

  return (
    <section className="category">
      <PageHeading type="section" title="Category Page" menu={[category]} />
      <Container className="category__controls">
        <CategoryMenu />
        <CategorySorting />
      </Container>

      <Container>
        <ProductList productList={productList} />
      </Container>
    </section>
  );
};
