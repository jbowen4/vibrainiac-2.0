import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { NewsArticle } from "./NewsArticle";

const meta = {
  title: "Foundation/NewsArticle",
  component: NewsArticle,
  parameters: { layout: "padded" },
} satisfies Meta<typeof NewsArticle>;

export default meta;
type Story = StoryObj<typeof meta>;

const LOREM_1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const LOREM_2 =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

export const WithImage: Story = {
  args: {
    title: "Innerverse Announced",
    date: "Aug 11, 2026  |  5:57pm",
    body: [LOREM_1, LOREM_2],
    image: "/news/forest-background.png",
    imageAlt: "A glowing forest at dusk, the setting for Innerverse.",
    returnHref: "#",
  },
};

export const WithoutImage: Story = {
  args: {
    title: "Studio Update",
    date: "Jun 28, 2026  |  9:05am",
    body: [LOREM_1, LOREM_2],
    returnHref: "#",
  },
};

export const LongTitle: Story = {
  args: {
    title: "A Much Longer Headline That Wraps Across Multiple Lines On Small Screens",
    date: "May 19, 2026  |  10:10am",
    body: [LOREM_1],
    returnHref: "#",
  },
};
