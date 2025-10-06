import React from "react";
import { Dialog } from "./dialog";
import { Button } from "../button/button";
import { TextField } from "../textField/textField";

import type { Meta, StoryFn } from "@storybook/react";
import { Text } from "../text/text";
import { Form } from "../form/form";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryFn<typeof Dialog>;

export const Example: Story = (args) => (
  <Dialog {...args}>
    <Button>Sign up…</Button>
    <Dialog.Content>
      <Text type="heading" slot="title">
        Sign up
      </Text>
      <Form>
        <TextField autoFocus label="First Name" />
        <TextField label="Last Name" />
        <Button slot="close" style={{ marginTop: 8 }}>
          Submit
        </Button>
      </Form>
    </Dialog.Content>
  </Dialog>
);
