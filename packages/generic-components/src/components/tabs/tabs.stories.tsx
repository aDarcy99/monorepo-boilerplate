import React from "react";
import { Tabs } from "./tabs";
import { fn } from "@storybook/test";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  args: {
    onSelectionChange: fn(),
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryFn<typeof Tabs>;

export const Example: Story = (args) => (
  <Tabs {...args}>
    <Tabs.Header aria-label="History of Ancient Rome">
      <Tabs.Item id="FoR">Founding of Rome</Tabs.Item>
      <Tabs.Item id="MaR">Monarchy and Republic</Tabs.Item>
      <Tabs.Item id="Emp">Empire</Tabs.Item>
    </Tabs.Header>
    <Tabs.Body>
      <Tabs.Panel id="FoR">
        Arma virumque cano, Troiae qui primus ab oris.
      </Tabs.Panel>
      <Tabs.Panel id="MaR">Senatus Populusque Romanus.</Tabs.Panel>
      <Tabs.Panel id="Emp">Alea jacta est.</Tabs.Panel>
    </Tabs.Body>
  </Tabs>
);
