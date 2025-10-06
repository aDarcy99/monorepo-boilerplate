import React from "react";
import {
  DateRangePicker as RACDateRangePicker,
  DateRangePickerProps as TAriaDateRangePickerProps,
  DateValue,
  Group as RACGroup,
  ValidationResult,
} from "react-aria-components";
import { Popover } from "../popover/popover";
import { Text } from "../text/text";
import { RangeCalendar } from "../rangeCalendar/rangeCalendar";

import styles from "./dateRangePicker.module.scss";
import clsx from "clsx";
import { DateInput } from "../dateField/dateInput/dateInput";
import { DateSegment } from "../dateField/dateSegment/dateSegment";
import { Button } from "../button/button";
import * as Icons from "../../assets/icons";
import { FieldError } from "../fieldError/fieldError";

export type TDateRangePickerProps<T extends DateValue> =
  TAriaDateRangePickerProps<T> & {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
  };

export const DateRangePicker = <T extends DateValue>({
  label,
  description,
  errorMessage,
  firstDayOfWeek,
  ...props
}: TDateRangePickerProps<T>) => {
  return (
    <RACDateRangePicker {...props} className={clsx(styles["root"])}>
      <Text type="label">{label}</Text>
      <RACGroup className={styles["group"]}>
        <DateInput slot="start">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <span aria-hidden="true">-</span>
        <DateInput slot="end">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <Button iconOnly size="lg">
          <Icons.ChevronDown />
        </Button>
      </RACGroup>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover shouldHideArrow>
        <RangeCalendar firstDayOfWeek={firstDayOfWeek} />
      </Popover>
    </RACDateRangePicker>
  );
};
