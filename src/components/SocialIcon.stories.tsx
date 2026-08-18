import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SocialIcon } from "./SocialIcon";

const meta = {
  title: "Navigation/SocialIcon",
  component: SocialIcon,
  parameters: { layout: "padded" },
  argTypes: {
    platform: { control: "select", options: ["youtube", "tiktok", "linkedin"] },
  },
} satisfies Meta<typeof SocialIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const YouTube: Story = {
  args: { platform: "youtube", href: "#" },
};

export const TikTok: Story = {
  args: { platform: "tiktok", href: "#" },
};

export const LinkedIn: Story = {
  args: { platform: "linkedin", href: "#" },
};

export const AllPlatforms: Story = {
  args: { platform: "youtube", href: "#" },
  render: () => (
    <div className="flex items-center gap-4">
      <SocialIcon platform="youtube" href="#" />
      <SocialIcon platform="tiktok" href="#" />
      <SocialIcon platform="linkedin" href="#" />
    </div>
  ),
};
