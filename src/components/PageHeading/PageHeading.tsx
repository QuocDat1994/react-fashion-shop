import React from "react";
import { Typography, Breadcrumb } from "antd";

import { IBasicProps } from "../../interfaces/IBasicProps";

import "./PageHeading.less";

interface IProps extends IBasicProps {
  title: string;
  menu: string[];
  type?: "default" | "section";
}

export const PageHeading = (props: IProps) => {
  const { Title } = Typography;
  const { title, menu, type } = props;

  return (
    <div
      className={`page-heading ${
        type === "section" ? "page-heading--section" : ""
      }`}
    >
      <Title className="page-heading__title">{title}</Title>
      <Breadcrumb className="page-heading__breadcrumb">
        {menu.map((item) => (
          <Breadcrumb.Item>{item}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};
