import React from "react";
import { Text } from "./text";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Text> = {
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryFn<typeof Text>;

export const Example: Story = (args) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
    <Text {...args} type="display">
      Display
    </Text>
    <Text {...args} type="title">
      Title
    </Text>
    <Text {...args} type="subtitle">
      Subtitle
    </Text>
    <Text {...args} type="heading">
      Heading
    </Text>
    <Text {...args} type="caption">
      Caption
    </Text>
    <Text {...args} type="label">
      Label
    </Text>
    <Text {...args} type="body">
      Body
    </Text>
    <Text {...args} type="code">
      Code
    </Text>
    <Text {...args} type="blockquote">
      Blockquote
    </Text>
  </div>
);
