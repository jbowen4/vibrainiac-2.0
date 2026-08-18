import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { NewsCard } from "./NewsCard";

const meta = {
  title: "Foundation/NewsCard",
  component: NewsCard,
  parameters: { layout: "padded" },
} satisfies Meta<typeof NewsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Innerverse Announced",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    href: "#",
    isNew: true,
  },
  render: (args) => (
    <div className="max-w-sm">
      <NewsCard {...args} />
    </div>
  ),
};

export const WithCustomButtonLabel: Story = {
  args: {
    title: "A.P.A.",
    description:
      "We were recently interviewed by the American Psychological Association for our new release; Innerverse! Take a look.",
    href: "#",
    buttonLabel: "Visit Site",
  },
  render: (args) => (
    <div className="max-w-sm">
      <NewsCard {...args} />
    </div>
  ),
};

export const Grid: Story = {
  args: {
    title: "",
    description: "",
    href: "#",
  },
  render: () => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <NewsCard
        isNew
        title="Innerverse Announced"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
        href="#"
      />
      <NewsCard
        isNew
        title="Meet the Team!"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        href="#"
        buttonLabel="Watch on YouTube"
      />
      <NewsCard
        title="A.P.A."
        description="We were recently interviewed by the American Psychological Association for our new release; Innerverse! Take a look."
        href="#"
        buttonLabel="Visit Site"
      />
      <NewsCard
        title="First Convention"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
        href="#"
      />
    </div>
  ),
};
