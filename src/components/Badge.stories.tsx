import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "./Badge";

const meta = {
  title: "Foundation/Badge",
  component: Badge,
  parameters: { layout: "padded" },
  argTypes: {
    tone: { control: "select", options: ["accent", "live", "neutral"] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {
  args: { tone: "accent", children: "Featured" },
};

export const Live: Story = {
  args: { tone: "live", dot: true, children: "New!" },
};

export const Neutral: Story = {
  args: { tone: "neutral", children: "Draft" },
};

export const AllVariants: Story = {
  args: { children: null },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge tone="accent">Featured</Badge>
      <Badge tone="live" dot>
        New!
      </Badge>
      <Badge tone="neutral">Draft</Badge>
    </div>
  ),
};
