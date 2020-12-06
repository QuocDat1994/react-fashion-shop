import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "./HeaderSearch.less";

export const HeaderSearch = (props: any) => {
  const { className = "" } = props;

  return (
    <Input
      className={`header__search ${className}`}
      allowClear
      placeholder="Search Item"
      suffix={<SearchOutlined onClick={() => alert("dsadasd")} />}
    />
  );
};
