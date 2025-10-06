import React from "react";
import {
  ProgressBar as RACProgressBar,
  ProgressBarProps as TAriaProgressBarProps,
} from "react-aria-components";

import styles from "./progressBar.module.scss";
import clsx from "clsx";
import { Text } from "../text/text";

export type TProgressBarProps = TAriaProgressBarProps & {
  label?: string;
};

export const ProgressBar = ({ label, ...props }: TProgressBarProps) => {
  return (
    <RACProgressBar {...props} className={clsx(styles["root"])}>
      {({ percentage, valueText }) => (
        <>
          <Text type="label" className={styles["header"]}>
            {label}
            <span className={styles["value"]}>{valueText}</span>
          </Text>

          <div className={styles["bar"]}>
            <div
              className={styles["fill"]}
              style={{ width: percentage + "%" }}
            />
          </div>
        </>
      )}
    </RACProgressBar>
  );
};
