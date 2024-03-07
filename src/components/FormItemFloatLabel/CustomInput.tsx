'use client'
import { Input } from "antd";
import classNames from "classnames";
import React, { useState } from "react";
import { FC } from "react";
import FloatLabel from "./FloatLabel";

type Props = {
  label: string;
  name: string;
  value?: string;
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  allowClear?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  autoComplete?: string;
  invalid?: boolean;
};

const CustomInput: FC<Props> = ({
  label,
  value,
  name,
  type = "text",
  autoComplete = "off",
  className,
  invalid,
  ...props
}) => {
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
        <FloatLabel label={label} value={value} className={`${
          invalid === true
            ? "border-x border-y border-red_500"
            : "border-ink200"
        } form-item-float-label flex-1 ${props.disabled ? "text-ink300" : ""}`}>
        <Input
          name={name}
          value={value}
          className={classNames(
            "border bg-transparent outline-none h-full pt-[30px] pb-0 rounded-lg max-h-full pl-3 ",
            className,
            props.disabled ? "text-ink300" : "",
            label == "Tìm kiếm" ? "relative" : ""
          )}
          {...props}
          type={type}
          autoComplete={autoComplete}
        />
        {label == "Tìm kiếm" ? (
          <>
            <img
              className="mx-auto absolute right-[25px] top-[50%] translate-y-[-50%] z-10"
              src="/icon/info-circle.svg"
              alt="logo"
              width={24}
              height={24}
              onClick={() => {
                setIsTextSearch(!isTextSearch);
              }}
            />
            {isTextSearch ? (
              <div className="bg-[#333333] rounded-lg z-10 w-[233px] h-24 text-white absolute right-0 top-[-103px] text-sm font-normal">
                <div className="p-2">
                  <p className="text-white px-2 text-sm font-normal">
                    Có thể tìm kiếm theo
                  </p>
                  <ul className="list-disc m-2">
                    <li className="mx-2 text-sm font-normal">
                      Số hợp đồng,số hợp đồng Core
                    </li>
                    <li className="mx-2 text-sm font-normal">
                      Số GCN, Tên, SĐT, Email, Số giấy tờ KH
                    </li>
                  </ul>
                </div>
                <div className="arrow-down"></div>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </FloatLabel>
    </>
  );
};

export default CustomInput;
