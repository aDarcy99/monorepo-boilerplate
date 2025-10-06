import React from "react";
import { Tag } from "../tag/tag";
import { TagGroup } from "./tagGroup";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof TagGroup> = {
  component: TagGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryFn<typeof TagGroup>;

export const Example: Story = (args) => (
  <TagGroup {...args}>
    <Tag>Chocolate</Tag>
    <Tag>Mint</Tag>
    <Tag>Strawberry</Tag>
    <Tag>Vanilla</Tag>
  </TagGroup>
);

Example.args = {
  label: "Ice cream flavor",
  selectionMode: "single",
};
