import React from "react";
import { Tooltip, TooltipTrigger } from "./tooltip";
import { Button } from "../button/button";

import type { Meta, StoryFn } from "@storybook/react";
import * as Icons from "../../assets/icons";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryFn<typeof Tooltip>;

export const Example: Story = (args) => (
  <TooltipTrigger>
    <Button iconOnly>
      <Icons.Note />
    </Button>
    <Tooltip {...args}>Save</Tooltip>
  </TooltipTrigger>
);
