import React from "react";
// Components
import {
  RadioProps as TAriaRadioProps,
  Radio as RACRadio,
} from "react-aria-components";
// Styles
import styles from "./radio.module.scss";

export type TRadioProps = TAriaRadioProps & {};

export const Radio = (props: TRadioProps) => {
  return <RACRadio {...props} className={styles["root"]} />;
};
