import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Divider } from "./Divider";

const meta = {
  title: "Foundation/Divider",
  component: Divider,
  parameters: { layout: "padded" },
  argTypes: { tone: { control: "select", options: ["subtle", "hairline"] } },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Subtle: Story = {
  args: { tone: "subtle" },
};

export const Hairline: Story = {
  args: { tone: "hairline" },
};
