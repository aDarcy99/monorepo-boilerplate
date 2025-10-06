import React, { ReactNode } from "react";
// Functions
import clsx from "clsx";
// Components
import {
  ComboBox as RACComboBox,
  ComboBoxProps as TAriaComboBoxProps,
  ListBoxItemProps as TAriaListBoxItemProps,
  ValidationResult,
} from "react-aria-components";
import { Text } from "../text/text";
import { ListBox } from "../listBox/listBox";
import { Popover } from "../popover/popover";
import { TextField } from "../textField/textField";
import { Button } from "../button/button";
import { ListBoxItem } from "../listBox/listBoxItem/listBoxItem";
import { FieldError } from "../fieldError/fieldError";
// Assets
import * as Icons from "../../assets/icons";
// Styles
import styles from "./comboBox.module.scss";

export type TComboBoxProps<T extends object> = Omit<
  TAriaComboBoxProps<T>,
  "children"
> & {
  label: string;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  children: ReactNode | ((item: T) => ReactNode);
};

export type TComboBoxItemProps = TAriaListBoxItemProps & {};

export const ComboBox = <T extends object>({
  label,
  description,
  errorMessage,
  children,
  ...props
}: TComboBoxProps<T>) => {
  return (
    <RACComboBox {...props} className={clsx(styles["root"])}>
      <TextField
        // slot="trigger"
        label={label}
        endAdornment={
          <Button iconOnly>
            <Icons.ChevronDown />
          </Button>
        }
      />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className={styles["popover"]} shouldHideArrow>
        {/* TODO: Fix as any */}
        <ListBox>{children as any}</ListBox>
      </Popover>
    </RACComboBox>
  );
};

ComboBox.Item = ListBoxItem;
