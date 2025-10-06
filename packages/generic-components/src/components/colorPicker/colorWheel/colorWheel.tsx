import React from "react";
import {
  ColorWheel as RACColorWheel,
  ColorWheelProps as TAriaColorWheelProps,
  ColorWheelTrack,
} from "react-aria-components";

import { ColorThumb } from "../colorThumb/colorThumb";

import styles from "./colorWheel.module.scss";
import clsx from "clsx";

export type TColorWheelProps = Omit<
  TAriaColorWheelProps,
  "outerRadius" | "innerRadius"
> & {};

export const ColorWheel = (props: TColorWheelProps) => {
  return (
    <RACColorWheel
      {...props}
      className={clsx(styles["root"])}
      outerRadius={100}
      innerRadius={74}
    >
      <ColorWheelTrack />
      <ColorThumb />
    </RACColorWheel>
  );
};
