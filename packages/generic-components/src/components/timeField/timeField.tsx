import React from "react";
// Functions
import clsx from "clsx";
// Components
import {
  TimeField as RACTimeField,
  TimeFieldProps as TAriaTimeFieldProps,
  TimeValue,
  ValidationResult,
} from "react-aria-components";
import { Text } from "../text/text";
import { DateInput } from "../dateField/dateInput/dateInput";
import { DateSegment } from "../dateField/dateSegment/dateSegment";
import { FieldError } from "../fieldError/fieldError";
// Syles
import styles from "./timeField.module.scss";

export type TTimeFieldProps<T extends TimeValue> = TAriaTimeFieldProps<T> & {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
};

export const TimeField = <T extends TimeValue>({
  label,
  description,
  errorMessage,
  ...props
}: TTimeFieldProps<T>) => {
  return (
    <RACTimeField {...props} className={clsx(styles["root"])}>
      <Text type="label">{label}</Text>
      <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </RACTimeField>
  );
};
