import React from "react";
// Functions
import clsx from "clsx";
// Components
import {
  Breadcrumbs as RACBreadcrumbs,
  BreadcrumbsProps as TAriaBreadcrumbsProps,
} from "react-aria-components";
import { BreadcrumbItem } from "./breadcrumbItem/breadcrumbItem";
// Styles
import styles from "./breadcrumbs.module.scss";

export type TBreadcrumbsProps<T extends object> = TAriaBreadcrumbsProps<T> & {};

export const Breadcrumbs = <T extends object>(props: TBreadcrumbsProps<T>) => {
  return <RACBreadcrumbs {...props} className={clsx(styles["root"])} />;
};

Breadcrumbs.Item = BreadcrumbItem;
