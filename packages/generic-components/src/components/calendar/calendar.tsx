import React from "react";
import {
  Calendar as RACCalendar,
  CalendarProps as TAriaCalendarProps,
  DateValue,
} from "react-aria-components";
// Functions
import clsx from "clsx";
// Components
import { Text } from "../text/text";
import { Button } from "../button/button";
import { CalendarGrid } from "./calenderGrid/calenderGrid";
import { CalendarCell } from "./calenderCell/calenderCell";
// Assets
import * as Icons from "../../assets/icons";
// Styles
import styles from "./calendar.module.scss";

export type TCalendarProps<T extends DateValue> = TAriaCalendarProps<T> & {
  errorMessage?: string;
};

export const Calendar = <T extends DateValue>({
  errorMessage,
  ...props
}: TCalendarProps<T>) => {
  return (
    <RACCalendar {...props} className={clsx(styles["root"])}>
      <header>
        <Button slot="previous" size="md" iconOnly>
          <Icons.ChevronLeft />
        </Button>
        <Text type="heading" />
        <Button slot="next" size="md" iconOnly>
          <Icons.ChevronRight />
        </Button>
      </header>
      <CalendarGrid className={styles["grid"]}>
        {(date) => <CalendarCell date={date} />}
      </CalendarGrid>
      {errorMessage && (
        <Text type="body" slot="errorMessage">
          {errorMessage}
        </Text>
      )}
    </RACCalendar>
  );
};
