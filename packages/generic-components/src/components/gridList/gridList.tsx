import React, { ReactNode } from "react";
// Functions
// Components
import {
  GridList as RACGridList,
  GridListProps as TAriaGridListProps,
} from "react-aria-components";
import { GridListItem } from "./gridListItem/gridListItem";
// Styles
import styles from "./gridList.module.scss";

export type TGridListProps<T extends object> = Omit<
  TAriaGridListProps<T>,
  "children"
> & {
  children?: ReactNode;
};

export const GridList = <T extends object>({
  children,
  ...props
}: TGridListProps<T>) => {
  return (
    <RACGridList {...props} className={styles["root"]}>
      {children}
    </RACGridList>
  );
};

GridList.Item = GridListItem;
