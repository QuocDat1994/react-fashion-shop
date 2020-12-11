import React from "react";

import "./Container.less";
import { IBasicProps } from "../../interfaces/IBasicProps";

interface IProps extends IBasicProps {
  fluid?: boolean;
}

export const Container = (props: IProps) => {
  const { children, fluid } = props;

  return (
    <div className={`container ${fluid ? "container--fluid" : ""}`}>
      {children}
    </div>
  );
};
