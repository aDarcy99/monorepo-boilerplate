import React from "react";
import {
  CalendarGrid as RACCalendarGrid,
  CalendarGridProps as TAriaCalendarGridProps,
} from "react-aria-components";

export type TCalendarGridProps = TAriaCalendarGridProps & {};
export const CalendarGrid = (props: TCalendarGridProps) => {
  return <RACCalendarGrid {...props} />;
};
