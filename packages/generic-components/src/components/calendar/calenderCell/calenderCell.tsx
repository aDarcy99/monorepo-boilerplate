import React from "react";
// Components
import {
  CalendarCell as RACCalendarCell,
  CalendarCellProps as TAriaCalendarCellProps,
} from "react-aria-components";
// Styles
import styles from "./calenderCell.module.scss";
import { Button } from "../../button/button";

export type TCalendarCellProps = TAriaCalendarCellProps & {};

export const CalendarCell = ({ children, ...props }: TCalendarCellProps) => {
  return (
    <RACCalendarCell {...props} className={styles["root"]}></RACCalendarCell>
  );
};
