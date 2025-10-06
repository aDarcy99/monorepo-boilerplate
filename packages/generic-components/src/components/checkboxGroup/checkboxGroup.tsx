import React, { ReactNode } from "react";
// Functions
import clsx from "clsx";
// Components
import {
  FieldError,
  CheckboxGroup as RACCheckboxGroup,
  CheckboxGroupProps as TAriaCheckboxGroupProps,
  ValidationResult,
} from "react-aria-components";
import { Text } from "../text/text";
// Styles
import styles from "./checkboxGroup.module.scss";

export type TCheckboxGroupProps = Omit<TAriaCheckboxGroupProps, "children"> & {
  children?: ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
};

export const CheckboxGroup = ({
  label,
  description,
  errorMessage,
  children,
  ...props
}: TCheckboxGroupProps) => {
  return (
    <RACCheckboxGroup {...props} className={clsx(styles["root"])}>
      {label && <Text type="label">{label}</Text>}
      {children}
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </RACCheckboxGroup>
  );
};
