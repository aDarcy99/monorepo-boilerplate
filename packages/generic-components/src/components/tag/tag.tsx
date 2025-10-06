import React, { ReactNode } from "react";
// Functions
import clsx from "clsx";
// Components
import {
  Tag as RACTag,
  TagProps as TAriaTagProps,
} from "react-aria-components";
import { Button } from "../button/button";
// Assets
import * as Icons from "../../assets/icons";
// Styles
import styles from "./tag.module.scss";

export type TTagProps = Omit<TAriaTagProps, "children"> & {
  children?: ReactNode;
};

export const Tag = ({ children, ...props }: TTagProps) => {
  const textValue = typeof children === "string" ? children : undefined;

  return (
    <RACTag textValue={textValue} {...props} className={clsx(styles["root"])}>
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button
              className={styles["remove-button"]}
              slot="remove"
              variant="transparent"
              size="sm"
              iconOnly
            >
              <Icons.Cross1 />
            </Button>
          )}
        </>
      )}
    </RACTag>
  );
};
