import React from "react";
import { Breadcrumbs } from "./breadcrumbs";
import { Link } from "../link/link";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryFn<typeof Breadcrumbs>;

export const Example: Story = (args) => (
  <Breadcrumbs {...args}>
    <Breadcrumbs.Item>
      <Link href="/">Home</Link>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item>
      <Link href="/">Projects</Link>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item>
      <Link href="/">My New Project</Link>
    </Breadcrumbs.Item>
  </Breadcrumbs>
);
