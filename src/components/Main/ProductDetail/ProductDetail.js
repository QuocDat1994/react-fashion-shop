import React from "react";

import styles from "./ProductDetail.module.css";

import ProductName from "../Product/ProductName/ProductName";
import ProductRating from "../Product/ProductRating/ProductRating";
import ProductCategory from "../Product/ProductCategory/ProductCategory";
import ProductPrice from "../Product/ProductPrice/ProductPrice";
import ButtonGroup from "../Product/ButtonGroup/ButtonGroup";
import ProductSize from "./ProductSize/ProductSize";

const ProductDetail = props => (
  <section className={styles.container}>
    <img src="https://colorlib.com/preview/theme/littlecloset/images/product_1.jpg" />
    <section className={styles.detail}>
      <ProductName name="Cool Clothing with Brown Stripes" style="large" />
      <ProductCategory style="large" />
      <ProductRating rating={4.5} style="large" />
      <ProductPrice price={4.99} style="large" />
      <ProductSize></ProductSize>
      <div className={styles.info}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
        consequat lorem. Maecenas elementum at diam consequat bibendum. Mauris
        iaculis fringilla ex, sit amet semper libero facilisis sit amet. Nunc ut
        aliquet metus. Praesent pulvinar justo sed velit tempus bibendum.
        Quisque dictum lorem id mi viverra, in auctor justo laoreet. Nam at
        massa malesuada, ullamcorper metus vel, consequat risus. Phasellus
        ultricies velit vel accumsan porta.
      </div>
      <ButtonGroup isLarge={true} />
    </section>
  </section>
);

export default ProductDetail;
