import React from "react";
import {
  DateValue,
  Heading,
  RangeCalendar as RACRangeCalendar,
  RangeCalendarProps as TAriaRangeCalendarProps,
} from "react-aria-components";
import { Button } from "../button/button";
import { Text } from "../text/text";

import styles from "./rangeCalendar.module.scss";
import clsx from "clsx";
import { CalendarGrid } from "../calendar/calenderGrid/calenderGrid";
import { CalendarCell } from "../calendar/calenderCell/calenderCell";
import * as Icons from "../../assets/icons";

export type TRangeCalendarProps<T extends DateValue> =
  TAriaRangeCalendarProps<T> & {
    errorMessage?: string;
  };

export const RangeCalendar = <T extends DateValue>({
  errorMessage,
  ...props
}: TRangeCalendarProps<T>) => {
  return (
    <RACRangeCalendar {...props} className={clsx(styles["root"])}>
      <header>
        <Button slot="previous" iconOnly>
          <Icons.ChevronLeft />
        </Button>
        <Heading />
        <Button slot="next" iconOnly>
          <Icons.ChevronRight />
        </Button>
      </header>
      <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </RACRangeCalendar>
  );
};
