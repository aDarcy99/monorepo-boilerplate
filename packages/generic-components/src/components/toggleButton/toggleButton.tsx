import React from "react";
// Functions
import clsx from "clsx";
// Components
import {
  ToggleButton as RACToggleButton,
  ToggleButtonProps as TAriaToggleButtonProps,
} from "react-aria-components";
// Styles
import styles from "./toggleButton.module.scss";

type TButtonProps = TAriaToggleButtonProps & {
  variant?: "filled" | "transparent" | "outlined" | "unset";
  size?: "sm" | "md" | "lg";
  width?: "fit-content" | "fit-container";
  height?: "fit-content" | "fit-container";
  color?: "brand" | "error" | "success" | "info" | "neutral";
  textAlignment?: "start" | "center" | "end";
  iconOnly?: boolean;
};

export const ToggleButton = ({
  children,
  variant = "filled",
  size = "md",
  width = "fit-content",
  height = "fit-content",
  color = "neutral",
  textAlignment = "center",
  iconOnly,
  ...props
}: TButtonProps) => {
  return (
    <RACToggleButton
      {...props}
      className={clsx(
        styles["root"],
        styles[`variant--${variant}`],
        styles[`color--${color}`],
        styles[`size--${size}`],
        styles[`width--${width}`],
        styles[`height--${height}`],
        styles[`text-alignment--${textAlignment}`],
        iconOnly && styles["icon-only"],
        props.className
      )}
    >
      {children}
    </RACToggleButton>
  );
};
