import React from "react";

import styles from "./Product.module.css";

import ProductName from "./ProductName/ProductName";
import ProductCategory from "./ProductCategory/ProductCategory";
import ProductRating from "./ProductRating/ProductRating";
import ProductPrice from "./ProductPrice/ProductPrice";
import ButtonGroup from "./ButtonGroup/ButtonGroup";

const Product = props => {
  return (
    <div className={styles.container}>
      <img src="https://colorlib.com/preview/theme/littlecloset/images/product_1.jpg" />
      <div className={styles.info}>
        <div className={styles.left}>
          <ProductName name={"Cool Clothing with"} />
          <ProductCategory />
        </div>
        <div className={styles.right}>
          <ProductRating rating={4.5} />
          <ProductPrice price={4.99} />
        </div>
        <div className={styles.bottom}>
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
};

export default Product;
