import React from "react";
import {
  ColorArea as RACColorArea,
  ColorAreaProps as TAriaColorAreaProps,
} from "react-aria-components";

import { ColorThumb } from "../colorThumb/colorThumb";
import styles from "./colorArea.module.scss";
import clsx from "clsx";

export type TColorAreaProps = TAriaColorAreaProps & {};

export const ColorArea = (props: TColorAreaProps) => {
  return (
    <RACColorArea {...props} className={clsx(styles["root"])}>
      <ColorThumb />
    </RACColorArea>
  );
};
