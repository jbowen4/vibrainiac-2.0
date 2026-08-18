import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { NavDropdown, Navbar } from "@/components/Navbar";
import { NavLink } from "@/components/NavLink";
import { SocialIcon, type SocialPlatform } from "@/components/SocialIcon";
import { Text } from "@/components/Text";
import heroBackground from "../../public/home/hero-background.png";
import heroWordmark from "../../public/home/hero-wordmark.png";

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

const FOOTER_SOCIAL_LINKS: { platform: SocialPlatform; href: string }[] = [
  { platform: "youtube", href: "#" },
  { platform: "instagram", href: "#" },
  { platform: "x", href: "#" },
  { platform: "twitter", href: "#" },
  { platform: "tiktok", href: "#" },
  { platform: "facebook", href: "#" },
  { platform: "linkedin", href: "#" },
];

const FOOTER_LINKS = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Parent's Guide", href: "/parents-guide" },
  { label: "Safe and Fair Play Policy", href: "/safe-and-fair-play" },
  { label: "Accessibility Statement", href: "/accessibility" },
  { label: "Other Legal Docs", href: "/legal" },
  { label: "Media Center", href: "/media-center" },
  { label: "Our Domains", href: "/domains" },
  { label: "Site Map", href: "/site-map" },
];

export default function Home() {
  return (
    <>
      <GradientBackdrop backgroundImage={heroBackground} className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <Container>
            <Navbar
              homeActive
              start={
                <>
                  <NavLink href="/about/news">NEWS</NavLink>
                  <NavLink href="/games">GAMES</NavLink>
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

          <div className="flex flex-1 items-center justify-center px-6 py-12">
            <Image
              src={heroWordmark}
              alt="Vibrainiac Games"
              priority
              className="h-auto w-full max-w-sm sm:max-w-xl"
            />
          </div>
        </div>
      </GradientBackdrop>

      <section className="bg-background-primary py-20 sm:py-24">
        <Container className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <Text size="xl" weight="regular">
            Vibrainiac is an independent game development studio founded by a
            team with over 20 years of collective AAA experience. Primarily
            from Electronic Arts (EA), this team has worked on games like
            Madden NFL, NBA Live, College Football &amp; The Sims, just to
            name a few. With a background in crafting world-class
            entertainment, our team brings the expertise, creativity, and
            technical excellence of AAA development to the agility and
            passion of an indie studio.
          </Text>
          <Text size="xl" weight="regular">
            We are dedicated to creating games that not only entertain, but
            also inspire and make a positive impact for everyone. We aim to
            create games that encourage empathy, connection, and meaningful
            experiences for players everywhere. Our mission is to prove that
            games can be both deeply engaging and socially uplifting,
            blending innovation, artistry, and purpose in every project we
            create.
          </Text>
          <Button variant="solid" href="/about/team">
            Meet the Team
          </Button>
        </Container>
      </section>

      <Footer
        links={FOOTER_LINKS}
        socialLinks={FOOTER_SOCIAL_LINKS}
        address={"212 E International Airport Rd\nAnchorage, AK 99518\nUnited States"}
      />
    </>
  );
}
