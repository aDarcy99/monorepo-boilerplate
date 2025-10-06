import React, { ReactNode } from "react";
import {
  ColorPicker as RACColorPicker,
  ColorPickerProps as TAriaColorPickerProps,
} from "react-aria-components";
import { Dialog } from "../dialog/dialog";
import { Button } from "../button/button";
import { ColorSwatch } from "./colorSwatch/colorSwatch";
import { ColorSlider } from "./colorSlider/colorSlider";
import { ColorArea } from "./colorArea/colorArea";
import { ColorField } from "./colorField/colorField";
import { Popover } from "../popover/popover";

import styles from "./colorPicker.module.scss";
import clsx from "clsx";

export type TColorPickerProps = TAriaColorPickerProps & {
  label?: string;
  children?: ReactNode;
};

export const ColorPicker = ({
  label,
  children,
  ...props
}: TColorPickerProps) => {
  return (
    <RACColorPicker {...props}>
      <Dialog>
        <Button className="color-picker">
          <ColorSwatch />
          <span>{label}</span>
        </Button>
        <Popover
          shouldHideArrow
          placement="bottom start"
          className={clsx(styles["root"])}
        >
          {children || (
            <>
              <ColorArea
                colorSpace="hsb"
                xChannel="saturation"
                yChannel="brightness"
              />
              <ColorSlider colorSpace="hsb" channel="hue" />
              <ColorField label="Hex" />
            </>
          )}
        </Popover>
      </Dialog>
    </RACColorPicker>
  );
};
