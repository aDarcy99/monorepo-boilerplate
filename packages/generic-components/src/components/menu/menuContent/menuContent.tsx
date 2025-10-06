import React, { ReactNode } from "react";
// Components
import {
  Menu as RACMenu,
  MenuProps as TAriaMenuProps,
} from "react-aria-components";
import { Popover, TPopoverProps } from "../../popover/popover";
// Styles
import styles from "./menuContent.module.scss";

export type TMenuContentProps<T extends object> = TAriaMenuProps<T> & {
  children?: ReactNode;
  popoverProps?: TPopoverProps;
};
export const MenuContent = <T extends object>({
  popoverProps,
  ...props
}: TMenuContentProps<T>) => {
  return (
    <Popover {...popoverProps}>
      <RACMenu {...props} className={styles["root"]}>
        {props.children}
      </RACMenu>
    </Popover>
  );
};
