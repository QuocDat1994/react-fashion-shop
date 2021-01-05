import { Input, Radio } from "antd";
import React from "react";
import { getDisplayBillValue, getTotalBill } from "../../utils/index";

import { IBasicProps } from "../../interfaces/IBasicProps";

import "./CartBox.less";

interface IProps extends IBasicProps {}

interface IInputProps extends IBasicProps {
  placeholder?: string;
}

interface IHeadingProps extends IBasicProps {
  heading: string;
}

interface IDescriptionProps extends IBasicProps {}

interface IRadioGroupProps extends IBasicProps {
  radios: Array<{
    label: string;
    value: string;
  }>;
}

interface IBillProps extends IBasicProps {
  bills: Array<{
    label: string;
    value: string;
  }>;
}

export const CartBox = (props: IProps) => {
  const { children } = props;

  return <div className="cart-box">{children}</div>;
};

export const CartBoxHeading = (props: IHeadingProps) => {
  const { heading } = props;

  return <h1 className="cart-box__heading">{heading}</h1>;
};

export const CartBoxDescription = (props: IDescriptionProps) => {
  const { children } = props;

  return <p className="cart-box__description">{children}</p>;
};

export const CartBoxRadioGroup = (props: IRadioGroupProps) => {
  const { radios } = props;

  return (
    <Radio.Group className="cart-box-radio-group">
      {radios.map((radio) => (
        <Radio value={radio.label + radio.value} className="cart-box-radio">
          <span className="cart-box-radio__label">{radio.label}</span>
          <span className="cart-box-radio__value">
            {getDisplayBillValue(radio.value)}
          </span>
        </Radio>
      ))}
    </Radio.Group>
  );
};

export const CartBoxBill = (props: IBillProps) => {
  const { bills } = props;

  return (
    <>
      {bills.map((bill) => (
        <div className="cart-box__bill">
          <span className="cart-box-bill__label">{bill.label}</span>
          <span className="cart-box-bill__value">
            {getDisplayBillValue(bill.value)}
          </span>
        </div>
      ))}
      <div className="cart-box__bill">
        <span className="cart-box-bill__label">Total</span>
        <span className="cart-box-bill__value">
          ${getTotalBill(bills.map((bill) => bill.value))}
        </span>
      </div>
    </>
  );
};

export const CartBoxInput = (props: IInputProps) => {
  const { placeholder = "" } = props;

  return (
    <Input size="large" className="cart-box__input" placeholder={placeholder} />
  );
};
