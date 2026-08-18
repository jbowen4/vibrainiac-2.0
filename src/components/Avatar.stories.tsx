import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Avatar } from "./Avatar";

const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23777777"/><circle cx="100" cy="80" r="36" fill="%23999999"/><rect x="40" y="130" width="120" height="80" rx="40" fill="%23999999"/></svg>'
  );

const meta = {
  title: "Foundation/Avatar",
  component: Avatar,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { src: PLACEHOLDER, alt: "Team member portrait", size: 160, glow: true },
};

export const NoGlow: Story = {
  args: { src: PLACEHOLDER, alt: "Team member portrait", size: 160, glow: false },
};

export const Small: Story = {
  args: { src: PLACEHOLDER, alt: "Team member portrait", size: 64 },
};
