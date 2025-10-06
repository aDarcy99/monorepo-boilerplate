import React from "react";
import { Table } from "./table";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Table> = {
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryFn<typeof Table>;

export const Example: Story = (args) => (
  <Table aria-label="Files" {...args}>
    <Table.Header>
      <Table.Column isRowHeader>Name</Table.Column>
      <Table.Column isRowHeader>Type</Table.Column>
      <Table.Column isRowHeader>Date Modified</Table.Column>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Games</Table.Cell>
        <Table.Cell>File folder</Table.Cell>
        <Table.Cell>6/7/2020</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Program Files</Table.Cell>
        <Table.Cell>File folder</Table.Cell>
        <Table.Cell>4/7/2021</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>bootmgr</Table.Cell>
        <Table.Cell>System file</Table.Cell>
        <Table.Cell>11/20/2010</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

Example.args = {
  onRowAction: undefined,
  selectionMode: "multiple",
};
