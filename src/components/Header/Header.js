import React from "react";
import styles from "./Header.module.css";

import ToolBar from "./ToolBar/ToolBar";
import Overlay from "./Overlay/Overlay";
import ToggleButton from "./ToggleButton/ToggleButton";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ isToggle: !this.state.isToggle });
  }

  render() {
    return (
      <header className={styles.header}>
        <section className={styles.logo}>
          <img src="/images/logo.webp" alt="logo" />
          <span>Fashion Shop</span>
        </section>
        <Overlay onClick={this.handleToggle} isToggle={this.state.isToggle} />
        <ToolBar isToggle={this.state.isToggle} />
        <ToggleButton
          onClick={this.handleToggle}
          isToggle={this.state.isToggle}
        />
      </header>
    );
  }
}

export default Header;
