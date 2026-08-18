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
  links: FooterLink[];
  socialLinks?: FooterSocialLink[];
  address?: ReactNode;
  logo?: ReactNode;
}

/**
 * Site footer — recurs identically at the base of every sampled page: a
 * "Follow Us on" social row, a hairline divider, a row of legal links,
 * then an address with the brand mark aligned to the right, on the dark
 * elevated surface.
 */
export function Footer({ links, socialLinks = [], address, logo }: FooterProps) {
  return (
    <footer className="w-full bg-background-elevated">
      <Container as="div" className="flex flex-col gap-8 py-16">
        {socialLinks.length > 0 && (
          <div className="flex flex-col items-start gap-3">
            <Text size="sm" tone="secondary">
              Follow Us on
            </Text>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <SocialIcon key={social.platform} platform={social.platform} href={social.href} />
              ))}
            </div>
          </div>
        )}

        <Divider tone="subtle" />

        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3" aria-label="Legal">
          {links.map((link) => (
            <Text key={link.href} as="a" href={link.href} size="sm" tone="secondary">
              {link.label}
            </Text>
          ))}
        </nav>

        <div className="flex items-end justify-between gap-8 pt-6">
          {address && (
            <Text size="sm" tone="secondary" className="whitespace-pre-line">
              {address}
            </Text>
          )}
          {logo ?? <Logo size={40} />}
        </div>
      </Container>
    </footer>
  );
}
