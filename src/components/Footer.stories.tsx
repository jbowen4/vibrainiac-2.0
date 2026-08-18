import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Footer } from "./Footer";

const LEGAL_LINKS = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Parent's Guide", href: "#" },
  { label: "Safe and Fair Play Policy", href: "#" },
  { label: "Accessibility Statement", href: "#" },
  { label: "Other Legal Docs", href: "#" },
  { label: "Media Center", href: "#" },
  { label: "Our Domains", href: "#" },
  { label: "Site Map", href: "#" },
];

const meta = {
  title: "Navigation/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: LEGAL_LINKS,
    socialLinks: [
      { platform: "youtube", href: "#" },
      { platform: "instagram", href: "#" },
      { platform: "x", href: "#" },
      { platform: "twitter", href: "#" },
      { platform: "tiktok", href: "#" },
      { platform: "facebook", href: "#" },
      { platform: "linkedin", href: "#" },
    ],
    address: "212 E International Airport Rd\nAnchorage, AK 99518\nUnited States",
  },
};

export const WithoutSocialLinks: Story = {
  args: {
    links: LEGAL_LINKS,
    address: "212 E International Airport Rd\nAnchorage, AK 99518\nUnited States",
  },
};
