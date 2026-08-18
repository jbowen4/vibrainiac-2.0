import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./Button";

const meta = {
  title: "Foundation/Button",
  component: Button,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Read More" },
};

export const AsLink: Story = {
  args: { href: "#", children: "Visit Site" },
};

export const Disabled: Story = {
  args: { children: "Watch on YouTube", disabled: true },
};

export const Hover: Story = {
  args: { children: "Read More", className: "bg-accent-primary text-text-primary" },
  parameters: {
    docs: { description: { story: "Simulates the hover state (filled accent background)." } },
  },
};

export const States: Story = {
  args: { children: null },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button>Read More</Button>
      <Button disabled>Disabled</Button>
      <Button href="#">Visit Site</Button>
    </div>
  ),
};
