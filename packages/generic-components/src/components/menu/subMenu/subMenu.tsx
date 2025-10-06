import React, { ReactElement, ReactNode } from "react";
import {
  SubmenuTrigger as RACSubmenuTrigger,
  SubmenuTriggerProps as TAriaSubmenuTriggerProps,
} from "react-aria-components";

export type TSubmenuProps = TAriaSubmenuTriggerProps & {
  children: [ReactElement, ReactElement] | ReactNode;
};

export const Submenu = (props: TSubmenuProps) => {
  const [trigger, popover] = React.Children.toArray(props.children) as [
    ReactElement,
    ReactElement
  ];

  return (
    <RACSubmenuTrigger {...props}>
      {trigger}
      {popover}
    </RACSubmenuTrigger>
  );
};
