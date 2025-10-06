import React from "react";
// Functions
import clsx from "clsx";
// Components
import {
  Separator as RACSeparator,
  SeparatorProps as TAriaSeparatorProps,
} from "react-aria-components";
// Styles
import styles from "./separator.module.scss";

export type TSeparatorProps = TAriaSeparatorProps & {};

export const Separator = (props: TSeparatorProps) => {
  return (
    <RACSeparator
      {...props}
      className={clsx(styles["root"], props.className)}
    />
  );
};
