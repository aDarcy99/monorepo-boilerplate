import React from "react";
import {
  DisclosureGroup as RACDisclosureGroup,
  DisclosureGroupProps as TAriaDisclosureGroupProps,
} from "react-aria-components";

import styles from "./disclosureGroup.module.scss";
import clsx from "clsx";

export type TDisclosureGroupProps = TAriaDisclosureGroupProps & {};

export const DisclosureGroup = (props: TDisclosureGroupProps) => {
  return <RACDisclosureGroup {...props} className={clsx(styles["root"])} />;
};
