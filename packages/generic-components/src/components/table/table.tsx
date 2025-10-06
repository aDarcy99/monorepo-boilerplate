import React from "react";
import {
  Button,
  Collection,
  Column as RACColumn,
  ColumnProps as TAriaColumnProps,
  Row as RACRow,
  RowProps as TAriaRowProps,
  Table as RACTable,
  TableHeader as RACTableHeader,
  TableHeaderProps as TAriaTableHeaderProps,
  TableProps as TAriaTableProps,
  useTableOptions,
  TableBodyProps as TAriaTableBodyProps,
  TableBody as RACTableBody,
  CellProps as TAriaCellProps,
  Cell as RACCell,
} from "react-aria-components";
import type { ReactNode } from "react";
import { Checkbox } from "../checkbox/checkbox";

import styles from "./table.module.scss";
import clsx from "clsx";
import * as Icons from "../../assets/icons";

export type TTableProps = TAriaTableProps & {};

export const Table = (props: TTableProps) => {
  return (
    <RACTable {...props} className={clsx(styles["root"], props.className)} />
  );
};

export type TColumnProps = Omit<TAriaColumnProps, "children"> & {
  children?: ReactNode;
  variant?: "filled" | "outlined";
  color?: "content";
};

const Column = (props: TColumnProps) => {
  return (
    <RACColumn {...props} className={clsx(styles["column"], props.className)}>
      {({ allowsSorting, sortDirection }) => (
        <div className={clsx(styles["column-header"])}>
          {props.children}
          {allowsSorting && (
            <span aria-hidden="true" className={clsx(styles["sort-indicator"])}>
              {sortDirection === "ascending" ? (
                <Icons.ChevronUp />
              ) : (
                <Icons.ChevronDown />
              )}
            </span>
          )}
        </div>
      )}
    </RACColumn>
  );
};

export type TTableHeaderProps<T extends object> = TAriaTableHeaderProps<T> & {};

const TableHeader = <T extends object>({
  columns,
  children,
  ...props
}: TTableHeaderProps<T>) => {
  const { selectionBehavior, selectionMode, allowsDragging } =
    useTableOptions();

  return (
    <RACTableHeader
      {...props}
      className={clsx(styles["header"], props.className)}
    >
      {/* Extra columns for drag-and-drop and selection */}
      {allowsDragging && <RACColumn className={clsx(styles["column"])} />}
      {selectionBehavior === "toggle" && (
        <RACColumn className={clsx(styles["column"])}>
          {selectionMode === "multiple" && (
            <Checkbox
              slot="selection"
              aria-label="Select All"
              className={clsx(styles["checkbox"])}
            />
          )}
        </RACColumn>
      )}
      <Collection items={columns}>{children}</Collection>
    </RACTableHeader>
  );
};

export type TTableBodyProps<T extends object> = TAriaTableBodyProps<T> & {};

const TableBody = <T extends object>(props: TTableBodyProps<T>) => {
  return <RACTableBody {...props} className={clsx(props.className)} />;
};

export type TRowProps<T extends object> = TAriaRowProps<T> & {};

const Row = <T extends object>({
  id,
  columns,
  children,
  ...props
}: TRowProps<T>) => {
  const { selectionBehavior, allowsDragging } = useTableOptions();

  return (
    <RACRow id={id} {...props} className={clsx(styles["row"], props.className)}>
      {allowsDragging && (
        <Cell>
          <Button slot="drag">
            <Icons.DragHandleVertical />
          </Button>
        </Cell>
      )}
      {selectionBehavior === "toggle" && (
        <Cell>
          <Checkbox slot="selection" className={clsx(styles["checkbox"])} />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </RACRow>
  );
};

export type TCellProps = TAriaCellProps & {};

const Cell = (props: TCellProps) => {
  return (
    <RACCell {...props} className={clsx(styles["cell"], props.className)} />
  );
};

Table.Header = TableHeader;
Table.Column = Column;
Table.Body = TableBody;
Table.Row = Row;
Table.Cell = Cell;
