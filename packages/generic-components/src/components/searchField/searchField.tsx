import React from "react";
// Functions
import clsx from "clsx";
// Components
import {
  SearchField as RACSearchField,
  SearchFieldProps as TAriaSearchFieldProps,
  ValidationResult,
} from "react-aria-components";
import { Text } from "../text/text";
import { Input } from "../input/input";
import { Button } from "../button/button";
import { FieldError } from "../fieldError/fieldError";
// Assets
import * as Icons from "../../assets/icons";
// Styles
import styles from "./searchField.module.scss";

export type TSearchFieldProps = TAriaSearchFieldProps & {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
};

export const SearchField = ({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}: TSearchFieldProps) => {
  return (
    <RACSearchField {...props} className={clsx(styles["root"])}>
      {label && <Text type="label">{label}</Text>}
      {description && (
        <Text type="body" slot="description">
          {description}
        </Text>
      )}
      <Input
        placeholder={placeholder}
        className={styles["input"]}
        endAdornment={
          <Button iconOnly>
            <Icons.Cross1 />
          </Button>
        }
      />
      <FieldError>{errorMessage}</FieldError>
    </RACSearchField>
  );
};
