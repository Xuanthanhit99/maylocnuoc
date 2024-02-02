import classNames from "classnames";
import { FC } from "react";
import { useState } from "react";

type Props = {
  label: string;
  value?: string;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
};

const FloatLabel: FC<Props> = ({
  label,
  value,
  className,
  disabled,
  children,
}) => {
  const [focus, setFocus] = useState(false);

  const labelClass =
  focus || (value && value.length !== 0) ? "label label-float" : "label !top-0";


  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {children}
      <label className={labelClass}>{label}</label>
    </div>
  );
};

export default FloatLabel;
