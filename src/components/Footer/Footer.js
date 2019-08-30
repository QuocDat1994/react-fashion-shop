import React from "react";
import styles from "./Footer.module.css";

import SupportNavItem from "./SupportNavItem/SupportNavItem";
import SocialIcon from "./SocialIcon/SocialIcon";

import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <section className={styles.about}>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
        <section className={styles.support}>
          <h1>Support</h1>
          <ul>
            <SupportNavItem text="Customer Service" />
            <SupportNavItem text="Return Policy" />
            <SupportNavItem text="Terms and Conditions" />
            <SupportNavItem text="Contact" />
          </ul>
        </section>
        <section className={styles.social}>
          <h1>Social</h1>
          <SocialIcon href="#" icon={faFacebookF} />
          <SocialIcon href="#" icon={faYoutube} />
          <SocialIcon href="#" icon={faInstagram} />
          <SocialIcon href="#" icon={faTwitter} />
        </section>
      </div>
      <div className={styles.copyright}>
        <p>
          Copyright ©2019 | Original template by Colorlib |
          Recreated by me : )
        </p>
      </div>
    </footer>
  );
};

export default Footer;
