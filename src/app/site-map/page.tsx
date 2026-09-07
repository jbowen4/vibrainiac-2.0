import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { Heading } from "@/components/Heading";
import { NavDropdown, Navbar } from "@/components/Navbar";
import { NavLink } from "@/components/NavLink";
import { SocialIcon, type SocialPlatform } from "@/components/SocialIcon";
import { Text } from "@/components/Text";
import heroBackground from "../../../public/home/hero-background.png";
import { NEWS_ARTICLES } from "../about/news/news-data";

export const metadata: Metadata = {
  title: "Site Map",
  description: "Browse every page on the Vibrainiac Games website.",
};

const ABOUT_ITEMS = [
  { label: "The Team", href: "/about/team" },
  { label: "Our Values", href: "/about/values" },
];

const NAV_SOCIAL_LINKS: { platform: SocialPlatform; href: string }[] = [
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

const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "App Disclaimer", href: "/app-disclaimer" },
];

/** Toggle back on once News is ready to be publicly linked from the site map. */
const SHOW_NEWS = false;

const SITE_MAP_SECTIONS = [
  { heading: "Home", links: [{ label: "Home", href: "/" }] },
  { heading: "Games", links: [{ label: "Games", href: "/games" }] },
  {
    heading: "About",
    links: [
      { label: "The Team", href: "/about/team" },
      { label: "Our Values", href: "/about/values" },
      { label: "Partners", href: "/about/partners" },
      ...(SHOW_NEWS ? [{ label: "News", href: "/about/news" }] : []),
    ],
  },
  ...(SHOW_NEWS
    ? [
        {
          heading: "News Articles",
          links: NEWS_ARTICLES.filter((article) => !article.external).map((article) => ({
            label: article.title,
            href: `/about/news/${article.slug}`,
          })),
        },
      ]
    : []),
  { heading: "Contact", links: [{ label: "Contact Us", href: "/contact" }] },
  { heading: "Legal", links: LEGAL_LINKS },
];

export default function SiteMapPage() {
  return (
    <>
      <GradientBackdrop backgroundImage={heroBackground} fade className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <Container>
            <Navbar
              start={
                <>
                  <NavDropdown label="ABOUT" items={ABOUT_ITEMS} />
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

          <div className="flex-1 py-16 sm:py-24">
            <Container>
              <Heading as="h1" size="xl" className="mb-10 text-center">
                Site Map
              </Heading>
              <nav aria-label="Site Map" className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {SITE_MAP_SECTIONS.map((section) => (
                  <div key={section.heading}>
                    <Heading as="h2" size="sm" className="mb-4">
                      {section.heading}
                    </Heading>
                    <ul className="flex flex-col gap-3">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Text as="a" href={link.href} size="sm" tone="secondary">
                            {link.label}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </Container>
          </div>
        </div>
      </GradientBackdrop>

      <Footer
        links={FOOTER_LINKS}
        socialLinks={FOOTER_SOCIAL_LINKS}
        address={"225 N. French Avenue, Suite C\nSanford, FL 32771\nUnited States"}
      />
    </>
  );
}
