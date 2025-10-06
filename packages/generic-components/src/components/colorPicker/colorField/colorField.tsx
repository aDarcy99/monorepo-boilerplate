import React from "react";
import {
  ColorField as RACColorField,
  ColorFieldProps as TAriaColorFieldProps,
  ValidationResult,
} from "react-aria-components";
import type { ReactNode } from "react";
import { Text } from "../../text/text";
import { Input } from "../../input/input";
import { FieldError } from "../../fieldError/fieldError";

import styles from "./colorField.module.scss";
import clsx from "clsx";

export type TColorFieldProps = TAriaColorFieldProps & {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  children?: ReactNode;
};

export const ColorField = ({
  label,
  description,
  errorMessage,
  ...props
}: TColorFieldProps) => {
  return (
    <RACColorField {...props} className={clsx(styles["root"])}>
      {label && <Text type="label">{label}</Text>}
      <Input />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </RACColorField>
  );
};
