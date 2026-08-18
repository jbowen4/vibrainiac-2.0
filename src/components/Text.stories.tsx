import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Text } from "./Text";

const meta = {
  title: "Foundation/Text",
  component: Text,
  parameters: { layout: "padded" },
  argTypes: {
    size: { control: "select", options: ["xl", "lg", "base", "sm", "caption"] },
    tone: {
      control: "select",
      options: ["primary", "secondary", "muted", "accent"],
    },
    weight: { control: "select", options: ["light", "regular"] },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "base",
    tone: "primary",
    children:
      "Vibrainiac is an independent game development studio founded by a team with over 20 years of collective AAA experience.",
  },
};

export const Secondary: Story = {
  args: {
    size: "lg",
    tone: "secondary",
    children: "212 E International Airport Rd Anchorage, AK 99518 United States",
  },
};

export const Lead: Story = {
  args: {
    size: "xl",
    weight: "regular",
    children:
      "Vibrainiac is an independent game development studio founded by a team with over 20 years of collective AAA experience.",
  },
};

export const Muted: Story = {
  args: { size: "sm", tone: "muted", children: "Placeholder / low-emphasis copy" },
};

export const AsLink: Story = {
  args: {
    as: "a",
    href: "#",
    size: "lg",
    children: "Terms of Service",
  },
};

export const AllTones: Story = {
  args: { children: null },
  render: () => (
    <div className="flex flex-col gap-3">
      <Text tone="primary">Primary text</Text>
      <Text tone="secondary">Secondary text</Text>
      <Text tone="muted">Muted text</Text>
      <Text tone="accent">Accent text</Text>
    </div>
  ),
};
