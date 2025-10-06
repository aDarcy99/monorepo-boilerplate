import React from "react";
import { Popover } from "./popover";
import { Button } from "../button/button";

import type { Meta, StoryFn } from "@storybook/react";
import { DialogTrigger } from "react-aria-components";
import { Text } from "../text/text";
import * as Icons from "../../assets/icons";

const meta: Meta<typeof Popover> = {
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryFn<typeof Popover>;

export const Example: Story = (args) => (
  <DialogTrigger>
    <Button aria-label="Help" iconOnly>
      <Icons.InfoCircled />
    </Button>
    <Popover {...args} className="react-aria-Popover popover-padding">
      <Text type="heading" slot="title">
        Help
      </Text>
      <p>For help accessing your account, please contact support.</p>
    </Popover>
  </DialogTrigger>
);
