import React from "react";
// Functions
import clsx from "clsx";
// Components
import {
  Group as RACGroup,
  GroupProps as TAriaGroupProps,
} from "react-aria-components";
// Styles
import styles from "./group.module.scss";

export type TGroupProps = TAriaGroupProps & {
  orientation?: "horizontal" | "vertical";
};

export const Group = ({ orientation, ...props }: TGroupProps) => {
  return (
    <RACGroup
      {...props}
      className={clsx(
        styles["root"],
        styles[`orientation--${orientation}`],
        props.className
      )}
    />
  );
};
