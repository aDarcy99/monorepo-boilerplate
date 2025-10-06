import React, { ReactNode } from "react";
// Components
import { Group, TGroupProps } from "../group/group";
// Styles
import styles from "./buttonGroup.module.scss";
import clsx from "clsx";

type TButtonGroupProps = TGroupProps & {
  children?: ReactNode;
};

export const ButtonGroup = ({ children, ...props }: TButtonGroupProps) => {
  return (
    <Group {...props} className={clsx(styles["root"], props.className)}>
      {children}
    </Group>
  );
};
