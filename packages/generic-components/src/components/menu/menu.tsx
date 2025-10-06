import React from "react";
// Components
import {
  MenuTrigger as RACMenuTrigger,
  MenuTriggerProps as TAriaMenuTriggerProps,
} from "react-aria-components";
import { MenuContent } from "./menuContent/menuContent";
import { MenuSection } from "./menuSection/menuSection";
import { MenuItem } from "./menuItem/menuItem";
import { Submenu } from "./subMenu/subMenu";

export type TMenuProps = TAriaMenuTriggerProps & {};

export const Menu = (props: TMenuProps) => {
  return <RACMenuTrigger {...props} />;
};

Menu.Content = MenuContent;
Menu.Section = MenuSection;
Menu.Item = MenuItem;
Menu.SubMenu = Submenu;
