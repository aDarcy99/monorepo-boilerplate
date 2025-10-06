import React from "react";
import {
  OverlayArrow,
  Popover as RACPopover,
  PopoverProps as TAriaPopoverProps,
} from "react-aria-components";
import type { ReactNode } from "react";
import clsx from "clsx";

import styles from "./popover.module.scss";

export type TPopoverProps = Omit<TAriaPopoverProps, "children"> & {
  children: ReactNode;
  shouldHideArrow?: boolean;
};

export const Popover = ({
  children,
  shouldHideArrow,
  ...props
}: TPopoverProps) => {
  return (
    <RACPopover {...props} className={clsx(styles["root"], props.className)}>
      {!shouldHideArrow && (
        <OverlayArrow>
          <svg width={12} height={12} viewBox="0 0 12 12">
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      {children}
    </RACPopover>
  );
};
