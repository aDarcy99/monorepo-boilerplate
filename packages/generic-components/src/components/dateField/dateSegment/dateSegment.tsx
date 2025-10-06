import React from "react";
// Components
import {
  DateSegment as RACDateSegment,
  DateSegmentProps as TAriaDateSegmentProps,
} from "react-aria-components";
import styles from "./dateSegment.module.scss";

type TDateSegment = TAriaDateSegmentProps & {};

export const DateSegment = (props: TDateSegment) => {
  return <RACDateSegment {...props} className={styles["root"]} />;
};
