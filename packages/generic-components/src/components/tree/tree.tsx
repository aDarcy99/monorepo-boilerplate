import React from "react";
// TODO: Style this component
import {
  Tree as RACTree,
  TreeItem as RACTreeItem,
  TreeItemContent as RACTreeItemContent,
  TreeItemContentProps as TAriaTreeItemContentProps,
  TreeItemContentRenderProps,
  TreeItemProps as TAriaTreeItemProps,
  TreeProps as TAriaTreeProps,
} from "react-aria-components";
import type { ReactNode } from "react";

import { Checkbox } from "../checkbox/checkbox";
import { Button } from "../button/button";

import styles from "./tree.module.scss";
import clsx from "clsx";
import * as Icons from "../../assets/icons";

export type TTreeProps<T extends object> = TAriaTreeProps<T> & {};

export type TTreeItemContentProps = Omit<
  TAriaTreeItemContentProps,
  "children"
> & {
  children?: ReactNode;
};

export type TTreeItemProps = Partial<TAriaTreeItemProps> & {
  title: string;
  children?: ReactNode;
};

export const Tree = <T extends object>(props: TTreeProps<T>) => {
  return <RACTree {...props} className={clsx(styles["root"])} />;
};

export const TreeItemContent = (props: TTreeItemContentProps) => {
  return (
    <RACTreeItemContent>
      {({
        selectionBehavior,
        selectionMode,
        allowsDragging,
      }: TreeItemContentRenderProps) => (
        <>
          {allowsDragging && <Button slot="drag">≡</Button>}
          {selectionBehavior === "toggle" && selectionMode !== "none" && (
            <Checkbox slot="selection" />
          )}
          <Button slot="chevron">
            <Icons.ChevronRight />
          </Button>
          {props.children}
        </>
      )}
    </RACTreeItemContent>
  );
};

export const TreeItem = (props: TTreeItemProps) => {
  return (
    <RACTreeItem
      {...props}
      textValue={props.title}
      className={clsx(styles["root"])}
    >
      <TreeItemContent>{props.title}</TreeItemContent>
      {props.children}
    </RACTreeItem>
  );
};
