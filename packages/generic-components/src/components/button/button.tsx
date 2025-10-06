import React from "react";
// Components
import {
  Button as RACButton,
  ButtonProps as TAriaButtonProps,
} from "react-aria-components";
// Styles
import styles from "./button.module.scss";
import clsx from "clsx";

type TButtonProps = TAriaButtonProps & {
  variant?: "filled" | "transparent" | "outlined" | "unset";
  size?: "sm" | "md" | "lg";
  width?: "fit-content" | "fit-container";
  height?: "fit-content" | "fit-container";
  color?: "brand" | "error" | "success" | "info" | "neutral";
  textAlignment?: "start" | "center" | "end";
  iconOnly?: boolean;
};

export const Button = ({
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
    <RACButton
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
    </RACButton>
  );
};
