import React from "react";
import {
  ColorThumb as RACColorThumb,
  ColorThumbProps as TAriaColorThumbProps,
} from "react-aria-components";

import styles from "./colorThumb.module.scss";
import clsx from "clsx";

export type TColorThumbProps = TAriaColorThumbProps & {};

export const ColorThumb = (props: TColorThumbProps) => {
  return <RACColorThumb {...props} className={clsx(styles["root"])} />;
};
