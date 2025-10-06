import React from "react";
// Functions
import clsx from "clsx";
// Components
import {
  TagGroup as RACTagGroup,
  TagGroupProps as TAriaTagGroupProps,
  TagList,
  TagListProps as TAriaTagListProps,
} from "react-aria-components";
import { Text } from "../text/text";
// Styles
import styles from "./tagGroup.module.scss";

export type TTagGroupProps<T extends object> = Omit<
  TAriaTagGroupProps,
  "children"
> &
  Pick<TAriaTagListProps<T>, "items" | "children" | "renderEmptyState"> & {
    label?: string;
    description?: string;
    errorMessage?: string;
  };

export const TagGroup = <T extends object>({
  label,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  ...props
}: TTagGroupProps<T>) => {
  return (
    <RACTagGroup {...props} className={clsx(styles["root"])}>
      <Text type="label">{label}</Text>
      <TagList
        items={items}
        renderEmptyState={renderEmptyState}
        className={clsx(styles["list"])}
      >
        {children}
      </TagList>
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </RACTagGroup>
  );
};
