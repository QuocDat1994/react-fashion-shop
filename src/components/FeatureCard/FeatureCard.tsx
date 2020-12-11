import React from "react";
import { Avatar, Card } from "antd";

import "./FeatureCard.less";
import { IBasicProps } from "../../interfaces/IBasicProps";

interface IProps extends IBasicProps {
  icon: string;
  title: string;
  type?: "primary" | "";
}

export const FeatureCard = (props: IProps) => {
  const { className, icon, title, type } = props;
  const { Meta } = Card;

  return (
    <Card
      className={`feature-card ${className} ${
        type === "primary" ? "feature-card--primary" : "feature-card--default"
      }`}
    >
      <Meta avatar={<Avatar shape="square" src={icon} />} title={title} />
    </Card>
  );
};
