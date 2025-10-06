import React from "react";
import {
  Switch as RACSwitch,
  SwitchProps as TAriaSwitchProps,
} from "react-aria-components";
import type { ReactNode } from "react";

import styles from "./switch.module.scss";
import clsx from "clsx";

export type TSwitchProps = Omit<TAriaSwitchProps, "children"> & {
  children: ReactNode;
};

export const Switch = ({ children, ...props }: TSwitchProps) => {
  return (
    <RACSwitch {...props} className={clsx(styles["root"])}>
      <div className={styles["indicator"]} />
      {children}
    </RACSwitch>
  );
};
