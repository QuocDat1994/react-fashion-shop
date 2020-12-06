import React from "react";
import { Drawer } from "antd";

import "./HeaderDrawer.less";

export const HeaderDrawer = (props: any) => {
  const { children, onClose, visible } = props;

  return (
    <Drawer
      className="header-drawer"
      placement="left"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      {children}
    </Drawer>
  );
};
