import React from "react";
import {
  Form as RACForm,
  FormProps as TAriaFormProps,
} from "react-aria-components";
// Styles
import styles from "./form.module.scss";

export type TFormProps = TAriaFormProps & {};

export const Form = (props: TFormProps) => {
  return <RACForm {...props} className={styles["root"]} />;
};
