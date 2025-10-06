import React from "react";
import { Radio } from "../radio/radio";
import { RadioGroup } from "./radioGroup";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryFn<typeof RadioGroup>;

export const Example: Story = (args) => (
  <RadioGroup {...args}>
    <Radio value="soccer">Soccer</Radio>
    <Radio value="baseball">Baseball</Radio>
    <Radio value="basketball">Basketball</Radio>
  </RadioGroup>
);

Example.args = {
  label: "Favorite sport",
};
