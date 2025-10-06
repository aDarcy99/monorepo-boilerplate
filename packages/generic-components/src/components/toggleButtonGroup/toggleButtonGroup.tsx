import React from "react";
import {
  ToggleButtonGroup as RACToggleButtonGroup,
  ToggleButtonGroupProps as TAriaToggleButtonGroupProps,
} from "react-aria-components";

import styles from "./toggleButtonGroup.module.scss";
import clsx from "clsx";

export type TToggleButtonGroupProps = TAriaToggleButtonGroupProps & {};

export const ToggleButtonGroup = (props: TToggleButtonGroupProps) => {
  return (
    <RACToggleButtonGroup
      {...props}
      className={clsx(styles["root"], props.className)}
    />
  );
};
