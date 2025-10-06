import React from "react";
// Types
import { THtmlDivProps } from "../../types/elementProps.types";
// Functions
import clsx from "clsx";
// Components
// Assets
import * as Icons from "../../assets/icons";
// Styles
import styles from "./alert.module.scss";

export type TAlertProps = THtmlDivProps & {
  type?: "error" | "success" | "info" | "warning";
};

export const Alert = ({ children, type = "info", ...props }: TAlertProps) => {
  const renderIcon = () => {
    switch (type) {
      case "error":
        return <Icons.CrossCircled className={styles["icon"]} />;

      case "success":
        return <Icons.CheckCircled className={styles["icon"]} />;

      case "warning":
        return <Icons.ExclamationTriangle className={styles["icon"]} />;

      case "info":
      default:
        return <Icons.InfoCircled className={styles["icon"]} />;
    }
  };
  return (
    <div
      className={clsx(styles["root"], styles[`type--${type}`], props.className)}
    >
      {renderIcon()}
      {children}
    </div>
  );
};
