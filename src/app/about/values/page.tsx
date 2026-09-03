import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { Heading } from "@/components/Heading";
import { NavDropdown, Navbar } from "@/components/Navbar";
import { NavLink } from "@/components/NavLink";
import { SocialIcon, type SocialPlatform } from "@/components/SocialIcon";
import { Text } from "@/components/Text";
import { cn } from "@/lib/cn";
import forestBackground from "../../../../public/news/forest-background.png";
import heroBackground from "../../../../public/home/hero-background.png";
import { ValuesTabs, type ValuesTab } from "./ValuesTabs";

const ABOUT_ITEMS = [
  { label: "The Team", href: "/about/team" },
  { label: "Our Values", href: "/about/values", active: true },
];

const NAV_SOCIAL_LINKS: { platform: SocialPlatform; href: string }[] = [
  { platform: "x", href: "#" },
  { platform: "tiktok", href: "#" },
  { platform: "instagram", href: "#" },
  { platform: "youtube", href: "#" },
  { platform: "linkedin", href: "#" },
];

const FOOTER_SOCIAL_LINKS: { platform: SocialPlatform; href: string }[] = [
  { platform: "linkedin", href: "#" },
];

const FOOTER_LINKS = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Site Map", href: "/site-map" },
];

const VALUES_TABS: ValuesTab[] = [
  {
    label: "Play With Purpose",
    heading: "Play With Purpose",
    body: "The story, challenges choices and feedback are connected in what the player is practicing. Game mechanics are not added afterwards to make a lesson look more entertaining.",
    image: forestBackground,
  },
  {
    label: "Culture with a pulse",
    heading: "Culture With A Pulse",
    body: "Gaming, humor, creativity, and curiosity exist naturally in the same world. Our experiences are made with real people in mind.",
    blob: "magenta",
  },
  {
    label: "Growth Without Shame",
    heading: "Growth Without Shame",
    body: "You do not have to get everything right on the first attempt. Not knowing yet is not a verdict on your ability. It is the beginning of the quest.",
    blob: "sunset",
  },
];

function WireframeGlobe({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 400"
      className={cn("pointer-events-none absolute text-text-primary", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={0.75}
    >
      <circle cx="200" cy="200" r="180" />
      <ellipse cx="200" cy="200" rx="60" ry="180" />
      <ellipse cx="200" cy="200" rx="120" ry="180" />
      <ellipse cx="200" cy="200" rx="180" ry="180" opacity="0.6" />
      <ellipse cx="200" cy="200" rx="180" ry="60" />
      <ellipse cx="200" cy="200" rx="180" ry="120" />
      <line x1="20" y1="200" x2="380" y2="200" />
    </svg>
  );
}

export default function AboutValuesPage() {
  return (
    <>
      <GradientBackdrop backgroundImage={heroBackground}>
        <div className="flex flex-col">
          <Container>
            <Navbar
              start={
                <>
                  <NavDropdown label="ABOUT" items={ABOUT_ITEMS} active />
                  <NavLink href="/games">GAMES</NavLink>
                </>
              }
              end={
                <>
                  <NavLink href="/about/partners">PARTNERS</NavLink>
                  <NavLink href="/contact">CONTACT US</NavLink>
                </>
              }
              social={NAV_SOCIAL_LINKS.map((social) => (
                <SocialIcon key={social.platform} platform={social.platform} href={social.href} />
              ))}
            />
          </Container>

          <div className="flex flex-col items-center gap-5 px-6 pt-8 pb-12 text-center sm:pt-14 sm:pb-16">
            <Heading
              as="h1"
              size="xl"
              className="max-w-4xl !text-heading-sm sm:!text-heading-lg lg:!text-heading-xl"
            >
              <span className="text-accent-secondary">Fun isn&apos;t the reward at the end.</span>
              <br />
              It&apos;s part of how the learning works.
            </Heading>
            <Text size="lg" className="max-w-md">
              Vibrainiac is designed around three principles.
            </Text>
          </div>
        </div>
      </GradientBackdrop>

      <ValuesTabs tabs={VALUES_TABS} />

      <GradientBackdrop className="w-full">
        <Container className="flex flex-col items-center gap-8 py-14 text-center sm:py-20">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="solid" href="#" className="gap-2.5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 shrink-0">
                <path d="M16.4 1.6c.1 1-.3 2-.9 2.8-.6.8-1.6 1.4-2.6 1.3-.1-1 .4-2 1-2.7.6-.8 1.7-1.4 2.5-1.4Zm2.9 17.1c-.5 1.1-.7 1.6-1.4 2.6-.9 1.4-2.2 3.1-3.9 3.1-1.4 0-1.8-.9-3.7-.9-2 0-2.4.9-3.8.9-1.6 0-2.8-1.5-3.7-2.9C.4 18.7-.7 14.6.9 11.8c1.1-1.9 3-3.2 5.1-3.2 1.6 0 2.6 1 3.9 1 1.3 0 2.1-1 3.9-1 1.5 0 3.1.8 4.2 2.2-3.7 2-3.1 7.2 1.3 8.9Z" />
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-caption font-light opacity-80">Download on the</span>
                <span className="text-body-sm font-medium">App Store</span>
              </span>
            </Button>
            <Button variant="solid" href="#" className="gap-2.5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 shrink-0">
                <path d="M3.6 2.3c-.4.3-.6.8-.6 1.4v16.6c0 .6.2 1.1.6 1.4l.1.1L13 12.3v-.2L3.7 2.2l-.1.1Zm10.7 10.7 2.9-2.9 3.7 2.1c1 .6 1 1.6 0 2.2l-3.7 2.1-2.9-2.9v-.6Zm0-1.4L4.4 1.5c.3-.2.8-.2 1.3.1l9.3 5.3-.7 4.7Zm0 3.4-.7 4.7-9.3 5.3c-.5.3-1 .3-1.3.1l11.3-10.1Z" />
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-caption font-light opacity-80">Get it on</span>
                <span className="text-body-sm font-medium">Google Play</span>
              </span>
            </Button>
          </div>
        </Container>
      </GradientBackdrop>

      <div className="relative overflow-hidden bg-background-secondary py-20 sm:py-28">
        <WireframeGlobe className="top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-25 sm:size-[46rem]" />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <Heading size="lg" className="!text-accent-secondary">
            Fully Remote
          </Heading>
          <Text size="lg" className="max-w-3xl">
            Though many of us are based in Orlando, FL, our team spans the United States.
            From Florida and Georgia to Washington and beyond, we bring together
            diverse perspectives, experiences, and creative talents with one shared goal: creating
            meaningful experiences that resonate with you.
          </Text>
          <Button variant="solid" href="/about/team">
            Meet the Team
          </Button>
        </Container>
      </div>

      <Footer
        links={FOOTER_LINKS}
        socialLinks={FOOTER_SOCIAL_LINKS}
        address={"225 N. French Avenue, Suite C\nSanford, FL 32771\nUnited States"}
      />
    </>
  );
}
