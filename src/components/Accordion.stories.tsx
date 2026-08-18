import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Accordion } from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const ITEMS = [
  { id: "game-support", label: "Game Support", content: "Please contact us at support@vibrainiacgames.com" },
  { id: "recruitment", label: "Recruitment", content: "Please contact us at recruitment@vibrainiacgames.com" },
  { id: "partnerships", label: "Partnerships", content: "Please contact us at partnerships@vibrainiacgames.com" },
  { id: "general-inquiries", label: "General Inquiries", content: "Please contact us at hello@vibrainiacgames.com" },
];

export const Default: Story = {
  args: { items: ITEMS },
};

export const OneExpanded: Story = {
  args: { items: ITEMS, defaultOpenIds: ["recruitment"] },
};
