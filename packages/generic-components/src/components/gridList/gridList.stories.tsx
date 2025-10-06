import React from "react";
import { GridList } from "./gridList";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof GridList> = {
  component: GridList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryFn<typeof GridList>;

export const Example: Story = (args) => (
  <GridList aria-label="Ice cream flavors" {...args}>
    <GridList.Item textValue="Chocolate"></GridList.Item>
    <GridList.Item textValue="Mint"></GridList.Item>
    <GridList.Item textValue="Strawberry"></GridList.Item>
    <GridList.Item textValue="Vanilla"></GridList.Item>
  </GridList>
);

Example.args = {
  onAction: undefined,
  selectionMode: "multiple",
};
