'use client'
import { Input } from "antd";
import classNames from "classnames";
import React, { useState } from "react";
import { FC } from "react";
import FloatLabel from "./FloatLabel";

type Props = {
  label?: string;
  name?: string;
  value?: string;
  className?: string;
  onChange?: ((e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | undefined) => void) | undefined
  placeholder?: string;
  type?: string;
  allowClear?: boolean;
};

const CustomTextArea: FC<Props> = ({
  label,
  value,
  name,
  type = "text",
  // autoComplete = "off",
  className,
  // invalid,
  ...props
}) => {
    const { TextArea } = Input;

  const [isTextSearch, setIsTextSearch] = useState(false);
  return (
    <>
      {/* <FloatLabel
        label={label}
        value={value}
        disabled={props.disabled}
        className={`${
          invalid === true
            ? "border-x border-y border-red_500"
            : "border-ink200"
        } form-item-float-label flex-1 ${props.disabled ? "text-ink300" : ""}`}
      > */}
        <FloatLabel label={label || ""} value={value}>
        <TextArea rows={4} placeholder="" cols={6} {...props}/>
      </FloatLabel>
    </>
  );
};

export default CustomTextArea;
