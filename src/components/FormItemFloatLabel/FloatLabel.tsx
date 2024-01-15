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

  return (
    <div
      className={classNames(
        "relative min-w-[100px] rounded-lg border-ink200 h-14",
        disabled ? "border-none text-ink300" : "border bg-white",
        className
      )}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
      onClick={() => setFocus(true)}
    >
      {children}
      <label
        className={classNames(
          "absolute left-3 top-1/2 -translate-y-1/2 duration-200 ease-linear select-none pointer-events-none z-[1]",
          focus || (value && value.length !== 0)
            ? "top-2 text-xs translate-y-0 text-ink300"
            : "text-base text-ink400"
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatLabel;
