import React from "react";
import {
  TextField as RACTextField,
  TextFieldProps as TAriaTextFieldProps,
  ValidationResult,
} from "react-aria-components";
import { Text } from "../text/text";
import { Input } from "../input/input";

import styles from "./textField.module.scss";
import clsx from "clsx";
import { ReactNode, useState } from "react";
import { FieldError } from "../fieldError/fieldError";

export type TTextFieldProps = TAriaTextFieldProps & {
  label: string;
  description?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  errorMessage?: string | ((validation: ValidationResult) => string);
};

export const TextField = ({
  label,
  description,
  errorMessage,
  startAdornment,
  endAdornment,
  ...props
}: TTextFieldProps) => {
  return (
    <RACTextField {...props} className={clsx(styles["root"])}>
      <Text type="label" slot="label">
        {label}
      </Text>
      <Input
        className={styles["input"]}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
      />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </RACTextField>
  );
};
