import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Footer } from "./Footer";

const meta = {
  title: "Navigation/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    socialLinks: [
      { platform: "youtube", href: "#" },
      { platform: "tiktok", href: "#" },
      { platform: "linkedin", href: "#" },
    ],
    address: "212 E International Airport Rd Anchorage, AK 99518 United States",
  },
};

export const WithoutSocialLinks: Story = {
  args: {
    address: "212 E International Airport Rd Anchorage, AK 99518 United States",
  },
};
