import React from "react";
import * as Icons from "../../assets/icons";
import { Button } from "../button/button";
import { Menu } from "./menu";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Menu> = {
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryFn<typeof Menu>;

export const Example: Story = (args) => (
  <Menu {...args}>
    <Button>Edit</Button>
    <Menu.Content>
      <Menu.Item>Favorite</Menu.Item>
      <Menu.Item>Edit</Menu.Item>
      <Menu.Item>Delete</Menu.Item>
      <Menu.SubMenu>
        <Menu.Item>Share</Menu.Item>
        <Menu.Content>
          <Menu.Item>SMS</Menu.Item>
          <Menu.SubMenu>
            <Menu.Item>Email</Menu.Item>
            <Menu.Content>
              <Menu.Item>Personal</Menu.Item>
              <Menu.Item>Work</Menu.Item>
            </Menu.Content>
          </Menu.SubMenu>
        </Menu.Content>
      </Menu.SubMenu>
    </Menu.Content>
  </Menu>
);

Example.args = {};
