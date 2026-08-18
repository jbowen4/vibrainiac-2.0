import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./Button";

const meta = {
  title: "Foundation/Button",
  component: Button,
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "select", options: ["outline", "solid", "ghost"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: { variant: "outline", children: "Read More" },
};

export const Solid: Story = {
  args: { variant: "solid", children: "Meet the Team" },
};

export const Ghost: Story = {
  args: { variant: "ghost", href: "#", children: "← Return to News" },
};

export const AsLink: Story = {
  args: { variant: "outline", href: "#", children: "Visit Site" },
};

export const Disabled: Story = {
  args: { variant: "solid", children: "Meet the Team", disabled: true },
};

export const States: Story = {
  args: { children: null },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="outline">Read More</Button>
      <Button variant="solid">Meet the Team</Button>
      <Button variant="solid" disabled>
        Disabled
      </Button>
      <Button variant="outline" href="#">
        Visit Site
      </Button>
      <Button variant="ghost" href="#">
        ← Return to News
      </Button>
    </div>
  ),
};
