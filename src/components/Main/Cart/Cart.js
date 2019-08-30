import React from "react";
import styles from "./Cart.module.css";

const Cart = props => (
  <div className={styles.cart}>
    <div className={styles.heading}>
      <h2>Shopping Cart</h2>
    </div>
    <div className={styles.container}>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th></th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className={styles.product}>
                <img
                  src="https://colorlib.com/preview/theme/littlecloset/images/product_1.jpg"
                  width="50px"
                ></img>
                <a href="#">Cool Flufy Clothing without Stripes</a>
              </td>
              <td>L</td>
              <td>$3.99</td>
              <td>2</td>
              <td>$3.99</td>
            </tr>
            <tr>
              <td>1</td>
              <td className={styles.product}>
                <img
                  src="https://colorlib.com/preview/theme/littlecloset/images/product_1.jpg"
                  width="50px"
                ></img>
                <a href="#">Cool Flufy Clothing without Stripes</a>
              </td>
              <td>L</td>
              <td>$3.99</td>
              <td>2</td>
              <td>$3.99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <section className={styles.button_group}>
        <button className={styles.gray_btn}>Clear Cart</button>
        <button className={styles.green_btn}>Continue Shopping</button>
      </section>
      <div className={styles.payment}>
        <section className={styles.coupon_ship}>
          <section className={styles.coupon}>
            <h1>Coupon code</h1>
            <input></input>
            <button className={styles.green_btn}>Apply</button>
            <p>
              Phasellus sit amet nunc eros. Sed nec congue tellus. Aenean nulla
              nisl, volutpat blandit lorem ut.
            </p>
          </section>
          <section className={styles.shipping}>
            <h1>Shipping Method</h1>
            <ul>
              <li>
                <input type="radio" name="shipping"></input>
                <label>Next day delivery</label>
                <p>$4.99</p>
              </li>
              <li>
                <input type="radio" name="shipping"></input>
                <label>Standard delivery</label>
                <p>$1.99</p>
              </li>
              <li>
                <input type="radio" name="shipping"></input>
                <label>Personal Pickup</label>
                <p>FREE</p>
              </li>
            </ul>
          </section>
        </section>
        <section className={styles.checkout}>
          <h1>Cart Total</h1>
          <section className={styles.fee}>
            <section>
              <p>Subtotal</p>
              <p>$29.90</p>
            </section>
            <section>
              <p>Coupon</p>
              <p>N/A</p>
            </section>
            <section>
              <p>Shipping</p>
              <p>FREE</p>
            </section>
            <section>
              <p>Total</p>
              <p>$29.90</p>
            </section>
          </section>
          <button className={styles.green_btn}>Proceed to checkout</button>
        </section>
      </div>
    </div>
  </div>
);

export default Cart;
