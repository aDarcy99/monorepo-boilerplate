import React from "react";
import { ComboBox } from "./comboBox";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryFn<typeof ComboBox>;

export const Example: Story = (args) => (
  <ComboBox {...args}>
    <ComboBox.Item>Chocolate</ComboBox.Item>
    <ComboBox.Item>Mint</ComboBox.Item>
    <ComboBox.Item>Strawberry</ComboBox.Item>
    <ComboBox.Item>Vanilla</ComboBox.Item>
  </ComboBox>
);

Example.args = {
  label: "Ice cream flavor",
};
