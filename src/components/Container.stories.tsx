import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Container } from "./Container";

const meta = {
  title: "Foundation/Container",
  component: Container,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => (
    <div className="bg-background-secondary py-8">
      <Container>
        <div className="rounded-sm bg-accent-primary/20 p-4 text-center text-text-primary">
          Content is centered and capped at --container-max-width, with the
          standard page gutter applied on both sides.
        </div>
      </Container>
    </div>
  ),
};
