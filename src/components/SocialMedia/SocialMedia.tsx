import React from "react";
import { Button, Row, Space } from "antd";

import {
  YoutubeFilled,
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
} from "@ant-design/icons";

import "./SocialMedia.less";

export const SocialMedia = () => {
  return (
    <Row align="middle" className="social-media">
      <Space size="middle">
        <Button
          className="social-media__btn"
          shape="circle"
          icon={<FacebookFilled />}
        />
        <Button
          className="social-media__btn"
          shape="circle"
          icon={<YoutubeFilled />}
        />
        <Button
          className="social-media__btn"
          shape="circle"
          icon={<TwitterCircleFilled />}
        />
        <Button
          className="social-media__btn"
          shape="circle"
          icon={<InstagramFilled />}
        />
      </Space>
    </Row>
  );
};
