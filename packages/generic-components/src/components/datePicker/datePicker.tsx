import React from "react";
// Functions
import clsx from "clsx";
// Components
import {
  DatePicker as RACDatePicker,
  DatePickerProps as TAriaDatePickerProps,
  DateValue,
  Group,
  ValidationResult,
} from "react-aria-components";
import { Text } from "../text/text";
import { Calendar } from "../calendar/calendar";
import { Popover } from "../popover/popover";
import { DateInput } from "../dateField/dateInput/dateInput";
import { DateSegment } from "../dateField/dateSegment/dateSegment";
import { Button } from "../button/button";
// Assetss
import * as Icons from "../../assets/icons";
// Styles
import styles from "./datePicker.module.scss";
import { FieldError } from "../fieldError/fieldError";

export type TDatePickerProps<T extends DateValue> = TAriaDatePickerProps<T> & {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
};

export const DatePicker = <T extends DateValue>({
  label,
  description,
  errorMessage,
  firstDayOfWeek,
  ...props
}: TDatePickerProps<T>) => {
  return (
    <RACDatePicker {...props} className={clsx(styles["root"])}>
      <Text type="label">{label}</Text>
      <Group>
        <DateInput
          endAdornment={
            <Button iconOnly>
              <Icons.ChevronDown />
            </Button>
          }
        >
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
      </Group>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover shouldHideArrow placement="bottom">
        <Calendar firstDayOfWeek={firstDayOfWeek} />
      </Popover>
    </RACDatePicker>
  );
};
