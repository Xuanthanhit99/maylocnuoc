import { Select } from "antd";
import { DefaultOptionType } from "antd/lib/select";
import classNames from "classnames";
import React from "react";
import { FC } from "react";
import FloatLabel from "./FloatLabel";

type Props = {
  label: string;
  value?: any;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  allowClear?: boolean;
  showSearch?: boolean;
  disabled?: boolean;
  mode?: "multiple" | undefined;
  filterOption?: any;
  options?: DefaultOptionType[];
  loading?: boolean;
  children?: React.ReactNode;
};

const CustomSelect: FC<Props> = ({ label, value, className, ...props }) => {
  return (
    <FloatLabel
      label={label}
      value={value}
      className="form-item-float-label flex-1"
    >
      <Select
        value={value}
        className={classNames(
          "border-none bg-transparent outline-none h-full rounded-lg min-h-[56px] max-h-full w-full max-w-full",
          className
        )}
        {...props}
      >
        {props.children}
      </Select>
    </FloatLabel>
  );
};

export default CustomSelect;
