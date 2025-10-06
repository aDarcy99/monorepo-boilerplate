import React from "react";
import {
  Disclosure as RACDisclosure,
  DisclosurePanel,
  DisclosureProps as TAriaDisclosureProps,
} from "react-aria-components";
import type { ReactNode } from "react";

import styles from "./disclosure.module.scss";
import clsx from "clsx";
import { Text } from "../text/text";
import { Button } from "../button/button";
import * as Icons from "../../assets/icons";

export type TDisclosureProps = Omit<TAriaDisclosureProps, "children"> & {
  title?: string;
  children?: ReactNode;
};

export const Disclosure = ({ title, children, ...props }: TDisclosureProps) => {
  return (
    <RACDisclosure {...props} className={clsx(styles["root"])}>
      <Text type="heading">
        <Button className={styles["button"]} slot="trigger" variant="unset">
          <Icons.ChevronRight className={styles["chevron-icon"]} />
          {title}
        </Button>
      </Text>
      <DisclosurePanel>
        <p>{children}</p>
      </DisclosurePanel>
    </RACDisclosure>
  );
};
