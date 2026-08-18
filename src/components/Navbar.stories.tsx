import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { GradientBackdrop } from "./GradientBackdrop";
import { NavDropdown, Navbar } from "./Navbar";
import { NavLink } from "./NavLink";

const ABOUT_ITEMS = [
  { label: "The Team", href: "#team" },
  { label: "Our Values", href: "#values" },
  { label: "For Partners", href: "#partners" },
  { label: "News", href: "#news" },
];

const meta = {
  title: "Navigation/Navbar",
  component: Navbar,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => (
    <GradientBackdrop className="p-6">
      <Navbar>
        <NavDropdown label="ABOUT" items={ABOUT_ITEMS} active />
        <NavLink href="#">GAMES</NavLink>
        <NavLink href="#">CONTACT US</NavLink>
      </Navbar>
    </GradientBackdrop>
  ),
};

export const DropdownOpen: Story = {
  args: { children: null },
  render: () => (
    <GradientBackdrop className="p-6 pb-64">
      <Navbar>
        <NavDropdown label="ABOUT" items={ABOUT_ITEMS} />
        <NavLink href="#">GAMES</NavLink>
        <NavLink href="#">CONTACT US</NavLink>
      </Navbar>
    </GradientBackdrop>
  ),
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector<HTMLButtonElement>(
      "button[aria-haspopup='menu']"
    );
    trigger?.click();
  },
};
