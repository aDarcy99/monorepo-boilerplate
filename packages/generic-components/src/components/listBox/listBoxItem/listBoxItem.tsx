import React from "react";
// Functions
import clsx from "clsx";
// Components
import {
  ListBoxItem as RACListBoxItem,
  ListBoxItemProps as TAriaListBoxItemProps,
} from "react-aria-components";
// Styles
import styles from "./listBoxItem.module.scss";

export type TListBoxItemProps = TAriaListBoxItemProps & {};

export const ListBoxItem = (props: TListBoxItemProps) => {
  return <RACListBoxItem {...props} className={clsx(styles["root"])} />;
};
