import React from "react";
// Components
import {
  FieldError as RACFieldError,
  FieldErrorProps as TAriaFieldErrorProps,
} from "react-aria-components";
// Styles
import styles from "./fieldError.module.scss";

type TFieldErrorProps = TAriaFieldErrorProps & {};

export const FieldError = ({ ...props }: TFieldErrorProps) => {
  return <RACFieldError {...props} className={styles["root"]} />;
};
