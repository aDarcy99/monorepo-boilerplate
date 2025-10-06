import React from "react";
// Components
import {
  DialogTrigger as RACDialogTrigger,
  DialogTriggerProps as TAriaDialogTriggerProps,
} from "react-aria-components";
import { DialogContent } from "./dialogContent/dialogContent";

export type TDialogProps = TAriaDialogTriggerProps & {};

export const Dialog = (props: TDialogProps) => {
  return <RACDialogTrigger {...props} />;
};

Dialog.Content = DialogContent;
