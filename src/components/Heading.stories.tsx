import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Heading } from "./Heading";

const meta = {
  title: "Foundation/Heading",
  component: Heading,
  parameters: { layout: "padded" },
  argTypes: {
    size: {
      control: "select",
      options: ["display", "xl", "lg", "md", "sm"],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { size: "display", children: "Help Us Build The Next Level" },
};

export const XL: Story = {
  args: { size: "xl", children: "Fun isn't the reward at the end" },
};

export const Large: Story = {
  args: { size: "lg", children: "Play With Purpose" },
};

export const Medium: Story = {
  args: { size: "md", children: "Meet the Team" },
};

export const Small: Story = {
  args: { size: "sm", children: "About" },
};

export const Glow: Story = {
  args: { size: "sm", glow: true, children: "For Partners" },
};

export const AllSizes: Story = {
  args: { children: null },
  render: () => (
    <div className="flex flex-col gap-6">
      <Heading size="display">Display</Heading>
      <Heading size="xl">Heading XL</Heading>
      <Heading size="lg">Heading LG</Heading>
      <Heading size="md">Heading MD</Heading>
      <Heading size="sm">Heading SM</Heading>
    </div>
  ),
};
