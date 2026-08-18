import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { NewsCard, type NewsCardProps } from "@/components/NewsCard";
import { NavDropdown, Navbar } from "@/components/Navbar";
import { NavLink } from "@/components/NavLink";
import { SocialIcon, type SocialPlatform } from "@/components/SocialIcon";
import heroBackground from "../../../../public/home/hero-background.png";
import { NEWS_ARTICLES } from "./news-data";

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
  { label: "Safe and Fair Play Policy", href: "/safe-and-fair-play" },
  { label: "Accessibility Statement", href: "/accessibility" },
  { label: "Other Legal Docs", href: "/legal" },
  { label: "Media Center", href: "/media-center" },
  { label: "Our Domains", href: "/domains" },
  { label: "Site Map", href: "/site-map" },
];

const NEWS_ITEMS: NewsCardProps[] = NEWS_ARTICLES.map((article) => ({
  isNew: article.isNew,
  title: article.title,
  description: article.description,
  href: article.external?.href ?? `/about/news/${article.slug}`,
  buttonLabel: article.external?.buttonLabel,
}));

export default function AboutNewsPage() {
  return (
    <>
      <GradientBackdrop backgroundImage={heroBackground} fade className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <Container>
            <Navbar
              start={
                <>
                  <NavLink href="/about/news" active>
                    NEWS
                  </NavLink>
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

          <div className="flex-1 py-16 sm:py-24">
            <Container>
              <div
                className="grid justify-center gap-12.5"
                style={{ gridTemplateColumns: "repeat(auto-fit, 351px)" }}
              >
                {NEWS_ITEMS.map((item) => (
                  <NewsCard key={item.title} {...item} />
                ))}
              </div>
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
