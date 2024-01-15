import { DatePicker } from "antd";
import classNames from "classnames";
import { DEFAULT_DATE_FORMAT } from "constants/const";
import moment from "moment";
import React from "react";
import { FC } from "react";
import FloatLabel from "./FloatLabel";

type Props = {
  label: string;
  name: string;
  value?: moment.Moment | string;
  className?: string;
  onChange?: (date: any, dateString: string) => void;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  allowClear?: boolean;
  disabled?: boolean;
  format?: string;
  picker?: "time" | "date" | "week" | "month" | "quarter" | "year";
  disabledDate?: any;
};

const CustomDatePicker: FC<Props> = ({
  label,
  value,
  name,
  className,
  format,
  ...props
}) => {
  const valueToMoment = value
    ? typeof value === "string"
      ? moment(value, format || DEFAULT_DATE_FORMAT)
      : value
    : undefined;

  return (
    <FloatLabel
      label={label}
      value={
        value
          ? typeof value === "string"
            ? value
            : moment(value, format || DEFAULT_DATE_FORMAT).format(
                format || DEFAULT_DATE_FORMAT
              )
          : ""
      }
      className="form-item-float-label flex-1"
    >
      <DatePicker
        name={name}
        //suffixIcon={deleteIcon}
        defaultValue={valueToMoment}
        value={valueToMoment}
        format={format || DEFAULT_DATE_FORMAT}
        className={classNames(
          "border-none bg-transparent outline-none h-full pt-[22px] pb-0 w-full rounded-lg",
          className
        )}
        {...props}
        placeholder=""
      />
    </FloatLabel>
  );
};

export default CustomDatePicker;
