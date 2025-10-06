import React from "react";
import {
  ListBox as RACListBox,
  ListBoxItemProps as TAriaListBoxItemProps,
  ListBoxProps as TAriaListBoxProps,
} from "react-aria-components";
import type { ReactNode } from "react";

import styles from "./listBox.module.scss";
import clsx from "clsx";
import { ListBoxItem } from "./listBoxItem/listBoxItem";

export type TListBoxProps<T extends object> = Omit<
  TAriaListBoxProps<T>,
  "children"
> & {
  children?: ReactNode;
};

export type TListBoxItemProps = TAriaListBoxItemProps & {};

export const ListBox = <T extends object>({
  children,
  ...props
}: TListBoxProps<T>) => {
  return (
    <RACListBox {...props} className={clsx(styles["root"])}>
      {children}
    </RACListBox>
  );
};

ListBox.Item = ListBoxItem;
