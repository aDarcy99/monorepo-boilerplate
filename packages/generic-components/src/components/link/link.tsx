import React from "react";
import {
  Link as RACLink,
  LinkProps as TAriaLinkProps,
} from "react-aria-components";

import styles from "./link.module.scss";
import clsx from "clsx";

export type TLinkProps = TAriaLinkProps & {};

export const Link = (props: TLinkProps) => {
  return <RACLink {...props} className={clsx(styles["root"])} />;
};
