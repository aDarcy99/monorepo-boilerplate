import React, { ReactNode } from "react";
// Functions
import clsx from "clsx";
// Components
import {
  RadioGroup as RACRadioGroup,
  RadioGroupProps as TAriaRadioGroupProps,
  ValidationResult,
  RadioProps as TAriaRadioProps,
  Radio as RACRadio,
} from "react-aria-components";
import { Text } from "../text/text";
import { FieldError } from "../fieldError/fieldError";
// Styles
import styles from "./radioGroup.module.scss";

export type TRadioGroupProps = Omit<TAriaRadioGroupProps, "children"> & {
  children?: ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
};

export const RadioGroup = ({
  label,
  description,
  errorMessage,
  children,
  ...props
}: TRadioGroupProps) => {
  return (
    <RACRadioGroup {...props} className={clsx(styles["root"])}>
      <Text type="label">{label}</Text>
      {description && <Text slot="description">{description}</Text>}
      {children}
      <FieldError>{errorMessage}</FieldError>
    </RACRadioGroup>
  );
};
