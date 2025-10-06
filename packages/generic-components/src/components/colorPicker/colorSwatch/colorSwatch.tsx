import React from "react";
import {
  ColorSwatch as RACColorSwatch,
  ColorSwatchProps as TAriaColorSwatchProps,
} from "react-aria-components";

import styles from "./colorSwatch.module.scss";
import clsx from "clsx";

export type TColorSwatchProps = TAriaColorSwatchProps & {};

export const ColorSwatch = (props: TColorSwatchProps) => {
  return (
    <RACColorSwatch
      {...props}
      className={clsx(styles["root"])}
      style={({ color }) => ({
        background: `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
      })}
    />
  );
};
