import React from "react";
import { Checkbox } from "../checkbox/checkbox";
import { CheckboxGroup } from "./checkboxGroup";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryFn<typeof CheckboxGroup>;

export const Example: Story = (args) => (
  <CheckboxGroup {...args}>
    <Checkbox value="soccer" label={"Soccer"} />
    <Checkbox value="baseball" label={"Baseball"} />
    <Checkbox value="basketball" label={"Basketball"} />
  </CheckboxGroup>
);

Example.args = {
  label: "Favorite sports",
};
