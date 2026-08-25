import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Container } from "./Container";
import { GradientBackdrop } from "./GradientBackdrop";
import { NavDropdown, Navbar } from "./Navbar";
import { NavLink } from "./NavLink";
import { SocialIcon } from "./SocialIcon";

const ABOUT_ITEMS = [
  { label: "The Team", href: "#team" },
  { label: "Our Values", href: "#values" },
];

const meta = {
  title: "Navigation/Navbar",
  component: Navbar,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <GradientBackdrop className="p-6">
      <Navbar
        start={
          <>
            <NavDropdown label="ABOUT" items={ABOUT_ITEMS} active />
            <NavLink href="#">GAMES</NavLink>
          </>
        }
        end={
          <>
            <NavLink href="#">PARTNERS</NavLink>
            <NavLink href="#">CONTACT US</NavLink>
          </>
        }
        social={
          <>
            <SocialIcon platform="x" href="#" />
            <SocialIcon platform="tiktok" href="#" />
            <SocialIcon platform="instagram" href="#" />
            <SocialIcon platform="youtube" href="#" />
            <SocialIcon platform="linkedin" href="#" />
          </>
        }
      />
    </GradientBackdrop>
  ),
};

export const HomeActive: Story = {
  render: () => (
    <GradientBackdrop className="min-h-70">
      <Container>
        <Navbar
          homeActive
          start={
            <>
              <NavDropdown label="ABOUT" items={ABOUT_ITEMS} />
              <NavLink href="#">GAMES</NavLink>
            </>
          }
          end={
            <>
              <NavLink href="#">PARTNERS</NavLink>
              <NavLink href="#">CONTACT US</NavLink>
            </>
          }
          social={
            <>
              <SocialIcon platform="x" href="#" />
              <SocialIcon platform="tiktok" href="#" />
              <SocialIcon platform="instagram" href="#" />
              <SocialIcon platform="youtube" href="#" />
              <SocialIcon platform="linkedin" href="#" />
            </>
          }
        />
      </Container>
    </GradientBackdrop>
  ),
};

export const DropdownOpen: Story = {
  render: () => (
    <GradientBackdrop className="p-6 pb-64">
      <Navbar
        start={
          <>
            <NavDropdown label="ABOUT" items={ABOUT_ITEMS} />
            <NavLink href="#">GAMES</NavLink>
          </>
        }
        end={
          <>
            <NavLink href="#">PARTNERS</NavLink>
            <NavLink href="#">CONTACT US</NavLink>
          </>
        }
        social={
          <>
            <SocialIcon platform="x" href="#" />
            <SocialIcon platform="tiktok" href="#" />
            <SocialIcon platform="instagram" href="#" />
            <SocialIcon platform="youtube" href="#" />
            <SocialIcon platform="linkedin" href="#" />
          </>
        }
      />
    </GradientBackdrop>
  ),
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector<HTMLButtonElement>(
      "button[aria-haspopup='menu']"
    );
    trigger?.click();
  },
};

export const PartnersActive: Story = {
  render: () => (
    <GradientBackdrop className="p-6">
      <Navbar
        start={
          <>
            <NavDropdown label="ABOUT" items={ABOUT_ITEMS} />
            <NavLink href="#">GAMES</NavLink>
          </>
        }
        end={
          <>
            <NavLink href="#" active>
              PARTNERS
            </NavLink>
            <NavLink href="#">CONTACT US</NavLink>
          </>
        }
        social={
          <>
            <SocialIcon platform="x" href="#" />
            <SocialIcon platform="tiktok" href="#" />
            <SocialIcon platform="instagram" href="#" />
            <SocialIcon platform="youtube" href="#" />
            <SocialIcon platform="linkedin" href="#" />
          </>
        }
      />
    </GradientBackdrop>
  ),
};
