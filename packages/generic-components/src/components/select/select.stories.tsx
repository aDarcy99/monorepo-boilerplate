import React from "react";
import { Select } from "./select";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Select> = {
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryFn<typeof Select>;

export const Example: Story = (args) => (
  <Select {...args}>
    <Select.Item>Chocolate</Select.Item>
    <Select.Item>Mint</Select.Item>
    <Select.Item>Strawberry</Select.Item>
    <Select.Item>Vanilla</Select.Item>
  </Select>
);

Example.args = {
  label: "Ice cream flavor",
};
