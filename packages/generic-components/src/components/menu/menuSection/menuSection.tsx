import React from "react";
import {
  MenuSection as RACMenuSection,
  MenuSectionProps as TAriaMenuSectionProps,
} from "react-aria-components";

export type TMenuSectionProps<T extends object> = TAriaMenuSectionProps<T> & {};

export const MenuSection = <T extends object>(props: TMenuSectionProps<T>) => {
  return <RACMenuSection {...props} />;
};
