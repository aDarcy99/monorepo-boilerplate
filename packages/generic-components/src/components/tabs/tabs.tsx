import React from "react";
import {
  Tabs as RACTabs,
  TabList as RACTabList,
  TabListProps as TAriaTabListProps,
  TabProps as TAriaTabProps,
  Tab as RACTab,
  TabsProps as TAriaTabsProps,
  TabPanelProps as TAriaTabPanelProps,
  TabPanel as RACTabPanel,
} from "react-aria-components";

import styles from "./tabs.module.scss";
import clsx from "clsx";
import { ReactNode } from "react";

export type TTabsProps = TAriaTabsProps & {};

export const Tabs = (props: TTabsProps) => {
  return <RACTabs {...props} className={clsx(styles["root"])} />;
};

export type TTabHeaderProps<T extends object> = TAriaTabListProps<T> & {};

const TabHeader = <T extends object>(props: TTabHeaderProps<T>) => {
  return <RACTabList {...props} className={clsx(styles["header"])} />;
};

export type TTabItemProps = TAriaTabProps & {};

const TabItem = (props: TTabItemProps) => {
  return <RACTab {...props} className={clsx(styles["item"])} />;
};

export type TTabBodyProps = { children: ReactNode };

const TabBody = ({ children, ...props }: TTabBodyProps) => {
  return (
    <div {...props} className={clsx(styles["body"])}>
      {children}
    </div>
  );
};

export type TTabPanelProps = TAriaTabPanelProps & {};

const TabPanel = (props: TTabPanelProps) => {
  return <RACTabPanel {...props} className={clsx(styles["panel"])} />;
};

Tabs.Header = TabHeader;
Tabs.Item = TabItem;
Tabs.Body = TabBody;
Tabs.Panel = TabPanel;
