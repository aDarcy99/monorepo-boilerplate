import React from "react";
import { ColorSlider } from "./colorSlider";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof ColorSlider> = {
  component: ColorSlider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryFn<typeof ColorSlider>;

export const Example: Story = (args) => <ColorSlider {...args} />;

Example.args = {
  label: "Red Opacity",
  defaultValue: "#f00",
  channel: "alpha",
};
