import React from "react";
import { Toolbar } from "./toolbar";
import { Button } from "../button/button";
import { ToggleButton } from "../toggleButton/toggleButton";
import { Checkbox } from "../checkbox/checkbox";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Toolbar> = {
  component: Toolbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryFn<typeof Toolbar>;

export const Example: Story = (args) => (
  <Toolbar aria-label="Text formatting" {...args}>
    <Toolbar.Group aria-label="Style">
      <ToggleButton aria-label="Bold">
        <b>B</b>
      </ToggleButton>
      <ToggleButton aria-label="Italic">
        <i>I</i>
      </ToggleButton>
      <ToggleButton aria-label="Underline">
        <u>U</u>
      </ToggleButton>
    </Toolbar.Group>
    <Toolbar.Separator orientation="vertical" />
    <Toolbar.Group aria-label="Clipboard">
      <Button>Copy</Button>
      <Button>Paste</Button>
      <Button>Cut</Button>
    </Toolbar.Group>
    <Toolbar.Separator orientation="vertical" />
    <Checkbox>Night Mode</Checkbox>
  </Toolbar>
);
