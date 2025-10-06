import React from "react";
import {
  Heading as RACHeading,
  HeadingProps as TAriaHeadingProps,
  Text as RACText,
  TextProps as TAriaTextProps,
  Label as RACLabel,
  LabelProps as TAriaLabelProps,
} from "react-aria-components";

import styles from "./text.module.scss";
import clsx from "clsx";

// Semantically Typographical Types
export type TTextType =
  | "display"
  | "title"
  | "subtitle"
  | "heading"
  | "body"
  | "caption"
  | "label"
  | "code"
  | "blockquote";

export const componentMap: { [key in TTextType]: any } = {
  display: RACHeading,
  title: RACHeading,
  subtitle: RACHeading,
  heading: RACHeading,
  body: RACText,
  caption: RACText,
  label: RACLabel,
  code: RACText,
  blockquote: RACText,
};

type ComponentProps<T extends TTextType> = T extends
  | "display"
  | "title"
  | "subtitle"
  | "heading"
  ? TAriaHeadingProps
  : T extends "label"
  ? TAriaLabelProps
  : TAriaTextProps;

export type TTextProps<T extends TTextType = TTextType> = {
  type?: T;
  color?: "default" | "subtle" | "muted";
  className?: string;
} & ComponentProps<T>;

// TODO: Make Text element default to p for body
export const Text = <T extends TTextType>({
  type,
  className,
  color,
  ...props
}: TTextProps<T>) => {
  const Component = componentMap[type || "body"];

  return (
    <Component
      {...props}
      className={clsx(
        styles["root"],
        styles[`type--${type}`],
        styles[`color--${color}`],
        className
      )}
    />
  );
};
