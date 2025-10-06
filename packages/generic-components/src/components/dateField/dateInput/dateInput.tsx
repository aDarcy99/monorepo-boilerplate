import React, { ReactNode, useState } from "react";
// Functions
import clsx from "clsx";
// Components
import {
  DateInput as RACDateInput,
  DateInputProps as TAriaDateInputProps,
} from "react-aria-components";
// Styles
import styles from "./dateInput.module.scss";
import { useFocusWithin } from "react-aria";

export type TDateInputProps = TAriaDateInputProps & {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

export const DateInput = ({
  startAdornment,
  endAdornment,
  ...props
}: TDateInputProps) => {
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const { focusWithinProps } = useFocusWithin({
    onFocusWithinChange: (isFocusWithin) => setIsFocusWithin(isFocusWithin),
  });

  return (
    <div
      {...(isFocusWithin && { "data-focused": true })}
      {...focusWithinProps}
      className={clsx(styles["root"])}
    >
      {startAdornment}
      <RACDateInput {...props} className={clsx(styles["input"])} />
      {endAdornment}
    </div>
  );
};
