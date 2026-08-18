import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { NavLink } from "./NavLink";

const meta = {
  title: "Navigation/NavLink",
  component: NavLink,
  parameters: { layout: "padded" },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { href: "#", children: "GAMES" },
};

export const Active: Story = {
  args: { href: "#", active: true, children: "CONTACT US" },
};

export const NavRow: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <NavLink href="#" active>
        ABOUT
      </NavLink>
      <NavLink href="#">GAMES</NavLink>
      <NavLink href="#">CONTACT US</NavLink>
    </div>
  ),
};
