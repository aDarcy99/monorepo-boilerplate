import React from "react";
import {
  OverlayArrow,
  Tooltip as RACTooltip,
  TooltipProps as TAriaTooltipProps,
  TooltipTrigger as RACTooltipTrigger,
  TooltipTriggerComponentProps as TAriaTooltipTriggerComponentProps,
} from "react-aria-components";
import type { ReactNode } from "react";

import styles from "./tooltip.module.scss";
import clsx from "clsx";

export type TTooltipProps = Omit<TAriaTooltipProps, "children"> & {
  children: ReactNode;
};

export type TTooltipTriggerProps = TAriaTooltipTriggerComponentProps & {};

export const Tooltip = ({ children, ...props }: TTooltipProps) => {
  return (
    <RACTooltip {...props} className={clsx(styles["root"])} offset={4}>
      <OverlayArrow className={styles["arrow"]}>
        <svg width={8} height={8} viewBox="0 0 8 8">
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </RACTooltip>
  );
};

export const TooltipTrigger = (props: TTooltipTriggerProps) => {
  return <RACTooltipTrigger {...props} />;
};
