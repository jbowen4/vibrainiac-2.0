import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DecorativeBlob, GradientBackdrop } from "./GradientBackdrop";
import { Heading } from "./Heading";

const meta = {
  title: "Foundation/GradientBackdrop",
  component: GradientBackdrop,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof GradientBackdrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeroGradient: Story = {
  render: () => (
    <GradientBackdrop className="flex h-96 items-center justify-center">
      <Heading size="xl">Help Us Build The Next Level</Heading>
    </GradientBackdrop>
  ),
};

export const WithBottomFade: Story = {
  render: () => (
    <GradientBackdrop fade className="flex h-96 items-end justify-center pb-12">
      <Heading size="lg">Section Content</Heading>
    </GradientBackdrop>
  ),
};

export const WithDecorativeBlobs: Story = {
  render: () => (
    <GradientBackdrop className="h-96">
      <DecorativeBlob variant="magenta" className="top-[-10%] left-[-10%] size-80" />
      <DecorativeBlob variant="sunset" className="top-[20%] right-[-5%] size-96" />
      <DecorativeBlob variant="violet" className="bottom-[-15%] left-[30%] size-72" />
      <div className="relative flex h-full items-center justify-center">
        <Heading size="xl">Play With Purpose</Heading>
      </div>
    </GradientBackdrop>
  ),
};
