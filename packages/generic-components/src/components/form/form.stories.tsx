import React from "react";
import { Form } from "./form";
import { Button } from "../button/button";
import { TextField } from "../textField/textField";

import type { Meta, StoryFn } from "@storybook/react";
import { Text } from "../text/text";

const meta: Meta<typeof Form> = {
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryFn<typeof Form>;

export const Example: Story = (args) => (
  <Form {...args}>
    <TextField name="email" type="email" isRequired label="Email" />
    <Button type="submit">Submit</Button>
  </Form>
);
