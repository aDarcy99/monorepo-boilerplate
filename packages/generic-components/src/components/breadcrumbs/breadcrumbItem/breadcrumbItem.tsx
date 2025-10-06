import React from "react";
import {
  Breadcrumb as RACBreadcrumb,
  BreadcrumbProps as TAriaBreadcrumbProps,
} from "react-aria-components";
import clsx from "clsx";
import styles from "./breadcrumbItem.module.scss";

export type TBreadcrumbItemProps = TAriaBreadcrumbProps & {};

export const BreadcrumbItem = ({ ...props }: TBreadcrumbItemProps) => {
  return <RACBreadcrumb {...props} className={clsx(styles["root"])} />;
};
