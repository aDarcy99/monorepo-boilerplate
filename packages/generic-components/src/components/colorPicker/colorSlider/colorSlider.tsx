import React from "react";
import {
  ColorSlider as RACColorSlider,
  ColorSliderProps as TAriaColorSliderProps,
  SliderOutput,
  SliderTrack,
} from "react-aria-components";
import { ColorThumb } from "../colorThumb/colorThumb";
import styles from "./colorSlider.module.scss";
import clsx from "clsx";
import { Text } from "../../text/text";

export type TColorSliderProps = TAriaColorSliderProps & {
  label?: string;
};

export const ColorSlider = ({ label, ...props }: TColorSliderProps) => {
  return (
    <RACColorSlider {...props} className={clsx(styles["root"])}>
      <Text type="label">{label}</Text>
      <SliderOutput />
      <SliderTrack
        style={({ defaultStyle }) => ({
          background: `${defaultStyle.background},
            repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
        })}
      >
        <ColorThumb />
      </SliderTrack>
    </RACColorSlider>
  );
};
