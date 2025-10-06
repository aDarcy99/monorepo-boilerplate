import React, { ReactNode } from "react";
// Functions
import clsx from "clsx";
// Components
import {
  Button,
  GridListItem as RACGridListItem,
  GridListItemProps as TAriaGridListItemProps,
} from "react-aria-components";
import { Checkbox } from "../../checkbox/checkbox";
// Assets
import * as Icons from "../../../assets/icons";
// Styles
import styles from "./gridListItem.module.scss";

export type TGridListItemProps = Omit<TAriaGridListItemProps, "children"> & {
  children?: ReactNode;
};

export const GridListItem = ({
  children,
  textValue,
  ...props
}: TGridListItemProps) => {
  return (
    <RACGridListItem
      {...props}
      textValue={textValue}
      className={clsx(styles["root"])}
    >
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          {allowsDragging && (
            <Button slot="drag">
              <Icons.DragHandleDots2 />
            </Button>
          )}
          {selectionMode === "multiple" && selectionBehavior === "toggle" && (
            <Checkbox slot="selection" label={textValue} />
          )}
          {children}
        </>
      )}
    </RACGridListItem>
  );
};
