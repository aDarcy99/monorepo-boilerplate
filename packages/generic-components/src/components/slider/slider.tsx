import React from "react";
import {
  Slider as RACSlider,
  SliderOutput,
  SliderProps as TAriaSliderProps,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";

import styles from "./slider.module.scss";
import clsx from "clsx";
import { Text } from "../text/text";

export type TSliderProps<T> = TAriaSliderProps<T> & {
  label?: string;
  thumbLabels?: string[];
};

export const Slider = <T extends number | number[]>({
  label,
  thumbLabels,
  ...props
}: TSliderProps<T>) => {
  return (
    <RACSlider {...props} className={clsx(styles["root"])}>
      <div className={styles["header"]}>
        {label && <Text type="label">{label}</Text>}
        <SliderOutput className={styles["output"]}>
          {({ state }) =>
            state.values.map((_, i) => state.getThumbValueLabel(i)).join(" - ")
          }
        </SliderOutput>
      </div>
      <SliderTrack className={styles["track"]}>
        {({ state }) =>
          state.values.map((_, i) => (
            <SliderThumb
              className={styles["thumb"]}
              key={i}
              index={i}
              aria-label={thumbLabels?.[i]}
            />
          ))
        }
      </SliderTrack>
    </RACSlider>
  );
};
