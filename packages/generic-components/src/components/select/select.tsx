import React from "react";
import {
  ListBoxItemProps as TAriaListBoxItemProps,
  Select as RACSelect,
  SelectProps as TAriaSelectProps,
  SelectValue,
  ValidationResult,
} from "react-aria-components";
import { Button } from "../button/button";
import { ListBox } from "../listBox/listBox";
import { Popover } from "../popover/popover";
import { Text } from "../text/text";

import styles from "./select.module.scss";
import clsx from "clsx";
import { FieldError } from "../fieldError/fieldError";
import { ListBoxItem } from "../listBox/listBoxItem/listBoxItem";
import * as Icons from "../../assets/icons";

export type TSelectProps<T extends object> = Omit<
  TAriaSelectProps<T>,
  "children"
> & {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
};

export type TSelectItemProps = TAriaListBoxItemProps & {};

export const Select = <T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: TSelectProps<T>) => {
  return (
    <RACSelect {...props} className={clsx(styles["root"])}>
      <Text type="label">{label}</Text>
      <Button>
        <SelectValue />
        <span aria-hidden="true">
          <Icons.ChevronDown />
        </span>
      </Button>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover shouldHideArrow>
        {/* TODO: Fix as any */}
        <ListBox items={items}>{children as any}</ListBox>
      </Popover>
    </RACSelect>
  );
};

Select.Item = ListBoxItem;
