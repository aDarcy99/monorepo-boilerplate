import React from "react";
import { ListBox } from "./listBox";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof ListBox> = {
  component: ListBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryFn<typeof ListBox>;

export const Example: Story = (args) => (
  <ListBox aria-label="Ice cream flavor" {...args}>
    <ListBox.Item>Chocolate</ListBox.Item>
    <ListBox.Item>Mint</ListBox.Item>
    <ListBox.Item>Strawberry</ListBox.Item>
    <ListBox.Item>Vanilla</ListBox.Item>
  </ListBox>
);

Example.args = {
  onAction: undefined,
  selectionMode: "single",
};
