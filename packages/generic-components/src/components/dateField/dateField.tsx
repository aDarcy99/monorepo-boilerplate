import React from "react";
import {
  DateField as RACDateField,
  DateFieldProps as TAriaDateFieldProps,
  DateValue,
  ValidationResult,
} from "react-aria-components";
import { Text } from "../text/text";

import styles from "./dateField.module.scss";
import clsx from "clsx";
import { DateSegment } from "./dateSegment/dateSegment";
import { DateInput } from "./dateInput/dateInput";
import { FieldError } from "../fieldError/fieldError";

export type TDateFieldProps<T extends DateValue> = TAriaDateFieldProps<T> & {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
};

export const DateField = <T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: TDateFieldProps<T>) => {
  return (
    <RACDateField {...props} className={clsx(styles["root"])}>
      <Text type="label" className={styles["label"]}>
        {label}
      </Text>
      <DateInput className={clsx(styles["input"])}>
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </RACDateField>
  );
};
