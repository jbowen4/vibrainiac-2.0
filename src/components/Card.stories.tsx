import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "./Badge";
import { Button } from "./Button";
import { Card, CardBody, CardMedia } from "./Card";
import { Heading } from "./Heading";
import { Text } from "./Text";

const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="480" height="270"><rect width="480" height="270" fill="%23404c9f"/></svg>'
  );

const meta = {
  title: "Foundation/Card",
  component: Card,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithPlaceholderImage: Story = {
  args: { children: null },
  render: () => (
    <Card className="max-w-sm">
      <CardMedia placeholder />
      <CardBody>
        <Badge tone="live" dot>
          New!
        </Badge>
        <Heading size="md">Innerverse Announced</Heading>
        <Text size="sm" tone="secondary">
          We were recently interviewed by the American Psychological
          Association for our new release; Innerverse! Take a look.
        </Text>
        <Button href="#" className="self-start">
          Read More
        </Button>
      </CardBody>
    </Card>
  ),
};

export const WithImage: Story = {
  args: { children: null },
  render: () => (
    <Card className="max-w-sm">
      <CardMedia src={PLACEHOLDER} alt="Game key art" />
      <CardBody>
        <Heading size="md">First Convention</Heading>
        <Text size="sm" tone="secondary">
          Meet the Team! Catch us at our first industry convention this fall.
        </Text>
        <Button href="#" className="self-start">
          Visit Site
        </Button>
      </CardBody>
    </Card>
  ),
};

export const Grid: Story = {
  args: { children: null },
  render: () => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardMedia placeholder />
          <CardBody>
            <Heading size="md">Card {i}</Heading>
            <Text size="sm" tone="secondary">
              Reusable across News and Games listings.
            </Text>
            <Button href="#" className="self-start">
              Read More
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
};
