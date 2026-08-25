import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { Heading } from "@/components/Heading";
import { LegalNav } from "@/components/LegalNav";
import { NavDropdown, Navbar } from "@/components/Navbar";
import { NavLink } from "@/components/NavLink";
import { SocialIcon, type SocialPlatform } from "@/components/SocialIcon";
import { Text } from "@/components/Text";
import innerverseBackground from "../../../public/games/innerverse-background.png";
import innerverseLogo from "../../../public/games/innerverse-logo.png";
import innerverseOwl from "../../../public/games/innerverse-owl.png";

const RELEASE_DATE = "October 2, 2026";
const RELEASE_DATE_SHORT = "10/02/26";

const ABOUT_ITEMS = [
  { label: "The Team", href: "/about/team" },
  { label: "Our Values", href: "/about/values" },
  { label: "For Partners", href: "/about/partners" },
];

const NAV_SOCIAL_LINKS: { platform: SocialPlatform; href: string }[] = [
  { platform: "x", href: "#" },
  { platform: "tiktok", href: "#" },
  { platform: "instagram", href: "#" },
  { platform: "youtube", href: "#" },
  { platform: "linkedin", href: "#" },
];

const LEGAL_NAV_LINKS = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "App Disclaimer", href: "/app-disclaimer" },
];

export default function GamesPage() {
  return (
    <GradientBackdrop
      gradient={false}
      className="h-dvh min-h-dvh overflow-hidden"
    >
      <Image
        src={innerverseBackground}
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-(image:--gradient-fade)"
      />

      <div className="relative flex h-dvh min-h-dvh flex-col overflow-y-auto md:overflow-hidden">
        <Container className="shrink-0">
          <Navbar
            start={
              <>
                <NavLink href="/about/news">NEWS</NavLink>
                <NavLink href="/games" active>
                  GAMES
                </NavLink>
              </>
            }
            end={
              <>
                <NavDropdown label="ABOUT" items={ABOUT_ITEMS} />
                <NavLink href="/contact">CONTACT US</NavLink>
              </>
            }
            social={NAV_SOCIAL_LINKS.map((social) => (
              <SocialIcon key={social.platform} platform={social.platform} href={social.href} />
            ))}
          />
        </Container>

        <div className="flex flex-1 flex-col md:min-h-0 md:overflow-hidden">
          <Container className="flex w-full flex-1 flex-col justify-center py-6 md:min-h-0 md:py-4">
            <div className="grid flex-1 grid-cols-1 items-center gap-10 md:min-h-0 md:grid-cols-2 md:gap-8 lg:gap-14">
              <div className="order-2 flex flex-col items-start gap-6 rounded-lg bg-white/5 p-6 sm:p-8 md:order-1">
                <span
                  className="relative inline-flex items-center py-2 pr-5 pl-4 text-caption font-bold text-text-inverse shadow-elevated"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 12% 100%, 0% 62%)",
                    backgroundColor: "var(--color-accent-secondary)",
                  }}
                >
                  Coming Soon!
                </span>

                <Heading size="xl">Innerverse</Heading>

                <div className="flex flex-col gap-4 border-l-2 border-accent-primary pl-5">
                  <Text size="base" tone="secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </Text>
                  <Text size="base" tone="secondary">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </Text>
                </div>

                <Text size="base" weight="regular">
                  Coming soon on{" "}
                  <span className="font-semibold text-accent-primary">
                    {RELEASE_DATE}
                  </span>
                </Text>

                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="solid" href="#" className="gap-2.5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 shrink-0">
                      <path d="M16.4 1.6c.1 1-.3 2-.9 2.8-.6.8-1.6 1.4-2.6 1.3-.1-1 .4-2 1-2.7.6-.8 1.7-1.4 2.5-1.4Zm2.9 17.1c-.5 1.1-.7 1.6-1.4 2.6-.9 1.4-2.2 3.1-3.9 3.1-1.4 0-1.8-.9-3.7-.9-2 0-2.4.9-3.8.9-1.6 0-2.8-1.5-3.7-2.9C.4 18.7-.7 14.6.9 11.8c1.1-1.9 3-3.2 5.1-3.2 1.6 0 2.6 1 3.9 1 1.3 0 2.1-1 3.9-1 1.5 0 3.1.8 4.2 2.2-3.7 2-3.1 7.2 1.3 8.9Z" />
                    </svg>
                    <span className="flex flex-col items-start leading-tight">
                      <span className="text-caption font-light opacity-80">
                        Download on the
                      </span>
                      <span className="text-body-sm font-medium">App Store</span>
                    </span>
                  </Button>
                  <Button variant="outline" href="#" className="gap-2.5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 shrink-0">
                      <path d="M3.6 2.3c-.4.3-.6.8-.6 1.4v16.6c0 .6.2 1.1.6 1.4l.1.1L13 12.3v-.2L3.7 2.2l-.1.1Zm10.7 10.7 2.9-2.9 3.7 2.1c1 .6 1 1.6 0 2.2l-3.7 2.1-2.9-2.9v-.6Zm0-1.4L4.4 1.5c.3-.2.8-.2 1.3.1l9.3 5.3-.7 4.7Zm0 3.4-.7 4.7-9.3 5.3c-.5.3-1 .3-1.3.1l11.3-10.1Z" />
                    </svg>
                    <span className="flex flex-col items-start leading-tight">
                      <span className="text-caption font-light opacity-80">
                        Get it on
                      </span>
                      <span className="text-body-sm font-medium">Google Play</span>
                    </span>
                  </Button>
                </div>
              </div>

              <div className="relative order-1 flex h-[42vh] w-full items-center justify-center sm:h-[50vh] md:order-2 md:h-[42vh] lg:h-[50vh]">
                <div className="relative h-full w-full">
                  <Image
                    src={innerverseOwl}
                    alt="Innerverse owl mascot"
                    fill
                    priority
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-contain object-center drop-shadow-(--shadow-elevated)"
                  />
                  <div className="absolute inset-x-0 bottom-[6%] flex flex-col items-center px-4">
                    <Image
                      src={innerverseLogo}
                      alt="Innerverse"
                      className="w-full max-w-lg"
                    />
                    <span className="mt-1 font-sans text-heading-sm font-bold text-accent-primary drop-shadow-(--shadow-glow-accent)">
                      {RELEASE_DATE_SHORT}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          <div className="flex shrink-0 justify-center pb-6 md:pb-4">
            <LegalNav links={LEGAL_NAV_LINKS} />
          </div>
        </div>
      </div>
    </GradientBackdrop>
  );
}
