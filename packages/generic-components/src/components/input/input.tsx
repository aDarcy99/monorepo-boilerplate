import React, { ReactNode, useState } from "react";
// Functions
import clsx from "clsx";
// Components
import {
  Input as RACInput,
  InputProps as TAriaInputProps,
} from "react-aria-components";
// Styles
import styles from "./input.module.scss";
import { useFocusWithin } from "react-aria";

export type TInputProps = TAriaInputProps & {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

export const Input = ({
  startAdornment,
  endAdornment,
  ...props
}: TInputProps) => {
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const { focusWithinProps } = useFocusWithin({
    onFocusWithinChange: (isFocusWithin) => setIsFocusWithin(isFocusWithin),
  });

  return (
    <div
      className={styles["root"]}
      {...(isFocusWithin && { "data-focused": true })}
      {...focusWithinProps}
    >
      {startAdornment}
      <RACInput {...props} className={clsx(styles["input"], props.className)} />
      {endAdornment}
    </div>
  );
};
