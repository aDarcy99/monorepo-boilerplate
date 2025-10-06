import React from "react";
// Types
import { THtmlDivProps } from "../../types/elementProps.types";
// Functions
import clsx from "clsx";
// Components
// Assets
// Styles
import styles from "./card.module.scss";

export type TCardProps = THtmlDivProps & {
  color?: "brand" | "neutral";
  variant?: "filled" | "outlined" | "unset";
};

export const Card = ({
  children,
  color = "neutral",
  variant = "outlined",
  ...props
}: TCardProps) => {
  return (
    <div
      className={clsx(
        styles["root"],
        styles[`color--${color}`],
        styles[`variant--${variant}`],
        props.className
      )}
    >
      {children}
    </div>
  );
};
