import React from "react";
import { Text } from "../text/text";
import { Card } from "./card";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Card> = {
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryFn<typeof Card>;

export const Example: Story = (args) => (
  <Card {...args}>
    <Text>Text Content</Text>
  </Card>
);

Example.args = {};
