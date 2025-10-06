import React from "react";
// Functions
import clsx from "clsx";
// Components
import {
  Toolbar as RACToolbar,
  ToolbarProps as TAriaToolbarProps,
} from "react-aria-components";
import { Separator } from "../separator/separator";
import { Group } from "../group/group";
// Styles
import styles from "./toolbar.module.scss";

export type TToolbarProps = TAriaToolbarProps & {};

export const Toolbar = (props: TToolbarProps) => {
  return <RACToolbar {...props} className={clsx(styles["root"])} />;
};

Toolbar.Separator = Separator;
Toolbar.Group = Group;
