import React from "react";
import {
  Group,
  NumberField as RACNumberField,
  NumberFieldProps as TAriaNumberFieldProps,
  ValidationResult,
} from "react-aria-components";
import { Text } from "../text/text";

import styles from "./numberField.module.scss";
import clsx from "clsx";
import { FieldError } from "../fieldError/fieldError";
import * as Icons from "../../assets/icons";
import { Button } from "../button/button";
import { Input } from "../input/input";

export type TNumberFieldProps = TAriaNumberFieldProps & {
  layout?: "side-by-side" | "seperated";
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
};

export const NumberField = ({
  layout,
  label,
  description,
  errorMessage,
  ...props
}: TNumberFieldProps) => {
  const getInputByLayout = () => {
    switch (layout) {
      case "seperated":
        return (
          <Input
            startAdornment={
              <Button slot="decrement" iconOnly>
                <Icons.Minus />
              </Button>
            }
            endAdornment={
              <Button slot="increment" iconOnly>
                <Icons.Plus />
              </Button>
            }
          />
        );

      case "side-by-side":
      default:
        return (
          <Input
            endAdornment={
              <span className={styles["side-by-side"]}>
                <Button slot="decrement" iconOnly>
                  <Icons.Minus />
                </Button>
                <Button slot="increment" iconOnly>
                  <Icons.Plus />
                </Button>
              </span>
            }
          />
        );
    }
  };

  return (
    <RACNumberField {...props} className={clsx(styles["root"])}>
      <Text type="label">{label}</Text>
      {description && <Text slot="description">{description}</Text>}
      <Group>{getInputByLayout()}</Group>
      <FieldError>{errorMessage}</FieldError>
    </RACNumberField>
  );
};
