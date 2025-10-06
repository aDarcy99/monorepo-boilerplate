import React from "react";
import { Modal } from "./modal";
import { Button } from "../button/button";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryFn<typeof Modal>;

export const Example: Story = (args) => (
  <Modal {...args}>
    <Button>Sign up…</Button>
  </Modal>
);
