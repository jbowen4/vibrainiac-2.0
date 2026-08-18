import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Logo } from "./Logo";

const meta = {
  title: "Navigation/Logo",
  component: Logo,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {
  args: { variant: "dark" },
  render: (args) => (
    <div style={{ background: "#ffffff", padding: "1rem", borderRadius: "0.5rem" }}>
      <Logo {...args} />
    </div>
  ),
};
