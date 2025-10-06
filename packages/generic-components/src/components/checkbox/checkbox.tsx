import React from "react";
import {
  Checkbox as RACCheckbox,
  CheckboxProps as TAriaCheckboxProps,
} from "react-aria-components";
import type { ReactNode } from "react";

import styles from "./checkbox.module.scss";
import clsx from "clsx";
import * as Icons from "../../assets/icons";
import { Text } from "../text/text";

export type TCheckboxProps = Omit<TAriaCheckboxProps, "children"> & {
  children?: ReactNode;
  label?: ReactNode;
};

export const Checkbox = ({ children, label, ...props }: TCheckboxProps) => {
  return (
    <RACCheckbox {...props} className={clsx(styles["root"])}>
      <div className={styles["input"]}>
        <Icons.Check className={styles["check-icon"]} aria-hidden />
      </div>
      <Text type="label">{label}</Text>
    </RACCheckbox>
  );
};
