import type { ReactNode } from "react";

import { Container } from "@/components/Container";
import { Divider } from "@/components/Divider";
import { Logo } from "@/components/Logo";
import { SocialIcon, type SocialPlatform } from "@/components/SocialIcon";
import { Text } from "@/components/Text";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocialLink {
  platform: SocialPlatform;
  href: string;
}

export interface FooterProps {
  links?: FooterLink[];
  socialLinks?: FooterSocialLink[];
  address?: ReactNode;
  logo?: ReactNode;
}

const DEFAULT_LINKS: FooterLink[] = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Safe and Fair Play Policy", href: "/safe-and-fair-play" },
];

/**
 * Site footer — recurs identically at the base of every sampled page:
 * legal links, social icons under a "Follow Us on" label, an address, and
 * a hairline divider above it all, on the dark elevated surface.
 */
export function Footer({
  links = DEFAULT_LINKS,
  socialLinks = [],
  address,
  logo,
}: FooterProps) {
  return (
    <footer className="w-full bg-background-elevated">
      <Container as="div" className="flex flex-col gap-8 py-16">
        <Divider tone="subtle" />

        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          {logo ?? <Logo />}

          <nav className="flex flex-wrap items-center gap-6" aria-label="Legal">
            {links.map((link) => (
              <Text key={link.href} as="a" href={link.href} size="lg">
                {link.label}
              </Text>
            ))}
          </nav>

          {socialLinks.length > 0 && (
            <div className="flex flex-col items-start gap-3">
              <Text size="lg" tone="secondary">
                Follow Us on
              </Text>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <SocialIcon key={social.platform} platform={social.platform} href={social.href} />
                ))}
              </div>
            </div>
          )}
        </div>

        {address && (
          <Text size="lg" tone="secondary">
            {address}
          </Text>
        )}
      </Container>
    </footer>
  );
}
