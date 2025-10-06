// documentScreen.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import DashboardPage from "./dashboard.page";

const meta: Meta<typeof DashboardPage> = {
  title: "Pages/dashboardPage",
  component: DashboardPage,
};

export default meta;

type Story = StoryObj<typeof DashboardPage>;

export const Default: Story = {
  args: {},
};
