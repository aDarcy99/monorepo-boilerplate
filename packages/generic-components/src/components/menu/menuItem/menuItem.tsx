import React, { ReactNode } from "react";
// Components
import {
  MenuItem as RACMenuItem,
  MenuItemProps as TAriaMenuItemProps,
} from "react-aria-components";
// Assets
import * as Icons from "../../../assets/icons";
// Styles
import styles from "./menuItem.module.scss";

export type TMenuItemProps = Omit<TAriaMenuItemProps, "children"> & {
  children?: ReactNode;
};
export const MenuItem = (props: TMenuItemProps) => {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);

  return (
    <RACMenuItem {...props} textValue={textValue} className={styles["root"]}>
      {({ hasSubmenu }) => (
        <>
          {props.children}
          {hasSubmenu && <Icons.ChevronRight />}
        </>
      )}
    </RACMenuItem>
  );
};
